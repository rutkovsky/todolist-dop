type TasksPropsType = {
    title: string
    tasks: TasksTasksPropsType[]
    students: string[]
}

type TasksTasksPropsType = {
    taskId: number
    title: string
    isDone: boolean
}

export const Tasks = (props: TasksPropsType) => {
    return (
        <div>
            <h2>{props.title}</h2>
            {props.tasks.map((t)=><div><input type='checkbox' checked={t.isDone}></input>{t.taskId}. {t.title}</div>)}
            <h4>Students:</h4>
            {props.students.map((el) => <ul>{el}</ul>)}
        </div>
    )
}