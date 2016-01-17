import assert from 'assert-element'
import test from 'ava'

import Weight from '../../src/components/weight'

test('should render name', t => {
  const component = {
    props: {
      name: 'squats'
    }
  }
  const weight = Weight(component)

  assert.isNode(weight, 'div')
  assert.hasChildren(weight, 1)
  t.is(weight.children[0].nodeValue, 'squats')
})

test('should call remove handler', t => {
  let removeCalled = false
  const component = {
    props: {
      name: 'squats',
      remove: () => removeCalled = true
    }
  }
  const weight = Weight(component)

  weight.attributes.onClick()
  t.ok(removeCalled)
})
