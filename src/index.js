import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// ReactDOM.render(<App />, document.getElementById('root')); // <== 이건 HTML 이 아니다!!
// // 위와 같은 것들을 Component 라고 한다! 

// // component 는 함수다. HTML 을 반환하는 함수 이다!
// // react는 component 를 사용해서 HTML 처럼 작성하려는 경우에 필요하다!
// // 이러한 JS 와 HTML 의 조합을 JSX 라고 한다!

// // 자, 그러면 component 는 어떻게 만들 수 있을까?


// ReactDOM.render(<App /><Potato/>, document.getElementById('root')); // <== 이러면 작동하지 않는다.
// // react applicaiton 은 오직 하나의 component 만을 렌더링 한다.
// // 그리고, applicaiton 수 많은 component 들을 넣을 수 있다.

ReactDOM.render(<App/>, document.getElementById('root')); // 
