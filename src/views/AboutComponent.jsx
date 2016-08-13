var React = require('react');
var ReactDOM = require('react-dom');

class AboutComponent extends React.Component {
    render() {
        <div> 
            About 
        </div>
    }
}

ReactDOM.render(
  <AboutComponent />,
  document.getElementById('about')
);
