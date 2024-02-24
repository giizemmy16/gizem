import React from 'react';
import { MdDeleteSwepp } from 'react';

const TaskItem = ({ task, deletTask, toggleChek }) => {
    return (
        <li className="items">
            <div className="items-text">
                <input type="checkbox" checked={task.checked} onChange={() => toggleChek(task.taskName)} />
                <p className={task.checked ? 'isCheked' : ''}>{task.taskName} </p>
            </div>
            <MdDeleteSwepp className="delete-icon" onClik={deletTask(task.taskName)} />

        </li>
    );
};

export default TaskItem;