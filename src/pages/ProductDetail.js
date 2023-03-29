import { useParams } from "react-router-dom";

function ProductDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>Products Details!</h1>
      <p>{params.productId}</p>
    </>
  );
}

export default ProductDetailPage;
