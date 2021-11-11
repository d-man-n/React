import React from 'react';
import ReactDOM from 'react-dom';
import 'react-hot-loader';
import { Header } from '../Header';

ReactDOM.hydrate(
    <Header />, document.getElementById('react_root')
);