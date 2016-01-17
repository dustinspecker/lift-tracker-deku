import {element} from 'deku'

import {removeWeight} from '../actions/weights'
import Weight from './weight'

const remove = (dispatch, index) => () => dispatch(removeWeight(index))

const WeightList = ({dispatch, props}) => <div>
  {props.weights.toJS().map((weight, index) =>
    <Weight
      key={weight.id}
      name={weight.name}
      remove={remove(dispatch, index)}
    />
  )}
</div>

const mapStateToProps = ({weights}) => ({weights})

const connect = mapFn => component => ({context, dispatch}) => component({dispatch, props: mapFn(context)})

export default connect(
  mapStateToProps
)(WeightList)
