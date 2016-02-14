import connect from 'deku-redux-connect'
import creator, {div} from 'dscript-deku'
import IPropTypes from 'deku-prop-types-immutable'
import {PropTypes, validate} from 'deku-prop-types'

import {removeWeight} from '../actions/weights'
import Weight from './weight'

const weightCreator = creator(Weight)

const removeHandler = (remove, index) => () => remove(index)
const WeightList = ({props}) =>
  div(
    props.weights.toJS().map((weight, index) =>
      weightCreator({
        amount: weight.amount,
        key: weight.id,
        name: weight.name,
        remove: removeHandler(props.remove, index)
      })
    )
  )

WeightList.propTypes = {
  remove: PropTypes.func,
  weights: IPropTypes.listOf(IPropTypes.shape({
    amount: PropTypes.number,
    id: PropTypes.number,
    name: PropTypes.string
  }))
}

const mapStateToProps = ({weights}) => ({weights})

export default connect(
  mapStateToProps,
  {remove: removeWeight}
)(validate(WeightList))
