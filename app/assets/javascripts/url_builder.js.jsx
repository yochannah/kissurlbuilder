define(['react', 'components/core','grouped_inputs'], function (React, Core, GroupedInputs) {
  return React.createClass({
    generateLink : function() {
        console.log('I am doing something wrong here as can not figure out how to call this from a child element');
    },
    render: function () {
      return <main>
        <GroupedInputs />
        <Core.UrlResult />
      </main>
    }
  });
});
