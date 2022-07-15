import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/Header/Header'
import Content from './components/Content/Content'
import Total from './components/Total/Total'

const App = () => {

  const course = 'Half Stack application development';
    
  return (
    <>  
      <Header course={course}/>
      <Content />
      <Total />
    </>   
    
  )
}

ReactDOM.render(<App />, document.getElementById('root'))