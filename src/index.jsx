import {dom, element} from 'deku'

const {createRenderer} = dom

const Label = {
  render() {
    return <span>{'Hi'}</span>
  }
}

const render = createRenderer(document.getElementById('app'))

render(
  <Label />
)
