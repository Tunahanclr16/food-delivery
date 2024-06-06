// NextAuth modülünü ve gerekli sağlayıcıları (providers) import etme
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import clientPromise from "@/app/util/Mongo"; // MongoDB bağlantı fonksiyonunuz
import bcrypt from "bcryptjs"; // Şifreleri karşılaştırmak için bcrypt kütüphanesi
import User from "../../../../models/User"; // Kullanıcı modeliniz

// Kullanıcı doğrulama fonksiyonu
async function signInUser({ user, password }) {
  // Kullanıcının girdiği şifreyi veritabanındaki hashlenmiş şifre ile karşılaştırma
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (isPasswordValid) {
    return user; // Şifre doğruysa kullanıcıyı döndür
  } else {
    throw new Error("Invalid email or password"); // Şifre yanlışsa hata fırlat
  }
}

// MongoDB bağlantısı oluşturma ve kullanıcıyı bulma fonksiyonu
async function findUser(email, password) {
  // MongoDB bağlantısını al
  const client = await clientPromise;
  const db = client.db("session");

  console.log("Finding user with email:", email);

  // Veritabanında email'e göre kullanıcıyı bul
  const user = await db.collection("users").findOne({ email });

  if (user) {
    console.log("User found:", user);
    // Şifreyi kontrol et
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      console.log("Password is valid");
      return user; // Şifre doğruysa kullanıcıyı döndür
    } else {
      console.error("Password is incorrect");
      return null; // Şifre yanlışsa null döndür
    }
  } else {
    console.error("User not found");
    return null; // Kullanıcı bulunamazsa null döndür
  }
}

// NextAuth konfigürasyonu
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Kullanıcı giriş bilgilerini al
        const email = credentials.email;
        const password = credentials.password;
        const user = await User.findOne({ email: email });
        if (!user) {
          throw new Error("You haven't registered yet!"); // Kullanıcı kayıtlı değilse hata fırlat
        }
        return signInUser({ user, password }); // Kullanıcıyı doğrula ve döndür
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  session: {
    jwt: true, // JSON Web Token (JWT) kullanarak oturumları yönet
  },
  pages: {
    signIn: '/auth/login', // Giriş sayfasının URL'si
  },
  database: process.env.MONGODB_URI, // Veritabanı bağlantı dizesi
  secret: "secret", // Gizli anahtar
};

// NextAuth handler'ı oluştur ve GET ile POST isteklerine yanıt ver
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };