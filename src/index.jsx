import {createStore, combineReducers} from 'redux'
import {dom, element} from 'deku'

import weights from './reducers/weights'
import WeightList from './components/weight-list'

const store = createStore(combineReducers({weights}))

const {createRenderer} = dom
const render = createRenderer(document.getElementById('app'), store.dispatch)

const weightsList = [
  {name: 'squats'},
  {name: 'bench'}
]

const action = {type: 'SET_WEIGHTS', weights: weightsList}
store.dispatch(action)

render(
  <WeightList />,
  store.getState()
)
