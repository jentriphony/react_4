import classes from './Button.module.css'

const Button = dataProps => {



	return (

<button
 className={ classes.button }
 type={ dataProps.type || 'button' }
 onClick={ dataProps.onClick }
>



 { dataProps.children }



</button>

	)



}



export default Button
