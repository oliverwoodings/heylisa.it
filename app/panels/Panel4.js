var React = require("react");
var Panel = require("./Panel");

var Panel4 = React.createClass({
  render: function () {
    return (
      <Panel {...this.props}>
        IF SO...
      </Panel>
    );
  }
});

module.exports = Panel4;