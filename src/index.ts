import Collection from "./models/collection";

const collection = new Collection("http://localhost:3000/users");

collection.on("change", () => {
  console.log(collection);
});

collection.fetch();
