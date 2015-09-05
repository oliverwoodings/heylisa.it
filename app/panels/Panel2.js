var React = require("react");
var Panel = require("./Panel");

var Panel2 = React.createClass({
  render: function () {
    return (
      <Panel {...this.props}>
        YES, YOU!
      </Panel>
    );
  }
});

module.exports = Panel2;