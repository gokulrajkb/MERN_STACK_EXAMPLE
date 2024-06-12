import React from 'react'
import { toast } from 'react-toastify';
import { TodoForm } from './TodoForm'
import { createTodo } from '../apis/api'
import { useNavigate } from 'react-router-dom'

export const CreateTodo = () => {

    const navigate = useNavigate()
    const onSubmit = async (data) => {
        toast.success('Creating !', { autoClose: 10 })
        await createTodo(data)
        navigate('/')
        toast.success('Created !', { autoClose: 1500 })
    }

    return (
        <div className='container'>
            <div className='mt-3'>
                <h3>Create Todo</h3>
                <TodoForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}