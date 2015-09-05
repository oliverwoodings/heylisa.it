var React = require("react");
var classnames = require("classnames");
var Panel0 = require("panels/Panel0");
var Panel1 = require("panels/Panel1");
var Panel2 = require("panels/Panel2");
var Panel3 = require("panels/Panel3");
var Panel4 = require("panels/Panel4");
var Panel5 = require("panels/Panel5");

require("./App.css");

var App = React.createClass({

  getInitialState: function () {
    return {
      sequence: [Panel0, Panel1, Panel2, Panel3, Panel4, Panel5],
      position: 0
    }
  },

  render: function () {
    var classes = classnames("App", "App--" + this.state.position);
    return (
      <div className={classes}>
        <div className="App-texture" />
        {this.renderPanels()}
        {this.renderNextButton()}
      </div>
    );
  },

  renderPanels: function () {
    var position = this.state.position;
    return this.state.sequence.map(function (Panel, index) {
      return (
        <Panel
          key={"panel" + index}
          previous={position > index}
          current={position === index} />
      );
    });
  },

  renderNextButton: function () {
    if (this.state.position === this.state.sequence.length - 1) {
      return null;
    }
    return <div className="App-next fa fa-arrow-down" onClick={this.increaseSequence} />
  },

  increaseSequence: function () {
    var position = this.state.position;
    if (position < this.state.sequence.length - 1) {
      this.setState({
        position: position + 1
      });
    }
  }

});

module.exports = App;