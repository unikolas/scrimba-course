import React, {} from "react"
import Wrapper from "../components/Wrapper";

function App() {
    const [skill, setSkill] = React.useState('')
    const [skills, setSkills] = React.useState([
      'HTML', 'CSS', 'JavaScript'
    ])

    function handleChangeInput(event) {
      setSkill(event.target.value);
    }

    function handleAddSkill() {
      setSkills(skills.concat(skill))
    }

    function handleRemoveSkill(skill) {
      setSkills(skills.filter(s => s !== skill))
    }

    /* Next, we pass handleRemoveSkill down as a prop, or since this is a function, as a callback function to be used within SkillList */
    return (
      <Wrapper>
        <input onChange={handleChangeInput} />
        <button onClick={handleAddSkill}>Add Skill</button>
        <SkillList skills={skills} handleRemoveSkill={handleRemoveSkill} />
      </Wrapper>
    );
  }

  /* When we try typing in the input again, we see rerendering in the console every time we type. Our memoization from React.memo is broken!

  What is happening is the handleRemoveSkill callback function is being recreated everytime App is rerendered, causing all children to be rerendered, too. We need to wrap handleRemoveSkill in useCallback and only have it be recreated when the skill value changes.

  To fix our app, replace handleRemoveSkill with:

  const handleRemoveSkill = React.useCallback((skill) => {
    setSkills(skills.filter(s => s !== skill))
  }, [skills])

  Try it yourself!
  */
  const SkillList = React.memo(({ skills, handleRemoveSkill }) => {
    console.log('rerendering');
    return (
        <ul>
          {skills.map(skill => <li key={skill} onClick={() => handleRemoveSkill(skill)}>{skill}</li>)}
        </ul>
    )
  })


  export default App