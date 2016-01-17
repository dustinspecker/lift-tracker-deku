import {element} from 'deku'

import Weight from './weight'

const WeightList = ({weights}) => <div>
  {weights.map(weight =>
    <Weight
      key={weight.id}
      name={weight.name}
    />
  )}
</div>

const mapStateToProps = ({weights}) => ({weights})

const connect = mapFn => component => ({context}) => component(mapFn(context))

export default connect(
  mapStateToProps
)(WeightList)
