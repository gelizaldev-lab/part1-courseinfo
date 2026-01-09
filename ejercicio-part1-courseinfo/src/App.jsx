import { Content } from "./components/Content"
import { Header } from "./components/Header"
import { Total } from "./components/Total"

function App() {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10,
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
    },
    {
      name: 'State of a component',
      exercises: 14,
    }
  ];

  // const part1 = {
  //   name: 'Fundamentals of React',
  //   exercises: 10,
  // }
  // const part2 = {
  //   name: 'Using props to pass data',
  //   exercises: 7,
  // }
  // const part3 = {
  //   name: 'State of a component',
  //   exercises: 14,
  // }

  return (
    <div>
      <Header course={course} />
      <Content
        parts={parts}
      // part2={part2}
      // part3={part3}
      />
      <Total parts={parts}
      // exercises1={parts[0].exercises}
      // exercises2={parts[1].exercises}
      // exercises3={parts[2].exercises} 

      />

    </div>
  )
}

export default App
