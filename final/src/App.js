import { useState } from "react";
import "./App.css";

function App() {
  // 색을 지정하기위해 사용 - 초기값은 Purple
  const [color, setColor] = useState("Purple");
  // 입력이 들어 올 때마다 입력한 값을 감지하여 색을 변경하기 위한 기능
  const onChangeColor = (e) => {
    setColor(e.target.value);
  };
  return (
    // 입력 받을 때 마다 color가 변경되어 반영됨
    <div className="App" style={{ background: `${color}` }}>
      <div className="wrapper">
        <label>Background Color : </label>
        <input
          onChange={(e) => {
            onChangeColor(e);
          }}
          value={color}
        />
      </div>
    </div>
  );
}

export default App;
