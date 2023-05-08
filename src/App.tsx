import React, {useState} from 'react';
import './App.css';
import {TasksType, Todolist} from './Todolist';

export type FilterValueType = 'All' | 'Completed' | 'Active'

function App() {

    let [tasks, setTasks] = useState<Array<TasksType>>([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'Redux', isDone: false}
    ])

    let [filter, setFilter] = useState<FilterValueType>('All')

    const changeFilter = (value: FilterValueType) => {
        setFilter(value)
    }

    const removeTask = (id: number) => {
        let filteredTasks = tasks.filter(f => f.id !== id)
        setTasks(filteredTasks)
    }

    let tasksForTodolist = tasks;
    if (filter === 'Completed') {
        tasksForTodolist = tasks.filter(t => t.isDone === true);
    }

    if (filter === 'Active') {
        tasksForTodolist = tasks.filter(t => t.isDone === false);
    }

    return (
        <div className="App">
            <Todolist name="What to learn"
                      tasks={tasksForTodolist}
                      removeTask={removeTask}
                      changeFilter={changeFilter}/>
        </div>
    );
}

export default App;
