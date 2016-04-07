import assert from 'assert-element'
import {fromJS} from 'immutable'
import test from 'ava'

import Weight from '../../src/components/weight'
import WeightList from '../../src/components/weight-list'

test('should render a list of weights', () => {
  const component = {
    context: {
      weights: fromJS([
        {name: 'squats'},
        {name: 'bench press'}
      ])
    },
    dispatch() {}
  }
  const weightList = WeightList(component)

  assert.isNode(weightList, 'div')
  assert.hasChildren(weightList, 2)
})

test('should dispatch REMOVE_WEIGHT', t => {
  let removeCalled = false
  const component = {
    context: {
      weights: fromJS([
        {name: 'squats'},
        {name: 'bench press'}
      ])
    },
    dispatch({index, type}) {
      removeCalled = index === 1 && type === 'REMOVE_WEIGHT'
    }
  }
  const weightList = WeightList(component)
  const benchPress = Weight(weightList.children[1])

  benchPress.children[1].attributes.onClick()

  t.truthy(removeCalled)
})
