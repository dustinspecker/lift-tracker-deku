import {createStore, combineReducers} from 'redux'
import {dom, element} from 'deku'
import {List, Map} from 'immutable'

import {setWeights} from './actions/weights'
import weights from './reducers/weights'
import WeightList from './components/weight-list'

const store = createStore(combineReducers({weights}))

const {createRenderer} = dom
const render = createRenderer(document.getElementById('app'), store.dispatch)

const weightsList = List.of(
  Map({name: 'squats', id: 1}),
  Map({name: 'bench', id: 2})
)

store.subscribe(() => render(<WeightList />, store.getState()))

store.dispatch(setWeights(weightsList))
