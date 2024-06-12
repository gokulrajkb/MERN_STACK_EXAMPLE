import { React, useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { TodoForm } from './TodoForm'
import { getTodo, updateTodo } from '../apis/api'

export const EditTodo = () => {

    const [todo, setTodo] = useState()
    const { id } = useParams();
    useEffect(() => {
        const fetchTodo = async () => {
            const todo = await getTodo(id)
            setTodo(todo)
        }
        fetchTodo()
    }, [id])

    const navigate = useNavigate()
    const onSubmit = async (data) => {
        toast.success('Saving Edit !', { autoClose: 10 })
        await updateTodo(data, id)
        navigate('/')
        toast.success('Edit Saved !', { autoClose: 1500 })
    }

    return (
        todo ? (
        <div className='container'>
            <div className='mt-3'>
                <h3>Edit Todo</h3>
                <TodoForm todo={todo} onSubmit={onSubmit}/>
            </div>
        </div>) : <div>Loading...</div>        
    )
}