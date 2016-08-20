var React = require('react');
var ReactDOM = require('react-dom');
import { GridComponent } from './GridComponent.jsx'

class HomeComponent extends React.Component {
    render() {
        return (
            <div>
                <h3>Welcome to League</h3>
                <GridComponent />
            </div>
        )
    }
}

ReactDOM.render(
  <HomeComponent />,
  document.getElementById('home')
);
