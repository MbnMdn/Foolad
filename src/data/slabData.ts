export type SlabData = {
  slabNo: string;
  width: string;
  length: string;
  widthXAxis: number[];
  widthData: number[];
  heightXAxis: number[];
  heightData: number[];
};

export const slabData: SlabData[] = [
  {
    slabNo: '1',
    width: '45',
    length: '8733',
    widthXAxis: [1, 2, 3, 5, 8, 10],
    widthData: [2, 5.5, 2, 8.5, 1.5, 5],
    heightXAxis: [1, 2, 3, 5, 8, 10],
    heightData: [2, 5.5, 2, 8.5, 1.5, 5],
  },
];
