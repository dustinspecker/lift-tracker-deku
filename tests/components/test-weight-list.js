import assert from 'assert-element'
import {fromJS} from 'immutable'
import test from 'ava'

import WeightList from '../../src/components/weight-list'

test('should render a list of weights', () => {
  const component = {
    context: {
      weights: fromJS([
        {name: 'squats'},
        {name: 'bench press'}
      ])
    }
  }
  const weightList = WeightList(component)

  assert.isNode(weightList, 'div')
  assert.hasChildren(weightList, 2)
})
