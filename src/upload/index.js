import { Form, Divider, Input, InputNumber, Button } from "antd";
import "./index.css";
function UploadPage() {
  const onSubmit = (values) => {
    // form 안에 입력한 값들이 values에 저장됨
    console.log(values);
  };
  return (
    <div id="upload-container">
      <Form name="상품 업로드" onFinish={onSubmit}>
        <Form.Item name="upload" label={<div className="upload-label">상품 사진</div>}>
          <div id="upload-img-placeholder">
            <img src="/images/icons/camera.png" />
            <span>이미지를 업로드 해주세요.</span>
          </div>
          {/* name 은 key 값 */}
        </Form.Item>
        <Divider /> {/* 선하나를 그어줌 */}
        <Form.Item
          label={<div className="upload-label">판매자 명</div>}
          name="seller"
          rules={[{ required: true, message: "판매자 이름을 입력해주세요." }]}
        >
          {/* 라벨:설명, jsx 문법 으로 중괄호, 내부에 태그를 달아서 만듦 */}
          <Input
            className="upload-name"
            size="large"
            placeholder="이름을 입력해주세요."
          />
          {/* placeholder는 입력전 기본 텍스트값  */}
        </Form.Item>
        <Divider />
        <Form.Item
          name="name"
          label={<div className="upload-label">상품 이름</div>}
          rules={[{ required: true, message: "상품 이름을 입력해주세요." }]}
        >
          <Input
            className="upload-name"
            size="large"
            placeholder="상품 이름을 입력해주세요."
          />
        </Form.Item>
        <Divider />
        <Form.Item
          name="price"
          label={<div className="upload-label">상품 가격</div>}
          rules={[{ required: true, message: "상품 가격을 입력해주세요." }]}
        >
          {/* 숫자 입력 받는 inputnumber */}
          <InputNumber defaultValue={0} className="upload-name" />
        </Form.Item>
        <Divider />
        <Form.Item
          name="description"
          label={<div className="upload-label">상품 소개</div>}
          rules={[{ required: true, message: "상품 소개를 입력해주세요." }]}
        >
          {/* 텍스트 입력 받는 textarea */}
          <Input.TextArea
            size="large"
            id="product-description"
            showCount /*인자 입력 안하면 디폴트로 True로 됨*/
            maxLength={300}
            placeholder="상품 소개를 적어주세요."
          />
        </Form.Item>
        <Form.Item>
          <Button id="submit-button" size="large" htmlType="submit">
            문제 등록하기
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default UploadPage;
