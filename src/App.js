import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  abc(name){
    alert("Pakistan Zindabad!")
  }
  render() {
    const firstName = "Muhammad"
    const name = "sarim";
    const number = 6;

    const obj = [
      [
        {
          name: 'Afzal',
          age: 21,
          list: [1, 2, 3]
        },
        {
          name: 'Manal',
          age: 14,
          list: [4, 5, 6]
        },
        {
          name: 'Sarim',
          age: 16,
          list: [7, 8, 9]
        }
      ],
      [
        {
          name: 'masood',
          age: 43,
          list: [11, 22, 33]
        },
        {
          name: 'usama',
          age: 63,
          list: [44, 55, 66]
        },
        {
          name: 'faraz',
          age: 99,
          list: [77, 88, 99]          
        }
      ]
    ];
    
console.log(obj);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Love Pakistan</h1>
          <button  onClick={(e) => { if (window.alert('Pakistan Zindabad!')) this.deleteItem(e) } }>
              Delete
</button>
          {/* <button type="button" onclick="this.abc()" >Click for Google  </button> */}
        </header>
        <p className="App-intro">
        </p>
          {/* {console.log(obj  , "arrayofobject")} */}
        <ul>
          {
            obj.map((v,i) =>{
              // console.log(v)
              return v.map((value , idex)=>{
                console.log(value);
              })
            
              })
        }
        </ul>

        {(number ===4 ) ? console.log( "this is right") : console.log( "not right")
        
}
      </div>
    );
  }
}

export default App;


// class name_with{
//   constructor (){
//   this.name = "sarim",
//   this.age = 17
//   }
//   }
  
//   new name_with()