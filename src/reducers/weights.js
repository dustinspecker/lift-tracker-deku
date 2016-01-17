import {List} from 'immutable'

export default (state = List(), {index, type, weights} = {}) => {
  switch (type) {
    case 'REMOVE_WEIGHT':
      return state.delete(index)
    case 'SET_WEIGHTS':
      return weights
    default:
      return state
  }
}
