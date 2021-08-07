import React from "react";
import PropTypes from "prop-types";

// function App() {
//   return (
//     <div>
//       {foodILike.map(x => (
//         <Food name={x.name} picture={x.image} rating={x.rating} />
//         ))} 
//     </div> 
//   );
// }

// function, 함수 컴포넌트인 App 을 class 컴포넌트로 바꿔보자.
class App extends React.Component { // class 는 함수와 다르게, return 하지 않는다.
  // class 는 render 한다. (엄밀히 말하면, React.Component 에 render 메서드가 있는 것이다. )
  // react 는 "자동적으로" 나의 class 컴포넌트의 render 메서드를 실행한다! 자동으로!

  // state 는 단지 object 이다!
  state = {
    count: 0
  };

  render() { 
    // state 를 사용하려면...
    // return <h1>The number is {state}</h1> => 이러면 안된다! 이건 함수일때나 그런거고!!
    // return <h1>The number is {this.state.count}</h1> // => 이렇게 써야한다...! 왜냐? 클래스! 이니까!

    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        {/* this.add 는 클릭했을때 호출! this.add() 는 "즉시"호출을 의미한다! */}
        <button onClick={this.add}>Add</button> 
        <button onClick={this.minus}>Minus</button> 
      </div>
    )
  }

  add = () => {
    console.log("add");
    // state 객체의 count 값을 바꾸기 위해서,
    // this.state.count = -1; // 이렇게 쓰면 안 된다! 
    // this.setState({ count: -1 }); // 이렇게 써야 한다! (setState 는 새로운 state를 받아야 한다.) 
    // setState 를 사용하지 않으면, 새로운 state 와 함께 render 메서드가 다시 호출되지 않는다!

    // 자 이제, 함수를 호출할때마다 count 값을 1씩 증가하게 하자.
    // this.setState({ count: this.state.count + 1});

    // 하지만 사실... 위와 같은 코드는 좋은 코드가 아니다.
    // state 를 위 코드처럼 사용하는 것은 nice 하지 못하다.

    // react 는 아래처럼 arrow 함수를 이용해서, 현재상태를 불러올 수 있는 방법을 제공하고 있다!
    this.setState(current => ({ count: current.count + 1})); // current 는 매개변수 이므로, current 말고 아무말이나 써도 상관 없음.
  };
  minus = () => {
    console.log("minus");
  
    // -5 이하에서는, 0 으로 다시 되돌아가게 만들어보자.

    // this.setState(current => ({ (this.state.count <= -5) ? 0 : current.count - 1 }));
    // 위에 처럼 쓰면 안된다!
    // setState 안에다가는 조건문 못 쓴다! 밖에다가 써야 한다.

    // 아래처럼 써야 한다!
    (this.state.count<=5) ? this.setState(current => ({ count: 0 })) : this.setState(current => ({ count: current.count - 1 }));
  };
}


export default App;
