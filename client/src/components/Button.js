import PropTypes from 'prop-types'


const Button = ({color, text, onClick}) => {
    return <button 
    style={{ backgroundColor: color}} className='btn'
    onClick={onClick}
    >{text}</button>
}

Button.defaultProps = {
    color: 'Black'
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Button
