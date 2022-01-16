import PropTypes from 'prop-types'
import Button from './Button'


export const Header = ({onForm, btnColor}) => {
   
    return (
        <header className="header">
           <h1>Grocery List</h1> 
           <Button onClick={onForm} 
           //if btnColor then btn color red add else blue
           color={btnColor? 'red' : 'rgb(3, 114, 101)'} 
           //if btnColor then btn will display add else close
           text={btnColor? 'close form' : 'open form'}/>
        </header>
    )
}
