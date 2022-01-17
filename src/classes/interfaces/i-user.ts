import IModel from "./i-model";

export default interface IUser extends IModel {
  name: string;
  email: string;
  password: string;
}