import Box from "./Box";

// APP 컴포넌트 - JSX 문법으로 HTML 생성 / 컴포넌트명은 첫글자 항상 '대문자'
function App() {
  const title = "타이틀 입니다";
  const list = (
    <ul>
      <li>루피</li>
      <li>피카츄</li>
      <li>강쥐</li>
    </ul>
  );
  return (
    <>
      <h1>앱의 이름을 변수로</h1>
      <h2>{title}</h2>
      <p>{list}</p>
      <Box></Box>
      <Box />
    </>
  );
}

//JS 모듈 생성
export default App;
// node.js랑 다름
// export default 함수명
// 함수를 export(내보내고) -> index.js에서 import(불러온다)한다
