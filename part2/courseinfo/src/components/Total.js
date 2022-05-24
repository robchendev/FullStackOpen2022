const Total = ({ parts }) => {
  let totalExercises = 0;
  for (let i = 0; i < parts.length; i++) {
    totalExercises += parts[i].exercises;
  }

  return (
    <p><strong>
      total of {totalExercises} exercises
    </strong></p>
  )
}

export default Total