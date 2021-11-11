import express from 'express';
import ReactDom from 'react-dom/server';
import {Header } from '../Header';
import { indexTemplate } from './indexTemplate';

const app = express();

app.use('/static', express.static('./dist/client'));

app.get('/', (req, res) => {
    res.send(
        indexTemplate(ReactDom.renderToString(Header())),
    );
});

app.listen(3000, () => {
    console.log('Server startted on http://localhost:3000');
})