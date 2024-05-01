import Collection from "./models/collection";
import User, { UserData } from "./models/user";

const collection = new Collection<User, UserData>(
  "http://localhost:3000/users",
  (json: UserData) => User.createUser(json)
);

collection.on("change", () => {
  console.log(collection);
});

collection.fetch();
