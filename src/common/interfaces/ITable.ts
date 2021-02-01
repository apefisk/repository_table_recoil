export default interface ITable {
  index: number;
  updateIndex?: (input: number) => void | null;
  children?: JSX.Element;
}
