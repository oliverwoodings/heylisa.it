var React = require("react");
var Panel = require("./Panel");

require("./Panel5.css");

var Panel5 = React.createClass({

  componentWillReceiveProps: function (newProps) {
    if (newProps.current) {
      this.audio = new Audio("lisa.mp3");
      this.audio.onplay = this.handlePlayStart;
      this.audio.play();
    }
  },

  componentWillUnmount: function () {
    if (this.audio) {
      this.audio.stop();
    }
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  },

  getInitialState: function () {
    return {
      top: [],
      bottom: []
    }
  },

  render: function () {
    return (
      <Panel {...this.props}>
        <div className="Panel5-top">
          {this.renderImages(this.state.top)}
        </div>
        <div className="Panel5-text">HAPPY BIRTHDAY!</div>
        <div className="Panel5-bottom">
          {this.renderImages(this.state.bottom)}
        </div>
      </Panel>
    );
  },

  renderImages: function (images) {
    return images.map(function (image, index) {
      var styles = {
        transform: "rotate(" + image.pitch + "deg)"
      };
      return (
        <div key={"image" + index} className="Panel5-imageContainer">
          <img src={image.url} style={styles} className="Panel5-image" />
        </div>
      );
    });
  },

  handlePlayStart: function () {
    var beatsPerMinute = 75;
    var picsPerBeat = 0.5;
    var picsPerMinute = beatsPerMinute * picsPerBeat;
    var picInterval = 60 / picsPerMinute;
    this.timerId = setInterval(this.addImage, picInterval * 1000);
  },

  addImage: function () {
    var index = Math.floor(Math.random() * 15);
    var image = {
      pitch: Math.random() * 10 - 5,
      url: "images/pics/" + index + ".jpg"
    }
    if (this.state.top.length > this.state.bottom.length) {
      this.setState({
        bottom: this.state.bottom.concat([image])
      });
    } else {
      this.setState({
        top: this.state.top.concat([image])
      });
    }
  }

});

module.exports = Panel5;