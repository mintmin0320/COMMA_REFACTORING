import { ChangeEvent, useRef, useState } from 'react';
import styled from 'styled-components';

// icons
import { FcAddImage } from "react-icons/fc";

// CSS
const StyledAddProductContainer = styled.div`
  width: 100%;
  height: calc(35% - 1px);
  display: flex;
`;

/* 이미지 추가 */
const StyledAddProductForm = styled.form`
  width: calc(40% - 1px);
  height: 100%;
  border-right: solid 1px #d8d8d8;
`;

const StyledAddProductImgBox = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  border-bottom: solid 1px #d8d8d8;
`;

const StyledIconWrapper = styled.div`
  cursor: pointer;
`;

const StyledAddProductUploadInput = styled.input`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

/* 이미지 추가 */
const StyledProductTitleInput = styled.input`
  width: 99%;
  height: 40px;
  border: none;
  border-bottom: solid 1px #d8d8d8;
`;

const StyledProductCategoryBox = styled.div`
  width: 100%;
  height: 40%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);  /* 2열로 하려면 2를 입력 */
  align-items: center;
  border-bottom: solid 1px #d8d8d8;
`;

const StyledCategoryLabel = styled.label`
  display: flex;
  align-items: center;
`;

const StyledProductBottomBox = styled.div`
  width: 100%;
  height: calc(35% - 45px);
  display: flex;
`;

const StyledProductCountInput = styled.input`
  width: 50%;
  height: calc(100% - 2px);
  border: none;
`;

const StyledProductAddBtn = styled.button`
  width: 50%;
  height: 100%;
  border: none;
  cursor: pointer;
`;

const AdminAddProduct = () => {
  const menuItem: string[] = ['전체', '센서', '모듈', '조명', 'IC', '모터', '보드', '다이오드', '부저', '스위치', '저항', '캐패시터', '트랜지스터', '기타'];
  const InputRef = useRef<HTMLInputElement>(null);
  const [productImg, setProductImg] = useState<File | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>(menuItem[0]);

  const handleCategoryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedCategory(e.target.value);
  };

  const handleOnImgUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (!files || files.length === 0) {
      return;
    }

    const selectedFile = files[0];
    setProductImg(selectedFile);
  };

  return (
    <StyledAddProductContainer>
      <StyledAddProductForm>
        <StyledAddProductImgBox>
          <StyledIconWrapper
            onClick={() => InputRef.current?.click()}
          >
            <FcAddImage size='50px' />
          </StyledIconWrapper>
          <StyledAddProductUploadInput
            onChange={handleOnImgUpload}
            type='file'
            hidden={true}
            ref={InputRef}
            accept="image/jpg, image/png, image/jpeg"
          />
        </StyledAddProductImgBox>
        <StyledProductTitleInput placeholder='상품명을 입력해주세요.' />
        <StyledProductCategoryBox>
          {menuItem.map((category, index) => (
            <StyledCategoryLabel key={index}>
              <input
                type="radio"
                value={category}
                checked={selectedCategory === category}
                onChange={handleCategoryChange}
              />
              {category}
            </StyledCategoryLabel>
          ))}
        </StyledProductCategoryBox>
        <StyledProductBottomBox>
          <StyledProductCountInput placeholder='보유 개수를 입력하세요.' />
          <StyledProductAddBtn>
            등록
          </StyledProductAddBtn>
        </StyledProductBottomBox>
      </StyledAddProductForm>
    </StyledAddProductContainer>
  );
};

export default AdminAddProduct;