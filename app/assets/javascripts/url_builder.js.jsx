define(['react', 'components/core','grouped_inputs'], function (React, Core, GroupedInputs) {
  return React.createClass({
    handleChange : function(value, ref) {
        var state = {};
        state[ref] = value;
        this.setState(state);
    },
    inputs : {
        required : ['base', 'medium','source','name'],
        optional : ['content','term']
    },
    render: function () {
      return <main>
        <GroupedInputs onChange={this.handleChange} />
        <Core.UrlResult />
      </main>
    }
  });
});
