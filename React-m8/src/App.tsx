import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Layout } from './shared/Layaut/Layout';
import './main.global.css';
import { Header } from './shared/Header/Header';
import { Content } from './shared/Content/Content';
import { CardsList } from './shared/CardsList/CardsList';
import { useToken } from './hooks/useToken';
import { tokenContext } from './shared/context/tokenContext';


function AppComponent() {
    const [token] = useToken();
    const {Provider} = tokenContext;

    return (
        <Provider value={token}>
            <Layout>
                <Header/>
                <Content>
                    <CardsList />
                </Content>
            </Layout>
        </Provider>


    );
}

export const App = hot( () => <AppComponent />);