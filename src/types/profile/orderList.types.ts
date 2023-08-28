export interface OrderInfo {
  orderId: number;
  orderDate: string;
  orderList: object[];
  orderStatus: '대기' | '승인' | '거절';
}