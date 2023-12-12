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

  const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const fetchPokemon = async () => {
    // 1에서 3 사이의 랜덤한 숫자 생성
    const n = getRandomInt(1, 3);

    const { data } = await client.get(
      `https://pokeapi.co/api/v${n}/pokemon/ditto`
    );

    console.log(data);

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