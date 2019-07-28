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
    console.log('hi')
  }

  render() {
    return (
      <div className="App">
        <Grid onClick={this.handleClick}/>
      </div>
    );
  }
  
}

class Grid extends React.Component {
  renderNode(i) {
    return (
      <GridNode 
        key={i}
        value={0}
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
    console.log(table)
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
        <button className="node">{this.props.value}</button>
      </div>
    )
  }
}

export default App;
