export interface OrderInfo {
  orderId: number;
  orderDate: string;
  orderList: ModalOrderProps[];
  orderStatus: '대기' | '승인' | '거절';
}

export interface ModalOrderProps {
  productId: number;
  productTitle: string;
  productCount: number;
}