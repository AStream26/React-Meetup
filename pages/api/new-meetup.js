import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://astream26:26022999@cluster0.hsbem.mongodb.net/meetings?retryWrites=true&w=majority"
    );
    const db = client.db();
    const collections = db.collection("meetings");
    const result = await collections.insertOne(data);

    console.log(result);
    client.close();

    res.status(200).json({
      message: "Data Added Successfully",
    });
  }
}

export default handler;
