import './App.css';
import { useState } from 'react';
import Buttons from './components/Buttons';
import ResetBtn from './components/ResetBtn'
function App() {
  const [moveNo,setMoveNo]=useState(0);
  const [squares,setSquares]=useState(Array(9).fill(null));
  const [gameWon,setGameWon]=useState(false);
  const solutions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  const checkGameWon=()=>{
    solutions.forEach(solution=>{
      let [a,b,c]=solution;
      if((squares[a]!=null&&squares[b]!=null&&squares[c]!=null)&&(squares[a]===squares[b])&&(squares[b]===squares[c])){
        setGameWon(true);
      }
    })
  }
  const countMove=(id)=>{
    if(squares[id]===null){
      setMoveNo(moveNo+1);
      console.log("current moveno :",moveNo);
      if(moveNo%2===0){
        squares[id]="O";
      }
      else{
        squares[id]="X"
      }
    }
    checkGameWon();
  }
  const resetData=()=>{
    setMoveNo(0);
    setSquares(Array(9).fill(null));
    setGameWon(false);
  }
  return (
    <div className="App">
      <Buttons gameWon={gameWon} squares={squares} countMove={countMove} moveNo={moveNo}/>
      {gameWon?<h3>Game Over</h3>:<h3>Current turn:{moveNo%2===0?"O":"X"}</h3>}
      {gameWon?<h3>Winner:{moveNo%2===0?"X":"O"}</h3>:""}
      {gameWon?<ResetBtn resetData={resetData}/>:""}
    </div>
  );
}

export default App;
