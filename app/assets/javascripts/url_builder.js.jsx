define(['react', 'components/core','grouped_inputs'], function (React, Core, GroupedInputs) {
  return React.createClass({
    handleChange : function(value, ref) {
        var state = {}, t = this;
        state[ref] = value;
        this.setState(state);
            //minimum number of properties for the required fields:
        if (Object.keys(this.state).length >= this.inputs.required.length) {
            //check they are the correct ones. 
            var reqdPopulated = (t.inputs.required.every(function(val) { return Object.keys(t.state).indexOf(val) >= 0; }));
            if(reqdPopulated) {
                this.buildUrl();
            }
        }
    },
    buildUrl : function() {
        var campaignUrl = this.state.base + "?";
        for(var k in this.state) {
            if(k !== 'base' && k !== 'campaignUrl') {
                campaignUrl += "&" + k + "=" + this.state[k];
            }
        }
        this.setState({'campaignUrl' : campaignUrl});
    },
    inputs : {
        required : ['base', 'medium','source','name'],
        optional : ['content','term']
    },
    render: function () {
        
        var campaignUrl = this.state ? this.state.campaignUrl : "";
      return <main>
        <GroupedInputs onChange={this.handleChange} />
        <Core.UrlResult campaignUrl={campaignUrl} />
      </main>
    }
  });
});
