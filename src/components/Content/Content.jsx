import { exercises } from "../Total/Total"

const part1 = 'Fundamentals of React'
const part2 = 'Using props to pass data'
const part3 = 'State of a component'

function Content() {
  return (
    <>
      <p>
        {part1} {exercises.exercises1}
      </p>
      <p>
        {part2} {exercises.exercises2}
      </p>
      <p>
        {part3} {exercises.exercises3}
      </p>
    </>
  )
}

export default Content;