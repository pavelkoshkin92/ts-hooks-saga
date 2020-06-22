import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from "./routes";

import store from "./store";

const App: React.FC = () => (
    <Provider store={store}>
        <Router>
            <Routes />
        </Router>
    </Provider>
);

export default App;
