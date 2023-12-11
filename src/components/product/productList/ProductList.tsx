import { useEffect, useState } from 'react';

import ProductDetail from '../ProductDetail';

// types
import { ProductInfo } from '../../../types/product';

// dummy-data
import productItemData from '../productData.json';
import axios from 'axios';
import { useInView } from 'react-intersection-observer';
import ProductCard from '../productCard/ProductCard';

import * as S from './ProductList.style';

const ROWS_PER_PAGE = 15; // 한 페이지당 불러올 상품개수

const ProductList = () => {
  const [isOpen, setIsOpen] = useState(false);



  return (
    <S.ProductListWrap>
      {/* <ProductDetail isOpen={isOpen} onClose={() => setIsOpen(false)} /> */}
      {
        productItemData.map((product: any, index: number) => (
          <ProductCard key={index} product={product} />
        ))
      }
      {/* <div ref={ref} /> */}
    </S.ProductListWrap>
  );
};

export default ProductList;