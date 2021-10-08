import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";

// ? Functional Component 로 Refactor.
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // ? setTimeout 은 JS 내장 함수이다. 파이썬의 time.sleep() 과 비슷해보임.
    setTimeout(() => {
      setIsLoading(false);
    }, 6000);
    // return () => {
    //   cleanup
    // }
  }, []);

  return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
};

// class App extends React.Component {
//   state = {
//     count: 0
//   };

//   componentDidMount() { // 생성 완료!
//     console.log("component renderd!");
//   }

//   componentDidUpdate() { // 업데이트 완료!
//     console.log("I updated!");
//   }

//   componentWillUnmount() { // 죽음
//     console.log("Good bye..");
//   }

//   render() { // 생성 중..
//     console.log("I'm rendering");

//     return (
//       <div>
//         <h1>The number is {this.state.count}</h1>
//         <button onClick={this.add}>Add</button>
//         <button onClick={this.minus}>Minus</button>
//       </div>
//     )
//   }

//   add = () => {
//     console.log("add");
//     // state 객체의 count 값을 바꾸기 위해서,
//     // this.state.count = -1; // 이렇게 쓰면 안 된다!
//     // this.setState({ count: -1 }); // 이렇게 써야 한다! (setState 는 새로운 state를 받아야 한다.)
//     // setState 를 사용하지 않으면, 새로운 state 와 함께 render 메서드가 다시 호출되지 않는다!

//     // 자 이제, 함수를 호출할때마다 count 값을 1씩 증가하게 하자.
//     // this.setState({ count: this.state.count + 1});

//     // 하지만 사실... 위와 같은 코드는 좋은 코드가 아니다.
//     // state 를 위 코드처럼 사용하는 것은 nice 하지 못하다.

//     // react 는 아래처럼 arrow 함수를 이용해서, 현재상태를 불러올 수 있는 방법을 제공하고 있다!
//     this.setState(current => ({ count: current.count + 1})); // current 는 매개변수 이므로, current 말고 아무말이나 써도 상관 없음.
//   };
//   minus = () => {
//     console.log("minus");

//     // -5 이하에서는, 0 으로 다시 되돌아가게 만들어보자.

//     // this.setState(current => ({ (this.state.count <= -5) ? 0 : current.count - 1 }));
//     // 위에 처럼 쓰면 안된다!
//     // setState 안에다가는 조건문 못 쓴다! 밖에다가 써야 한다.

//     // 아래처럼 써야 한다!
//     (this.state.count<=5) ? this.setState(current => ({ count: 0 })) : this.setState(current => ({ count: current.count - 1 }));
//   };
// }

export default App;
