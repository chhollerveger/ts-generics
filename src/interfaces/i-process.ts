export default interface IProcess<InterfaceType> {

  value: InterfaceType;
  startProcessing(params: InterfaceType): InterfaceType;

}