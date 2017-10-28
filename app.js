import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();

const port = process.env.PORT || '8080';

app.use(express.static(path.join(__dirname, 'dist')));
app.get('/', (res) => {
  res.sendFile(path.join(`${__dirname}./index.html`));
});

app.disable('x-powered-by');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const server = http.createServer(app).listen(port, () => {
  console.info('server is up');
});

export default app;
