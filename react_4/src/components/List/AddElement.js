import classes from './AddElement.module.css'

import { useState } from 'react'
import Card from './../UI/Card'
import Button from './../UI/Button'
import Error from './../UI/Error'



const AddElement = dataProps => {



	const [username, setUsername] = useState('')
	const [age, setAge] = useState('')

	const [error, setError] = useState(false)



	const inputHandler = event => {

		const target = event.target
		if(target.id === 'username') {
			setUsername(target.value)
		} else if(target.id === 'age') {
			setAge(target.value)
		}

	}

	const onSubmit = event => {

		event.preventDefault()

		const username_ = username.trim()
		if(username_.length === 0) {
			setError(true)
			return
		}
		if(age < 1) {
			if(!error) {
				setError(true)
			}
			return
		}

		dataProps.onAdd({
			username: username_,
			age: age
		})

		setUsername('')
		setAge('')

	}

	const onErrorClose = () => {

		setError(false)

	}


	return (

<div>



 { error &&
 <Error
  title='an error occured'
  message='wrong username or age'
  onClose={ onErrorClose }
 />}

 <Card className={ classes.input }>
  <form onSubmit={ onSubmit }>
   <label htmlFor='username'>
    username
   </label>
   <input
    id='username'
    type='text'
    value={ username }
    onInput={ inputHandler }
   />

   <label htmlFor='age'>
    age
   </label>
   <input
    id='age'
    type='number'
    value={ age }
    onInput={ inputHandler }
   />

   <Button type='submit'>
    add
   </Button>
  </form>
 </Card>



</div>

	)



}



export default AddElement
