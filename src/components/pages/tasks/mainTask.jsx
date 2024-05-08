import React, { useState } from 'react'
import Task from './tasks'
import TaskDetail from './taskdetail'

export default function MainTask() {

    const [showTask, setShowTask] = useState(true);

    const toggleComponent = () => {
        setShowTask(!showTask);
    };

    const hideDetailComponent = () => {
        setShowTask(true);
    };

  return (
    <div>
        {showTask ? <Task toggleComponent={toggleComponent} /> : <TaskDetail hideDetailComponent={hideDetailComponent} />}
    </div>
  )
}
