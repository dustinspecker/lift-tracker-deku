import {element} from 'deku'
import {propTypes, validate} from 'deku-prop-types'

const Weight = ({props}) => <div onClick={props.remove}>{props.name}</div>

Weight.propTypes = {
  name: propTypes.string.isRequired
}

export default validate(Weight)
