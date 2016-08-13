var React = require('react');
var ReactDOM = require('react-dom');

export class SquareComponent extends React.Component {
  render() {
      return <img src={this.props.source} />
  }
}
