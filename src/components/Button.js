const Button = ({countMove,id,squares,gameWon}) => {
    return (
        <div className="button">
            <button disabled={gameWon?true:false}onClick={()=>countMove(id)}>{squares[id]?squares[id]:""}</button>
        </div>
    );
}
 
export default Button;