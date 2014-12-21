require(['jquery', 'react', 'url_builder'], function ($, React, UrlBuilder, UrlBuilderResult) {
  React.render(React.createElement(UrlBuilder), document.getElementById('url-builder'));
});