import React from "react";

// // Food 컴포넌트 생성!
// function Food() {
//   return <h1>I like Food</h1>;
// }

// function App() {
//   return (
//     <div>
//       <h1>Hello !!!</h1>
//       <Food 
//         fav="kimch"
//         something={true} 
//         papapapa={["hello", 1, 2, 3, 4, true]}
//       />
//       {/* => Food 컴포넌트에 props (= property) 을 줬다. fav 와 value (kimch) 를 줬다. (그외에도 많음.) */}

//     </div> 
//   );
// }

// // Food 컴포넌트의 argument로 props 를 입력하면, 위에 작성한 props 들을 가져올 수 있다!
// function Food(props) {
//   console.log(props); // => 직접 확인해봐~!
//   return <h1>I like Food</h1>;
// }

// // fav 만 출력해보자. 
// function Food(props) {
//   console.log(props.fav); 
//   return <h1>I like Food</h1>;
// }
// //! ES6 에서는 다음처럼도 쓸 수 있다! props.fav 는 { fav } 와 "의미가 같다"!
// function Food({ fav }) {
//   console.log(fav); 
//   return <h1>I like Food</h1>;
// }

// // 응용해보자.
// function Food({ fav }) {
//   return <h1>I like {fav}</h1>; //! JSX 를 사용할때는 브라켓 {} 으로 감싸서 사용한다!
// }


// 자 이제! 위의 배운것들을 사용해서 "재사용" 해보자!
function Food({ fav }) {
  return <h1>I like {fav}</h1>; //! JSX 를 사용할때는 브라켓 {} 으로 감싸서 사용한다!
}

function App() {
  return (
    <div>
      <h1>Hello !!!</h1>
      <Food fav="kimchi"/>
      <Food fav="ramen"/>
      <Food fav="momil"/>
      <Food fav="donkatsu"/>
      {/* => Component 와 props 를 이용해서, 만든것들을 재활용 한다!! 이것이 바로 React 이다!*/}
    </div> 
  );
}

export default App;
