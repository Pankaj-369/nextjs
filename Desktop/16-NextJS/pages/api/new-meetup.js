import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://pankajkandpal24:1234@cluster0.l3uwaim.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupcollection = db.collection("meetups");

    const result = await meetupcollection.insertOne(data);

    console.log(result);
    client.close();
    res.status(201).json({ message: "meetup inserted" });
  }
}
export default handler;
