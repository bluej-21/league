var React = require('react');
var ReactDOM = require('react-dom');
import { SquareComponent } from './SquareComponent.jsx';

export class GridComponent extends React.Component {
  getInitialState() {
    return {
      listOfGames:[
        {
          name: "melee",
          imageSource: "../images/melee.png"
        }
      ]
    }
  }

  componentDidMount() {

  }

  render() {
    var grid = this.state.listOfGames.map((game) => {
      return <SquareComponent source={game.imageSource}/>
    })
    return (
      <div className="gridComponent">
        {grid}  
      </div>
    )
  }
}
