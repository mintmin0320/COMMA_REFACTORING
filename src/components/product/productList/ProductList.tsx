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
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import client from '../../../lib/client';


const ROWS_PER_PAGE = 15; // 한 페이지당 불러올 상품개수

const ProductList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const fetchPokemon = async () => {
    const { data } = await client.get(
      'https://pokeapi.co/api/v2/pokemon/dittoㅇ'
    );

    console.log(data)

    return data;
  };

  const { data, isLoading, error } = useQuery(
    {
      queryKey: ['pokemon'],
      queryFn: fetchPokemon,
      throwOnError: true
    }
  );

  if (isLoading) {
    return <div>Loading~</div>;
  }


  console.log(data)


  // if (isError) {
  //   return <div>Error: {error.message}</div>;
  // }



  return (
    <S.ProductListWrap>
      {data?.name}
      {/* <ProductDetail isOpen={isOpen} onClose={() => setIsOpen(false)} /> */}
      {
        // data.map((product: any, index: number) => (
        //   <ProductCard key={index} product={product} />
        // ))
      }
      {/* <div ref={ref} /> */}
    </S.ProductListWrap>
  );
};

export default ProductList;