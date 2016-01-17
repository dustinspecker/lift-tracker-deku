import {element} from 'deku'

import Weight from './weight'

const WeightList = ({props}) => <div>
  {props.weights.toJS().map(weight =>
    <Weight
      key={weight.id}
      name={weight.name}
    />
  )}
</div>

const mapStateToProps = ({weights}) => ({weights})

const connect = mapFn => component => ({context}) => component({props: mapFn(context)})

export default connect(
  mapStateToProps
)(WeightList)
