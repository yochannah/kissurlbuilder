define(['react'], function (React) {
  return React.createClass({
    handleChange: function (event) {
      this.setState({value: event.target.value});

      if (this.props.onChange) {
        this.props.onChange(event.target.value);
      }
    },
    render: function () {
      return <section className="url-builder-result">
        <p>Copy and paste your campaign link!</p>
        <input type="text" /><button className="cta">Copy Link to Clipboard</button>
      </section>;
    }
  });
});
