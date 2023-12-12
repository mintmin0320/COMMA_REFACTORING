const Skeleton = ({ error, resetErrorBoundary }: any) => {
  return (
    <div >
      <p> 에러: {error.message} </p>
      <button onClick={() => resetErrorBoundary()}> 다시 시도 </button>
    </div>
  );
};

export default Skeleton;
