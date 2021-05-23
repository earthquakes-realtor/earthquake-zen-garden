type Schema = {
  description: string;
  key: string;
  formatter?(data: number | string): number | string;
};

type Data = Record<string, string | number>;

export interface IDetailsListProps {
  schema: Schema[];
  data: Data;
}
