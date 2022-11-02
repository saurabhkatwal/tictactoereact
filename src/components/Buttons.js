import Button from "./Button";
const Buttons = ({squares,countMove,moveNo,gameWon}) => {
    return (
        <div className="buttons">
            {squares.map((square,index)=>(<Button square={square} gameWon={gameWon} countMove={countMove} key={index} id={index} squares={squares}/>))}
        </div>
    );
}
 
export default Buttons;