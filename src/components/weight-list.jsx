import connect from 'deku-redux-connect'
import {element} from 'deku'
import IPropTypes from 'deku-prop-types-immutable'
import {PropTypes, validate} from 'deku-prop-types'

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

WeightList.propTypes = {
  remove: PropTypes.func,
  weights: IPropTypes.listOf(IPropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  }))
}

const mapStateToProps = ({weights}) => ({weights})

export default connect(
  mapStateToProps,
  {remove: removeWeight}
)(validate(WeightList))
