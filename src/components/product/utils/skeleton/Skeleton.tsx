import * as S from './Skeleton.style';

const SkeletonProductCard = () => {
  return (
    <S.Card>
      <S.ImgBox />
      <S.TitleBox />
      <S.TitleBox />
    </S.Card>
  );
};

const Skeleton = () => {
  return (
    <S.Container>
      {Array.from({ length: 12 }, (_, i) =>
        <SkeletonProductCard key={i} />
      )}
    </S.Container>
  );
};

export default Skeleton