import React from 'react'
import { toast } from 'react-toastify';
import IconButton from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import CreateIcon from '@mui/icons-material/Create';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getTodos, deleteTodo } from '../apis/api'

export const TodoList = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        const fetchItems = async () => {
            const todos = await getTodos()
            setItems(todos)
        }
        fetchItems()
    }, [])

    const callDelete = async (id) => {
        toast.success('Deleting !', { autoClose: 10 })
        const res = await deleteTodo(id)
        if (res.acknowledged) {
            const fetchItems = async () => {
                const todos = await getTodos()
                setItems(todos)
            }
            fetchItems()
            toast.success('Deleted !', { autoClose: 1500 })
        }
    }

    return(
        <div className='container'>
            <div className='mt-3'>
                <h3>Todo List</h3>
                <table className='table table-striped mt-3'>
                    <thead>
                        <tr>
                            <th>Text</th>
                            <th>Action</th>
                            <th>Done</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(todo => (
                            <tr key={todo._id}>
                                <td>
                                    {todo.text}
                                </td>
                                <td>
                                    <Link to={`/edit/${todo._id}`}><CreateIcon fontSize="inherit" /></Link>
                                </td>
                                <td>
                                    <IconButton aria-label="delete" onClick={() => callDelete(todo._id)} size="large"><CloseIcon fontSize="inherit" /></IconButton>
                                </td>
                            </tr>                        
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}