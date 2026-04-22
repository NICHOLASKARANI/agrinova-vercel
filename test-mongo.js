const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://agrinova_user:AgriNova2024Secure@cluster0.hqzbmb3.mongodb.net/agrinova?retryWrites=true&w=majority&appName=Cluster0";

async function testConnection() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log('? Successfully connected to MongoDB Atlas!');
    
    const db = client.db('agrinova');
    const collections = await db.listCollections().toArray();
    console.log(`?? Available collections: ${collections.length}`);
    
    process.exit(0);
  } catch (error) {
    console.error('? Connection failed:', error.message);
    process.exit(1);
  } finally {
    await client.close();
  }
}

testConnection();
