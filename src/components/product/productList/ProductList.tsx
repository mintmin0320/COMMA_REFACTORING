import { Fragment, useEffect, useState } from 'react';

import ProductDetail from '../ProductDetail';
// types
import { Arduino, ProductInfo } from '../../../types/product';

import { useInView } from 'react-intersection-observer';
import ProductCard from '../productCard/ProductCard';

import * as S from './ProductList.style';

import { useSearchProductQuery } from '../../../query-hooks/product/useSearchProductQuery';

const ProductList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { data, fetchNextPage } = useSearchProductQuery();

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  console.log(data);

  return (
    <S.Wrap>
      {/* <ProductDetail isOpen={isOpen} onClose={() => setIsOpen(false)} /> */}
      {
        data?.pages.map((group, i) => (
          <Fragment key={i}>
            {group.arduinos.map((project: Arduino, index: number) => (
              <ProductCard key={index} product={project} />
            ))}
          </Fragment>
        ))
      }
      <div ref={ref} />
    </S.Wrap>
  );
};

export default ProductList;