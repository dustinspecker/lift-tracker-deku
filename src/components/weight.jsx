import {button, div} from 'dscript-deku'
import {PropTypes, validate} from 'deku-prop-types'

const Weight = ({props}) =>
  div([
    props.name,
    button({onClick: props.remove}, ['Delete'])
  ])

Weight.propTypes = {
  amount: PropTypes.number,
  name: PropTypes.string.isRequired,
  remove: PropTypes.func
}

export default validate(Weight)
