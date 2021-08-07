import { useParams } from "react-router-dom";
function ProductPage() {
  const { id } = useParams(); //인덱스를 id 값으로 받아옴 -> jsx 문법으로 표현
  return <h1>상품 상세 페이지 {id} 상품</h1>;
}

export default ProductPage;
