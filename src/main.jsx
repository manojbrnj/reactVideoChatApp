import {createRoot} from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './redux-elements/reducers/rootReducer';

const store = createStore(
  rootReducer,

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Provider store={store}>
    <App />,
  </Provider>,
  //</StrictMode>,
);
