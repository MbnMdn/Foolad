export interface SlabData {
  slabNo: number;
  width: number;
  length: number;
  widthXAxis: number[];
  widthData: number[];
  heightXAxis: number[];
  heightData: number[];
}

export interface TableColumn {
  header: string;
  accessor: keyof SlabData;
}

export interface TableProps {
  columns: TableColumn[];
  data: SlabData[];
  onRowClick: (row: SlabData) => void;
}

export interface BasicLineChartProps {
  xAxisData: number[];
  seriesData: number[];
}
