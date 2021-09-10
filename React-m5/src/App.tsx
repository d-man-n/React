import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layaut/Layout';
import './main.global.css';
import { Header } from './shared/Header/Header';
import { Content } from './shared/Content/Content';
import { CardsList } from './shared/CardsList/CardsList';
import { MyList } from "./shared/GenericList/GenericList";
import { assignId, generateId, generateRandomString } from "./utils/react/generateRandomIndex";


// const LIST = [
//     {value: 'some'},
//     {value: 'other some'},
//     {value: 'some'},
// ].map((item) => ({...item, id: generateRandomString()}))

const LIST = [
    {value: 'some'},
    {value: 'other some'},
    {value: 'some'},
].map(assignId)

console.log(LIST)


function AppComponent() {
    return (
        <Layout>
            <Header />
            <Content>
                <CardsList />
                <MyList list={LIST.map((item) => ({...item, onClick: () => {console.log(item.id)}}))}/>
                {/* <MyList list={LIST}/> */}
            </Content>
        </Layout>
    );
}

export const App = hot(AppComponent)