define(['react'], function (React) {
  return React.createClass({
    getInitialState: function () {
      return {
        value: this.props.value
      }
    },

    handleChange: function (event) {
      this.setState({value: event.target.value});

      if (this.props.onChange) {
        this.props.onChange(event.target.value, this.props.inputRef);
      }
    },
    
    render: function () {
      var placeholder = this.props.placeholder || this.props.title;
      return (
      <div className="inputBox">
          <h3 className={this.props.optional}>{this.props.title}</h3>
          <p>{this.props.children}</p>
	      <input className={this.props.className} onChange={this.handleChange} type="text" value={this.state.value} name={this.props.name} placeholder={placeholder} />
	  </div>
      );
    }
  });
});
