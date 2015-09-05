var React = require("react");
var Panel = require("./Panel");

var Panel1 = React.createClass({
  render: function () {
    return (
      <Panel {...this.props}>
        Turn up your volume...
        <div className="fa fa-volume-up" />
      </Panel>
    );
  }
});

module.exports = Panel1;