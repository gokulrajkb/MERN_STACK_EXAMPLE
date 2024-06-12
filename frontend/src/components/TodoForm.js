import { React } from 'react'
import SaveIcon from '@mui/icons-material/Save';
import { useForm } from 'react-hook-form'

export const TodoForm = ( {todo, onSubmit}) => {

    const {register, handleSubmit} = useForm(
        {
            defaultValues: {
                text : todo ? todo.text : ''
            }
        })

    const submitHandler = handleSubmit((data) => {
        onSubmit(data)
    })

    return (
        <form onSubmit={submitHandler}>
            <div className='form-group'>
                <label htmlFor='text'>Text:</label>
                <input className='form-control' {...register('text', { required: true })} type='text' name='text' id='text' />
            </div>
            <div className='form-group'>
                <button className='btn btn-primary' type='submit'><SaveIcon fontSize="inherit" /></button>
            </div>
        </form>
    )
}




