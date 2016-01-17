import {element} from 'deku'

import Weight from './weight'

export default ({context}) => <div>
  {context.weights.map(weight =>
    <Weight name={weight.name} />
  )}
</div>
