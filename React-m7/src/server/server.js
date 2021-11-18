import express from 'express';
import ReactDOM from 'react-dom/server';
import { App } from '../App';
import { Header } from '../Header';
import {indexTemplate} from './indexTemplate';

const app = express();
//Определяем, что по урл static доступны все файлы в папке dist/client
app.use('/static', express.static('./dist/client'))

app.get('/', (req,res)=>{
    res.send(
        //в корень шаблон указываем рендер react-компонентов
        indexTemplate(ReactDOM.renderToString(Header()))
    )
})

app.listen(3000, ()=>{
    console.log('server started on http://localhost:3000')
})