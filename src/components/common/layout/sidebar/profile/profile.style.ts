import styled from 'styled-components';

export const Aside = styled.aside`
  width: 80%;
  height: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: solid 1px #d8d8d8;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #fff;
`;

export const ProfileBox = styled.div`
  width: 100%;
  height: 170px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgFrame = styled.div`
  width: 144px;
  height: 144px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 2px solid transparent;
  background-image: linear-gradient(#fff, #fff), 
  linear-gradient(to right, #00c6ff 0%,  #0027ff 100%);
  background-origin: border-box;
  background-clip: content-box, border-box;
`;

export const ProfileImg = styled.img`
  width: 140px;
  height: 140px;
  display: flex;
  border-radius: 50%;
`;

export const NavBox = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: 25%;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: inherit;
  background-color:transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;
