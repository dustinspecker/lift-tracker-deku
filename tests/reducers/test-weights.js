import {is, List} from 'immutable'
import test from 'ava'

import weights from '../../src/reducers/weights'

test('should have default value of empty List', t => {
  t.truthy(is(weights(), List()))
})

test('SET_WEIGHTS should set weights list', t => {
  const weightsList = List.of(1, 2, 3)
  const action = {type: 'SET_WEIGHTS', weights: weightsList}
  const nextState = weights(undefined, action)

  t.truthy(is(nextState, weightsList))
})

test('REMOVE_WEIGHT should remove weight from list', t => {
  const weightsList = List.of(1, 2, 3)
  const action = {type: 'REMOVE_WEIGHT', index: 1}
  const nextState = weights(weightsList, action)

  t.truthy(is(nextState, List.of(1, 3)))
})
