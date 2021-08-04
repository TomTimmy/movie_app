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
//   return <h1>I like {fav}</h1>; //! 태그 안에 JS를 사용할때는 브라켓 {} 으로 감싸서 사용한다! 안 그러면 걍 텍스트임.
// }


// // 자 이제! 위의 배운것들을 사용해서 "재사용" 해보자!
// function Food({ fav }) {
//   return <h1>I like {fav}</h1>; //! 태그 안에 JS를 사용할때는 브라켓 {} 으로 감싸서 사용한다! 안 그러면 걍 텍스트임.
// }

// function App() {
//   return (
//     <div>
//       <h1>Hello !!!</h1>
//       <Food fav="kimchi"/>
//       <Food fav="ramen"/>
//       <Food fav="momil"/>
//       <Food fav="donkatsu"/>
//       {/* => Component 와 props 를 이용해서, 만든것들을 재활용 한다!! 이것이 바로 React 이다!*/}
//     </div> 
//   );
// }


// 하지만 위에처럼 복붙해서 쓰는건 똑똑하지 않다.
// 게다가, 데이터가 저렇게 미리 정해져있지 않다면, 복붙을 애초에 할 수 도 없다.
// 우리가 배운것들과 map 을 사용해서 해결해보자!

// // 배열 생성! (map 을 활용하기 위해 그렇다.)
const foodILike = [
  {
    name: "Kimchi",
    image: "https://www.bgw.kr/wp-content/uploads/2019/12/%ED%8F%AC%EA%B8%B0%EA%B9%80%EC%B9%98-1200x1200.png"
  },
  {
    name: "Jeyook",
    image: "https://imagescdn.gettyimagesbank.com/500/201811/a11209732.jpg"
  },
  {
    name: "Doncatsu",
    image: "https://mp-seoul-image-production-s3.mangoplate.com/428178/1727908_1610466129234_7890?fit=around|512:512&crop=512:512;*,*&output-format=jpg&output-quality=80"
  },
  {
    name: "Momil",
    image: "http://gdimg.gmarket.co.kr/981631986/still/600?ver=0"
  },
  {
    name: "Samgyeopsal",
    image: "https://images.chosun.com/resizer/LqiOo-kFtKiAUawSeNYkIGIisaQ=/464x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/IZOXUQBP4QVT4ONUPAIDA6347M.jpg"
  },
]

// function Food({ name }) {
//   return <h1>I like {name}</h1>; //! JSX 를 사용할때는 브라켓 {} 으로 감싸서 사용한다!
// }

// function App() {
//   return (
//     <div>
//       {foodILike.map(x => <Food name={x.name}/>)}  {/* => 태그 안에 JS를 사용할때는 브라켓 {} 으로 감싸서 사용한다! 안 그러면 걍 텍스트임.*/}
//       {/* 멍청하게 복붙 안 해도 된다!ㅠㅠ */}
//     </div> 
//   );
// }

// 내친김에 이미지도 표출해보자.
function Food({ name, picture }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <img src={picture}/>
    </div>

  
  );
}

function App() {
  return (
    <div>
      {foodILike.map(x => (
        <Food name={x.name} picture={x.image} />
        ))} 
    </div> 
  );
}

export default App;
