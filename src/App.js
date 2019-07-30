import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(36).fill(0)
    }
  }

  handleClick(i) {
    let neighbors = getNeighbors(i,6)
    neighbors.push(i)
    
    let currentSquares = this.state.squares;
    neighbors.forEach(n => {
      if (n >= 0) {
        currentSquares[n] = currentSquares[n] === 0 ? 1 : 0
      }
    })

    this.setState({squares: currentSquares})
  }

  render() {
    return (
      <div className="App">
        <Grid 
        onClick={i => this.handleClick(i)} 
        squares={this.state.squares}/>
      </div>
    );
  }
  
}

class Grid extends React.Component {
  renderNode(i) {
    return (
      <GridNode 
        key={i}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    )
  }

  createTable = (rows, cols) => {
    let table = [];
    for (let i = 0; i < rows; i++) {
      let children = [];
      for (let j = 0; j < cols; j++) {
        children.push(this.renderNode(i * rows + j));
      }
      table.push(<div className="board-row">{children}</div>);
    }
    return table;
  }

  render() {
    const gridSize = 6;

    return (
      <div>
        {
          this.createTable(gridSize,gridSize)
        }
      </div>
    )
  }
}

class GridNode extends React.Component {


  render() {
    return (
      <div>
        <button className={"node " + (this.props.value===0?"nodegreen":"nodeblue")} onClick={this.props.onClick}>{this.props.value}</button>
      </div>
    )
  }
}

const getNeighbors = (i, gridSize) => {
  const column = i % gridSize
  const row = Math.floor(i/gridSize)
  let left, right, top, bottom
  left = -1
  right = -1
  top = -1
  bottom = -1
  //Get left
  if (column !== 0) {
    left = i - 1
  }
  //Get right
  if (column !== gridSize-1) {
    right = i + 1
  }
  //Get top
  if(row !== 0) {
    top = i - gridSize
  }
  //Get bottom
  if(row !== gridSize-1) {
    bottom = i + gridSize
  }
  let neighbors = [top, right, bottom, left]
  return neighbors
}

export default App;
