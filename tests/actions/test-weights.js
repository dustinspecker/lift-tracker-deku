import {is, List} from 'immutable'
import test from 'ava'

import * as actions from '../../src/actions/weights'

test('should return REMOVE_WEIGHT action', t => {
  const {index, type} = actions.removeWeight(1)

  t.is(type, 'REMOVE_WEIGHT')
  t.is(index, 1)
})

test('should return SET_WEIGHTS action', t => {
  const {type, weights} = actions.setWeights(List.of(1, 2, 3))

  t.is(type, 'SET_WEIGHTS')
  t.truthy(is(weights, List.of(1, 2, 3)))
})
