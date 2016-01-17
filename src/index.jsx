import {dom, element} from 'deku'

import Weight from './components/weight'

const {createRenderer} = dom

const render = createRenderer(document.getElementById('app'))

render(
  <Weight name='squats' />
)
