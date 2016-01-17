import {element} from 'deku'

import Weight from './weight'

export default ({props}) => <div>
  {props.weights.map(weight =>
    <Weight name={weight.name} />
  )}
</div>
