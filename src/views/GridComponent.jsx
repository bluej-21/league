var React = require('react');
var ReactDOM = require('react-dom');
import { SquareComponent } from './SquareComponent.jsx';

export class GridComponent extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          listOfGames: [
              {
                  name: "melee",
                  imageSource: "../images/melee.png"
              },
              {
                  name: "leagueoflegends",
                  imageSource: "../images/leagueoflegends.jpeg"
              },
              {
                  name: "fifa",
                  imageSource: "../images/fifa.jpg"
              }
          ]
      };
  }

  render() {
    var grid = this.state.listOfGames.map((game) => {
      return <SquareComponent source={game.imageSource}/>
    });
    return (
      <div className="gridComponent">
        {grid}  
      </div>
    );
  }
}
