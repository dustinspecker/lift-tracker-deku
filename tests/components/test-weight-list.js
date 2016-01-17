import assert from 'assert-element'
import test from 'ava'

import WeightList from '../../src/components/weight-list'

test('should render a list of weights', () => {
  const component = {
    context: {
      weights: [
        {name: 'squats'},
        {name: 'bench press'}
      ]
    }
  }
  const weightList = WeightList(component)

  assert.isNode(weightList, 'div')
  assert.hasChildren(weightList, 2)
})
