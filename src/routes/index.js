var React = require('react');

var HomeComponent = React.createClass({
    render() {
        return (
            <div className="homeComponent">
                Home Page
            </div>
        );
    }
});

ReactDOM.render(
    <HomeComponent />,
    document.getElementByID('content')
);

module.export = HomeComponent;