import React from 'react';
import {FilterTasksType} from './App';

type TasksType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    name: string
    tasks: TasksType[]
    deleteTask: (id:number)=>void
    filterValue: (value: FilterTasksType)=>void
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
                {props.tasks.map(t =>
                    <li key={t.id}>
                        <button onClick={()=>{props.deleteTask(t.id)}}>X</button>
                        <input type="checkbox" checked={t.isDone}/>
                        <span>{t.title}</span>
                    </li>)}
            </ul>
            <div>
                <button onClick={()=>{props.filterValue('All')}}>All</button>
                <button onClick={()=>{props.filterValue('Active')}}>Active</button>
                <button onClick={()=>{props.filterValue('Completed')}}>Completed</button>
            </div>
        </div>
    )
}