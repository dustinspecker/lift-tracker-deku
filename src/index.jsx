import {createStore, combineReducers} from 'redux'
import {dom, element} from 'deku'

import {setWeights} from './actions/weights'
import weights from './reducers/weights'
import WeightList from './components/weight-list'

const store = createStore(combineReducers({weights}))

const {createRenderer} = dom
const render = createRenderer(document.getElementById('app'), store.dispatch)

const weightsList = [
  {name: 'squats', id: 1},
  {name: 'bench', id: 2}
]

store.dispatch(setWeights(weightsList))

render(
  <WeightList />,
  store.getState()
)
