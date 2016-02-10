import {createApp, element} from 'deku'
import {createStore, combineReducers} from 'redux'
import {List, Map} from 'immutable'

import {setWeights} from './actions/weights'
import weights from './reducers/weights'
import WeightList from './components/weight-list'

const store = createStore(combineReducers({weights}))

const render = createApp(document.getElementById('app'), store.dispatch)

const weightsList = List.of(
  Map({amount: 200, name: 'squats', id: 1}),
  Map({amount: 100, name: 'bench', id: 2})
)

store.subscribe(() => render(<WeightList />, store.getState()))

store.dispatch(setWeights(weightsList))
