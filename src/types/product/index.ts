export * from './detail.types';
export * from './productList.types';

export interface Arduino {
  arduinoId: number;
  name: string;
  count: number;
  stockStatus: string;
  categories: string[];
}