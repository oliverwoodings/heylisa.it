var React = require("react");
var Panel = require("./Panel");

var Panel1 = React.createClass({
  render: function () {
    return (
      <Panel {...this.props}>
        HEY, YOU!
      </Panel>
    );
  }
});

module.exports = Panel1;