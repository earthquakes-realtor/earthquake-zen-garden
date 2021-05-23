type ColumnDef = {
  key: string;
  title: string;
  sortable?: boolean;
  align?: string;
  link?: {
    paramKey: string;
    path: string;
  };
  formatter?(data: string | number): string | number;
};

export enum Direction {
  Asc = 1,
  Desc = -1,
}

type RowData = {
  [key: string]: any;
};

export interface IGridProps {
  columnDefs: ColumnDef[];
  rowData: RowData[];
}
