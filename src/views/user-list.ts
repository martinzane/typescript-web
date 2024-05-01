import User, { UserData } from "../models/user";
import CollectionView from "./collection";
import UserShow from "./user-show";

class UserList extends CollectionView<User, UserData> {
  renderItem(parent: Element, model: User): void {
    new UserShow(parent, model).render();
  }
}

export default UserList;
