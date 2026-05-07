import { JSX, useRef, useState } from 'react';

import { TasksStateModel } from '../../state/tasks-state-model';

export function TasksComponent(): JSX.Element {
    let [tasksState, setTasksState] = useState<TasksStateModel[]>([
        new TasksStateModel(1, 'Plan sprint tasks', false),
        new TasksStateModel(2, 'Deep work session', true),
        new TasksStateModel(3, 'Review PRs', false)
    ]);

    let inputRef = useRef<HTMLInputElement>(null);

    const onAddTaskButtonClicked = (description: string): void => {
        if (description.trim()) {
            let newTask = new TasksStateModel(Date.now(), description, false);

            inputRef.current!.value = '';

            setTasksState([...tasksState, newTask]);
        }
    }

    return (
        <div className=' p-6 rounded-xl bg-white border w-full border-secondary/30 hover:shadow-2xl transition shadow-md'>
            <h3 className='font-semibold text-lg mb-3'>
                Today's Tasks
            </h3>
            <ul className='space-y-3'>
                {tasksState.map(task => (
                    <li key={task.id}
                        className='flex items-center justify-between p-3 rounded-xl bg-secondary/20 border border-white/10'>
                        <p className={task.isCompleted ?
                            'line-through text-gray-400 text-md' :
                            'text-gray-600 text-md'}>
                            {task.description}
                        </p>
                        <input type='checkbox'
                            className='accent-primary'
                            checked={task.isCompleted}
                            onChange={() => setTasksState(tasksState.map(t =>
                                t.id === task.id ? { ...t, isCompleted: !t.isCompleted } : t
                            ))}
                        />
                    </li>
                ))}
            </ul>
            <div className='flex items-center mt-3'>
                <input type='text'
                    placeholder='Add new task...'
                    className='flex-1 p-3 focus:outline-none border-b border-gray-300'
                    ref={inputRef} />
                <button className='text-primary px-6 py-1 rounded-xl border border-primary font-semibold ml-3'
                    onClick={() => onAddTaskButtonClicked(inputRef.current?.value || '')}>
                    Add Task
                </button>
            </div>
        </div>
    )
}

export default TasksComponent;