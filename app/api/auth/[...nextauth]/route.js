import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import clientPromise from "@/app/util/Mongo";
import bcrypt from "bcryptjs";

// MongoDB bağlantısı oluşturma
// Kullanıcıyı veritabanında bulmak için yardımcı fonksiyon
async function findUser(username, password) {
  const client = await clientPromise;
  const db = client.db("session");
  
  // Veritabanında kullanıcıyı bul
  const user = await db.collection("users").findOne({ username });
  
  // Kullanıcıyı ve şifrenin doğruluğunu kontrol et
  if (user && await bcrypt.compare(password, user.password)) {
    return user;
  }
  return null;
}

export const options = {
  providers: [
    // Kimlik bilgileri ile giriş sağlayan provider
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Kullanıcı Adı :", type: "text", placeholder: "Kullanıcı adı giriniz" },
        password: { label: "Şifre :", type: "password", placeholder: "Şifrenizi giriniz" },
      },
      async authorize(credentials, req) {
        // Kullanıcıyı bul ve şifreyi kontrol et
        const user = await findUser(credentials.username, credentials.password);
        if (user) {
          return { id: user._id, name: user.username };
        } else {
          return null;
        }
      },
    }),
    // GitHub ile giriş sağlayan provider
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
};

// NextAuth handler'ı oluşturma
const handler = NextAuth(options);

// GET ve POST istekleri için handler'ı dışa aktar
export { handler as GET, handler as POST };
