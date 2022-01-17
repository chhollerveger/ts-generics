import CategoryModel from "./models/category-model";
import UserModel from "./models/user-model";

const user = new UserModel();

console.log(user.create({
  id: 1,
  name: "Peter Parker",
  email: "peter.parker@nyc.com",
  password: "123456",
  created_at: new Date("2015-06-01"),
  updated_at: new Date("2020-01-20")
}));

console.log(user.read(1));

console.log(user.update(1, {
  id: 1,
  name: "Spider Man",
  email: "spider.man@nyc.com",
  password: "123456",
  created_at: new Date("2015-06-01"),
  updated_at: new Date("2020-01-20")
}));

console.log(user.delete(1));

const category = new CategoryModel();

console.log(category.create({
  id: 1,
  name: "TypeScript",
  created_at: new Date("2015-06-01"),
  updated_at: new Date("2020-01-20")
}));