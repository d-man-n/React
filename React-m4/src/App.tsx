import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layaut/Layout';
import './main.global.css';
import { Header } from './shared/Header/Header';
import { Content } from './shared/Content/Content';
import { CardsList } from './shared/CardsList/CardsList';

function AppComponent() {
    return (
        <Layout>
            <Header />
            <Content>
                <CardsList />
            </Content>
        </Layout>
    );
}

export const App = hot(AppComponent)