var React = require('react');
var ReactDOM = require('react-dom');

var AboutComponent = React.createClass({
    render: function() {
        return (
            <div className="homeComponent">
                About Page in html
            </div>
        );
    }
});

ReactDOM.render(
  <AboutComponent />,
  document.getElementById('about')
);