import React from 'react';
import {FilterValueType} from './App';

export  type TasksType = {
    id: number,
    title: string,
    isDone: boolean
}

type PropsType = {
    name: string,
    tasks: TasksType[],
    removeTask: (id: number) => void
    changeFilter: (value: FilterValueType) => void
}

export const Todolist = (props: PropsType) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map(el =>
                    <li key={el.id}>
                        <button onClick={() => (props.removeTask(el.id))}>X</button>
                        <input type="checkbox" checked={el.isDone}/>
                        <span>{el.title}</span>
                    </li>
                )
                }
            </ul>
            <div>
                <button onClick={()=>{props.changeFilter('All')}}>All</button>
                <button onClick={()=>{props.changeFilter('Active')}}>Active</button>
                <button onClick={()=>{props.changeFilter('Completed')}}>Completed</button>
            </div>
        </div>
    )
}