import ITable from "common/interfaces/ITable";

export default interface ILoadableTable extends ITable {
  value: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    contents: any | null;
    error: Error | null;
    loading: boolean;
  };
}
