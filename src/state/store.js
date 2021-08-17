import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

import Reducers from './reducers/index'

const Store = createStore(
    Reducers,
    {},
    composeWithDevTools(applyMiddleware(thunk))
)

export default Store