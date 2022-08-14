'use strict';

class Board extends React.Component{
  constructor(props){
      super(props);
      this.state = {
        squares: Array(9).fill('_'),
        xNext: true,
      };
  }

  handleClick(i){
      const squares = this.state.squares.slice();

      if(squares[i] !== '_'
        || calculateWinner(squares) !== false){
          return;
      }

      squares[i] = this.state.xNext
        ? 'X'
        : 'O';

      this.setState({
        squares: squares,
        xNext: !this.state.xNext,
      });
  }

  renderSquare(i){
      return (
        <Square
          onClick={() => this.handleClick(i)}
          value={this.state.squares[i]}
        />
      );
  }

  render(){
      let status;
      const winner = calculateWinner(this.state.squares);

      if(winner !== false){
          status = 'Winner: ' + winner;

      }else{
          status = 'Next player: ' + (this.state.xNext
            ? 'X'
            : 'O');
      }

      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
  }
}

function calculateWinner(squares){
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for(let i = 0; i < lines.length; i++){
        const [a, b, c] = lines[i];
        if(squares[a] === '_'
          || squares[b] === '_'
          || squares[c] === '_'){
            continue;
        }

        if(squares[a]
          && squares[a] === squares[b]
          && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return false;
}

class Game extends React.Component{
  render(){
      return(
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div></div>
            <ol></ol>
          </div>
        </div>
      );
  }
}

function Square(props){
    return (
      <button className="gridbutton" onClick={props.onClick}>
        {props.value}
      </button>
    );
}

window.onload = function(){
    ReactDOM.render(
      <Game />,
      document.getElementById('root')
    );
};
