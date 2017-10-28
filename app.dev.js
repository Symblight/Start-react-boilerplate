import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';
import webpackConf from './webpack.config';

const app = express();
const compiler = webpack(webpackConf);

const port = process.env.PORT || '8080';

app.disable('x-powered-by');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));

app.use(webpackDevMiddleware(compiler, {
  hot: true,
  publicPath: '/',
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false,
  }
}));
app.use(webpackHotMiddleware(compiler));

const server = http.createServer(app).listen(port, () => {
  console.info(`server is up on port: ${port}`);
});

export default app;
