define(['react'], function (React) {
  return React.createClass({
    render: function () {
      return <section className="url-builder-result">
        <p>Copy and paste your campaign link!</p>
        <input type="text" /><button className="cta">Copy Link to Clipboard</button>
      </section>;
    }
  });
});
