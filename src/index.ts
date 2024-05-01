import User from "./models/user";

const collection = User.createCollection();

collection.on("change", () => {
  console.log(collection);
});

collection.fetch();
