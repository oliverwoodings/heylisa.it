var React = require("react");
var classnames = require("classnames");

require("./Panel.css");

var Panel = React.createClass({

  propTypes: {
    previous: React.PropTypes.bool,
    current: React.PropTypes.bool
  },

  render: function () {
    var classes = classnames("Panel", this.props.className, {
      "Panel--previous": this.props.previous,
      "Panel--current": this.props.current
    });
    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }

});

module.exports = Panel;