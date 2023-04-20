import React, { useEffect, useState } from 'react';

function Choose() {
  // 버튼을 눌렀을 때 버튼의 value값을 저장하기 위한 state
  const [fruit, setfFruit] = useState("");

  // 버튼을 누르면 버튼의 value값을 state에 저장하게 해주는 함수
  function onChoose(e){
    setfFruit(e.target.value);
  }

  // setfFruit이 동작할 때 마다 render하게 해준다
  useEffect(()=>{},[setfFruit])
  return (
    <div className="App">
      <h1>어떤 과일을 좋아하시나요? {fruit}</h1>
      <button
        name="apple"
        value={"사과."}
        onClick={onChoose}>
          사과
      </button>
      <button
        name="apple"
        value={"오렌지."}
        onClick={onChoose}>
          오렌지
      </button>
      <button
        name="apple"
        value={"바나나."}
        onClick={onChoose}>
          바나나
      </button>
    </div>
  );
}


export default Choose;