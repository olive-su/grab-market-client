import "antd/dist/antd.css";
import "./App.css";
import MainPageComponent from "./main";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import UploadPage from "./upload";
import ProductPage from "./product";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons"; // 아이콘도 하나의 컴포넌트

function App() {
  const history = useHistory(); // useHistory 객체 생성
  return (
    <div>
      <div id="header">
        {/* 부모는 항상 헤더와 바디를 갖도록 구현 */}
        <div id="header-area">
          <Link to="/">
            {/* 로고 눌렀을때 홈으로 가게 link 지정 */}
            <img src="/images/icons/logo.png" />
          </Link>
          {/* 기본적으로 onClick은 콜백함수가 사용됨 */}
          <Button
            size="large"
            onClick={function () {
              history.push("/upload"); // 업로드 화면으로 넘어감
            }}
            icon={<DownloadOutlined />}
          >
            상품 업로드
          </Button>
        </div>
      </div>
      <div id="body">
        <Switch>
          <Route exact={true} path="/">
            {/* 기본으로 보이는 페이지는 exact True 로 설정 */}
            <MainPageComponent />;
          </Route>
          <Route exact={true} path="/products/:id">
            <ProductPage />
          </Route>
          <Route exact={true} path="/upload">
            <UploadPage />
          </Route>
        </Switch>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
