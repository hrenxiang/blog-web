import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import rootReducer from "./redux/reducers/rootReducer";

// 创建Redux store
const store = configureStore({
    reducer: rootReducer,
    // 可选的其他配置选项
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(// 将应用包裹在Provider组件中，提供Redux store
    <Provider store={store}>
        <App/>
    </Provider>
);