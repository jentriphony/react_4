import classes from './List.module.css'

import Card from './../UI/Card'



const List = dataProps => {



	const list = dataProps.list.map(element => (

<li key={ element.id }>
 { element.username }
 { ` (${ element.age } ${ element.age === 1 ? 'year' : 'years' } old)` }
</li>

	))


	return (

<Card className={ classes.list }>



 <ul>
  { list }
 </ul>



</Card>

	)



}



export default List
