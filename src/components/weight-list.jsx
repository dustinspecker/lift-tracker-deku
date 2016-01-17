import {element} from 'deku'
import objectAssign from 'object-assign'

import {removeWeight} from '../actions/weights'
import Weight from './weight'

const removeHandler = (remove, index) => () => remove(index)
const WeightList = ({remove, weights}) => <div>
  {weights.toJS().map((weight, index) =>
    <Weight
      key={weight.id}
      name={weight.name}
      remove={removeHandler(remove, index)}
    />
  )}
</div>

const mapStateToProps = ({weights}) => ({weights})

const connect = (mapFn, actions) => component => ({context, dispatch}) => {
  const mappedActions = Object.keys(actions).reduce((acc, action) => {
    acc[action] = (...args) => dispatch(actions[action](...args))
    return acc
  }, {})
  const props = objectAssign(mapFn(context), mappedActions)
  return component(props)
}

export default connect(
  mapStateToProps,
  {remove: removeWeight}
)(WeightList)
