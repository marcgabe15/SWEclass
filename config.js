module.exports = {
    db: {
        uri: "mongodb+srv://guestuser:asdfghjkl@cen3031-marc-rhpb2.mongodb.net/test?retryWrites=true&w=majority"
    }
}



const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://<username>:<password>@cen3031-marc-rhpb2.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
