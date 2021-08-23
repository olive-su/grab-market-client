import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";
function ProductPage() {
  const { id } = useParams(); //인덱스를 id 값으로 받아옴 -> jsx 문법으로 표현
  const [product, setProduct] = useState(null); //값이 없음 : null product에 처음엔 null이 들어감
  useEffect(function () {
    //렌더링 될때마다 네트워크 통신을 하지 않도록 useEffect를 딱 한번만 해줌

    axios
      .get(`http://localhost:8080/products/${id}`)
      .then(function (result) {
        setProduct(result.data.product); // product 테이블에 접근
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []); // 여기에 값이 없으면 한번만 렌더링 됨

  if (product === null) {
    // 처음 초기화 상태에서 오류가 나지 않도록 해당 부분 추가
    return <h1> 상품 정보를 받고 있습니다...</h1>;
  }

  return (
    // 기본적으로 비동기 통신이기때문에 네트워크 통신을 받기 전에 해당 리턴문이 실행된다면 오류가 발생한다.
    <div>
      <div id="image-box">
        <img src={"/" + product.imageUrl} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}원</div>
        <div id="createdAt">2021년 8월 7일</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
}

export default ProductPage;
