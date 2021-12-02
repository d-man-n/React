import express from 'express';
import ReactDOM from 'react-dom/server';
import { App } from '../App';
import { Header } from '../Header';
import {indexTemplate} from './indexTemplate';
import axios from 'axios';

const app = express();
//Определяем, что по урл static доступны все файлы в папке dist/client
app.use('/static', express.static('./dist/client'))

app.get('/', (req,res)=>{
    res.send(
        //в корень шаблон указываем рендер react-компонентов
        indexTemplate(ReactDOM.renderToString(App()))
    )
})

app.get('/auth', (req,res)=>{
    axios.post(
        'https://www.reddit.com/api/v1/access_token',
        `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`,
        {
            auth: { username: process.env.CLIENT_ID, password: '3g1sbH2Ymfh159NQCoAf68bEmfqWYg' },
            headers: { 'Content-type': 'application/x-www-form-urlencoded' }
        }
    )
    .then(({ data }) => {
        res.send(
            //в корень шаблон указываем рендер react-компонентов
            indexTemplate(ReactDOM.renderToString(App()), data['access_token'])
        );
    })
    .catch(console.log);
});

app.listen(3000, ()=>{
    console.log('server started on http://localhost:3000')
})