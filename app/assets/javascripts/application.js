require(['jquery', 'react', 'url_builder', 'url_builder_result'], function ($, React, UrlBuilder, UrlBuilderResult) {
  React.render(React.createElement(UrlBuilder), document.getElementById('url-builder'));
  React.render(React.createElement(UrlBuilderResult), document.getElementById('url-builder-result'));
});