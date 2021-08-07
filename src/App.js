import "./App.css";
import MainPageComponent from "./main";
import { Switch, Route } from "react-router-dom";
import UploadPage from "./upload";
import ProductPage from "./product";

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/">
          {/* 기본으로 보이는 페이지는 exact True 로 설정 */}
          <MainPageComponent />;
        </Route>
        <Route exact={true} path="/product/:id">
          <ProductPage />
        </Route>
        <Route exact={true} path="/upload">
          <UploadPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
