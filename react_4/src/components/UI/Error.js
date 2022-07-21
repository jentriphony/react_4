import classes from './Error.module.css'

import Card from './Card'
import Button from './Button'



const Error = dataProps => {



	return (

<div>
 <div className={ classes.backdrop } onClick={ dataProps.onClose }></div>

 <Card className={ classes.modal }>
  <h2 className={ classes.header }>
   { dataProps.title }
  </h2>

  <div className={ classes.content }>
   <p>{ dataProps.message }</p>
  </div>

  <footer className={ classes.actions }>
   <Button onClick={ dataProps.onClose }>ok</Button>
  </footer>
 </Card>



</div>

	)



}



export default Error
