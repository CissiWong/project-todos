import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Wrapper = styled.div`
   width: 100%;
`;

const Paragraph = styled.p`
  text-align: center
`;

const TaskSummary = () => {

  const tasks = useSelector(state => state.tasks).length
  const completed = useSelector((state) => state.tasks.filter((item) => item.completed)).length
  const active = useSelector((state) => state.tasks.filter((item) => !item.completed)).length

  return(
    <Wrapper>
    { tasks > 0 &&
        <Paragraph>You have {tasks} tasks today. {completed} are completed and {active} are active.</Paragraph>
    }
    </Wrapper>
    
  )
}

export default TaskSummary