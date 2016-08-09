var React = require('react');
var ReactDOM = require('react-dom');

var HomeComponent = React.createClass({
    render: function() {
        return (
            <div className="homeComponent">
                Home Page in html
            </div>
        );
    }
});

ReactDOM.render(
  <HomeComponent />,
  document.getElementById('home')
);