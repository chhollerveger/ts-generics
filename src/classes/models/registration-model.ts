export default class RegistrationModel<InterfaceModel> {

  create(data: InterfaceModel): InterfaceModel {
    console.log("Creating a new record...");
    return data;
  }

  read(id: number): InterfaceModel {
    console.log(`Reading ID ${id} record...`);
    return {} as InterfaceModel;
  }

  update(id: number, data: InterfaceModel): InterfaceModel {
    console.log(`Updating ID ${id} data...`);
    return data;
  }

  delete(id: number): boolean {
    console.log(`Deleting ID ${id} data...`);
    return true;
  }

}