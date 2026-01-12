import React from 'react'
import Card from './Components/card' 
import Jobpostings from './Components/jobpostings.jx' 
const App = () => {
  return (
    <div className='parent'>
   {Jobpostings.map((ele,idx)=>{
  return <Card key={idx} job={ele} />
})}

    </div>
  )
}

export default App