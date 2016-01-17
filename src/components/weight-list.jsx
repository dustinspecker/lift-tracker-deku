import {element} from 'deku'

import Weight from './weight'

export default ({context}) => <div>
  {context.weights.map(weight =>
    <Weight
      key={weight.id}
      name={weight.name}
    />
  )}
</div>
