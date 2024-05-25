import React, { useState } from 'react'
import Task from './tasks'
import TaskDetail from './taskdetail'
import withAuthCheck from '../../Auth/withAuthCheck';

function MainTask() {

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

export default withAuthCheck(MainTask);
