export const exercises = {
    exercises1 :10,
    exercises2 : 7,
    exercises3 : 14
  }
  
  const {exercises1, exercises2, exercises3} = exercises
  
  
  function Total() {
    return (<p>Number of exercises {exercises1 + exercises2 + exercises3}</p>)
  }
  
  export default Total;