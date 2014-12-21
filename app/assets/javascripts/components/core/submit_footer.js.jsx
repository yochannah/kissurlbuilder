define(['react'], function (React) {
  return React.createClass({
    getInitialState: function () {
      return {
        value: this.props.value
      }
    },

    handleClick: function () {
        console.log('call the generate link function of the parent when i can figure out how');
    },
    
    render: function () {
      var placeholder = this.props.placeholder || this.props.title;
      return (
    <div className="final-form-section">
        <button className="cta" onClick={this.handleClick}>Build my link!</button>
    </div>
      );
    }
  });
});
