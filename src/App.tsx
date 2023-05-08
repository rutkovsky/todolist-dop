import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

export type FilterTasksType = 'All' | 'Active' | 'Completed'

function App() {
    let [tasks, setTasks] = useState([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'Redux', isDone: false}
    ])

    let [filter, setFilter] = useState<FilterTasksType>('All')

    const deleteTask = (id: number) => {
        let tasksAfterDel = tasks.filter(t => t.id !== id)
        setTasks(tasksAfterDel)
    }

    const filterValue = (value: FilterTasksType) => {
        setFilter(value)
    }

    let tasksAfterFilter = tasks
    if (filter === 'Active') {
        tasksAfterFilter = tasks.filter(t =>
            t.isDone === false)
    }
    if (filter === 'Completed') {
        tasksAfterFilter = tasks.filter(t =>
            t.isDone === true)
    }

    return (
        <div className="App">
            <Todolist name={'What to learn?'}
                      tasks={tasksAfterFilter}
                      deleteTask={deleteTask}
                      filterValue={filterValue}/>
        </div>
    )
}

export default App;
