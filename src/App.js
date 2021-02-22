import React from 'react';

class App extends React.Component{
  state = {
    count:0,
    level:0
  };

  add=()=>{
    this.setState(current=>({count:current.count+1,level:current.level+1}));
  };

  minus=()=>{
    this.setState(current=>({count:current.count-1,level:current.level-1}));
    
  };

  render(){
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <h1>The level is : {this.state.level}</h1>
        <button onClick={this.add}>Add</button>
        {/* 괄호를 붙이면 페이지를 로딩할때 실행함.
        괄호가 없어야 클릭했을때 실행됨(this.minus()) */}
        {/* <button onClick={this.minus()}>Minus</button> */}
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}
  export default App;
  