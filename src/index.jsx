import {dom, element} from 'deku'

import WeightList from './components/weight-list'

const {createRenderer} = dom
const render = createRenderer(document.getElementById('app'))

const weights = [
  {name: 'squats'},
  {name: 'bench'}
]

render(
  <WeightList weights={weights} />
)
