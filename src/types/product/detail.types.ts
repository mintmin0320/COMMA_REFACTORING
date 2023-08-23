// 상세 페이지 모달
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// 추천 상품
export interface RecommendInfo {
  recommendId: number;
  recommendTitle: string;
  recommendCategory: string;
  recommendImg: string;
  recommendCount: number;
}