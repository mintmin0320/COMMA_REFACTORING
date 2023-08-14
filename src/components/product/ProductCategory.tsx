import styled from 'styled-components';

function ProductCategory() {
  const MenuItem: string[] = ['전체', '센서', '모듈', '조명', 'IC', '모터', '보드', '다이오드', '부저', '스위치', '저항', '캐패시터', '트랜지스터', '기타']
  return (
    <ProductCategoryBox>
      {
        MenuItem.map((item: string) => {
          return (
            <ProductCategoryItem>{item}</ProductCategoryItem>
          )
        })
      }
    </ProductCategoryBox>
  );
};

export default ProductCategory;

const ProductCategoryBox = styled.div`
  width: 100%;
  height: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  border: solid 1px #d8d8d8;
  border-radius: 8px;
`;

const ProductCategoryItem = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;