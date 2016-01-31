import {element} from 'deku'
import {PropTypes, validate} from 'deku-prop-types'

const Weight = ({props}) => <div onClick={props.remove}>{props.name}</div>

Weight.propTypes = {
  name: PropTypes.string.isRequired,
  remove: PropTypes.func
}

export default validate(Weight)
