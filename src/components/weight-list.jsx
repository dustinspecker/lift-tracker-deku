import connect from 'deku-redux-connect'
import {element} from 'deku'

import {removeWeight} from '../actions/weights'
import Weight from './weight'

const removeHandler = (remove, index) => () => remove(index)
const WeightList = ({props}) => <div>
  {props.weights.toJS().map((weight, index) =>
    <Weight
      key={weight.id}
      name={weight.name}
      remove={removeHandler(props.remove, index)}
    />
  )}
</div>

const mapStateToProps = ({weights}) => ({weights})

export default connect(
  mapStateToProps,
  {remove: removeWeight}
)(WeightList)
