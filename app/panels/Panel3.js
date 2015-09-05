var React = require("react");
var Panel = require("./Panel");

require("./Panel3.css");

var Panel3 = React.createClass({
  render: function () {
    return (
      <Panel {...this.props}>
        IS THIS YOU?
        <img className="Panel3-image" src="images/lisa-1.png" />
      </Panel>
    );
  }
});

module.exports = Panel3;