"use strict";

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

var _react = _interopRequireDefault(require("react"));

var _server = require("react-dom/server");

var _expressAsyncHandler = _interopRequireDefault(require("express-async-handler"));

var _server2 = require("@loadable/server");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use(_express.default.static(_path.default.join(__dirname, '../../public')));

if (process.env.NODE_ENV !== 'production') {
  /* eslint-disable global-require, import/no-extraneous-dependencies */
  const {
    default: webpackConfig
  } = require('../../webpack.config.babel');

  const webpackDevMiddleware = require('webpack-dev-middleware');

  const webpack = require('webpack');
  /* eslint-enable global-require, import/no-extraneous-dependencies */


  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    logLevel: 'silent',
    publicPath: '/dist/web',

    writeToDisk(filePath) {
      return /dist\/node\//.test(filePath) || /loadable-stats/.test(filePath);
    }

  }));
}

const nodeStats = _path.default.resolve(__dirname, '../../public/dist/node/loadable-stats.json');

const webStats = _path.default.resolve(__dirname, '../../public/dist/web/loadable-stats.json');

app.get('*', (0, _expressAsyncHandler.default)(async (req, res) => {
  const nodeExtractor = new _server2.ChunkExtractor({
    statsFile: nodeStats
  });
  const {
    default: App
  } = nodeExtractor.requireEntrypoint();
  const webExtractor = new _server2.ChunkExtractor({
    statsFile: webStats
  });
  const jsx = webExtractor.collectChunks(_react.default.createElement(App, {
    isServer: true,
    url: req.url
  }));
  const html = (0, _server.renderToString)(jsx);
  res.set('content-type', 'text/html');
  res.send(`<!DOCTYPE html>
<html>
<head>
${webExtractor.getLinkTags()}
${webExtractor.getStyleTags()}
</head>
<body>
  <div id="main">${html}</div>
  ${webExtractor.getScriptTags()}
</body>
</html>`);
}));
app.listen(9000, () => console.log('Server started http://localhost:9000'));