import {element} from 'deku'
import {PropTypes, validate} from 'deku-prop-types'

const Weight = ({props}) => <div>
  {props.name}
  <button onClick={props.remove}>{'Delete'}</button>
</div>

Weight.propTypes = {
  name: PropTypes.string.isRequired,
  remove: PropTypes.func
}

export default validate(Weight)
