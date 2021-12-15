import React from "react";
import TaskItem from "../taskItem/taskItem";
import './taskList.scss';

const TaskList = ({data, onDelete, doneTasks, allCompleated}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <TaskItem 
                key={id} 
                {...itemProps}
                onDelete={() => onDelete(id)}
                doneTasks={() => doneTasks(id)}
                allCompleated={() => allCompleated(id)}
            />
        )
    })

    return (
        <div className="to-do__tasks__item">
            <ul className="to-do__list">
                {elements}
            </ul>
        </div>
    );
}


export default TaskList;



