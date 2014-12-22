define(['react','components/core'], function (React, Core) {
  return React.createClass({
    handleChange : function(state, props) {
        console.log(state,props);
        this.props.onChange(state, props);
    },
    render: function () {
      return          <section className="url-builder-content">
        <Core.TextInput inputRef="base" placeholder="Enter URL" onChange={this.handleChange} title="What URL do you want to send people to?" optional="notOptional">
            This will be the base of your URL
        </Core.TextInput>
        <Core.TextInput inputRef="medium" title="Campaign Medium" optional="notOptional" onChange={this.handleChange}>
            This is the channel the link is being used in. Use broad categories like <em>email, social,</em> or <em>PPC</em>.     
        </Core.TextInput>
        <Core.TextInput inputRef="source" title="Campaign Source" optional="notOptional" onChange={this.handleChange}>
            What's the specific place that you'll be using this link? For example, <em>email</em> is too broad for this one, use the name of your email list, like <em>newsletter</em> or <em>customer list</em>.
        </Core.TextInput>
        <Core.TextInput inputRef="name" title="Campaign Name" optional="notOptional" onChange={this.handleChange}>
            Use any name you want. It should be the name of your entire marketing campaign. This way, you can look at all the links from this campaign, even if you use them in different places and channels.
        </Core.TextInput>
        <Core.TextInput inputRef="content" title="Campaign Content" optional="optional" onChange={this.handleChange}>
        If you use a bunch of links all in the same spot, and all the fields above are identical, you can use this field to add more detail. For example, one link might be <em>header</em> while your second link is <em>footer</em>.
        </Core.TextInput>
        <Core.TextInput inputRef="term" title="Campaign Term" optional="optional" onChange={this.handleChange}>If you're using this link for search ads, and also want to track the search terms you're running your ad on, add a campaign term.</Core.TextInput>
        <Core.SubmitFooter />  
    </section>;
    }
  });
});
