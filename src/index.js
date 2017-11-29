import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import BlogPost from './components/blog-post';
import store from './store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <BlogPost />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
