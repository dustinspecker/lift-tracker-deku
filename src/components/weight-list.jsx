import {element} from 'deku'
import objectAssign from 'object-assign'

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

const connect = (mapFn, actions) => component => ({children = {}, context = {}, dispatch = () => ({}), props = {}}) => {
  const mappedActions = Object.keys(actions).reduce((acc, action) => {
    acc[action] = (...args) => dispatch(actions[action](...args))
    return acc
  }, {})
  const newProps = objectAssign(props, mapFn(context), mappedActions)
  return component({children, props: newProps})
}

export default connect(
  mapStateToProps,
  {remove: removeWeight}
)(WeightList)
