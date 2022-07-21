import { useState } from 'react'
import AddElement from './components/List/AddElement'
import List from './components/List/List'



function App() {



	const [list, setList] = useState([

		{
			id: 'id_1',
			username: 'username_1',
			age: 1
		},
		{
			id: 'id_2',
			username: 'username_2',
			age: 2
		}

	])

	const addElement = element => {

		setList(previousList => {
			element.id = 'id_' + (previousList.length + 1)
			const element_ = element
			return [
				...previousList,
				element_
			]
		})

	}


  return (

<div>



 <AddElement onAdd={ addElement }/>

 <List list={ list } />


</div>

  )
}



export default App
