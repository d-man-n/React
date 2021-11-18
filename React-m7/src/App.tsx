import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layaut/Layout';
import './main.global.css';
import { Header } from './shared/Header/Header';
import { Content } from './shared/Content/Content';
import { CardsList } from './shared/CardsList/CardsList';
// import { GenericList } from "./shared/GenericList/GenericList";
// import { assignId, generateId, generateRandomString } from "./utils/react/generateRandomIndex";
// import { merge } from "./utils/js/merge";

// const LIST = [
//     {As: 'li' as const, text: 'some'},
//     {As: 'li' as const, text: 'other some'},
//     {As: 'li' as const, text: 'some'},
// ].map(generateId)

function AppComponent() {

    // const [list, setList] = React.useState(LIST);

    // const handleItemClick = (id: string) => {
    //     setList(list.filter((item) => item.id != id));
    // }

    // const handleAdd = () => {
    //     setList(list.concat({text: generateRandomString(), id: generateRandomString(), As: 'li' as const}))
    // }

    return (
        <Layout>
            {/* <Header /> */}
            {/* <Content> */}
                {/* <CardsList /> */}
            {/* </Content> */}
        </Layout>
    );
}

export const App = hot( () => <AppComponent />);