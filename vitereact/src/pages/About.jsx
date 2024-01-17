import React from 'react'

function About() {

  const numbers = [1, 2, 3, 4, 5];

  const newNumbers = numbers.map((number) => {
    return number * 2;
  });
  
  // console.log(newNumbers);

  const students = [
    {
      id: 1,
      name : 'Ishrat',
      roll : 2
    },
    {
      id: 2,
      name : 'Jahan',
      roll : 3
    }
  ]

  const newStudents = students.map((student) => {
    return <li key={student.id}>{student.name}</li>
  })

  console.log(newStudents);
  


  return (
   <>
    <div>About</div>

    <ul>
      {newStudents}

    </ul>
    
   </>
  )
}

export default About