import { applyMiddleware, createStore, Store } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

export default function configureStore(): Store<ApplicationState> {
  const composeEnhancers = composeWithDevTools({
    trace: true
  })

  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
}
