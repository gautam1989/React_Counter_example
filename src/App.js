import './App.css';

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import Counter from './components/Counter'
import reducers from './reducer'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware()))

function App() {
  return (
    <Provider store={store}>
    <Counter />
    </Provider>
    );
}

export default App;
