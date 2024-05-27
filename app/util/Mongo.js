import { MongoClient, ServerApiVersion } from "mongodb";

// MongoDB bağlantı URI'sini kontrol et
if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

let client;
let clientPromise;

// Geliştirme modunda global bir değişken kullanarak değeri koruruz
if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // Üretim modunda global değişken kullanmamak en iyisidir
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Module scoped MongoClient promise dışa aktarımı
export default clientPromise;
