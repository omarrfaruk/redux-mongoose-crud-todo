import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateHobby } from '../redux/hobbiesSlice';

const EditHobbies = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()
    // console.log(id)

    const handleForm = (e) => {
        e.preventDefault()
        const formValue = {
            _id: id,
            name: e.target.name.value,
            phone: e.target.phone.value,
            email: e.target.email.value,
            hobbies: e.target.hobbies.value
        }
        dispatch(updateHobby(formValue))
        navigate('/')
    }
    return (
        <form
            onSubmit={handleForm}
            className='flex flex-col items-center mt-10 gap-4 '>
            <input type="text" required placeholder="Name" id='name' class="input input-bordered w-full max-w-xs" />
            <input type="tel" required placeholder="Phone Number" id='phone' class="input input-bordered w-full max-w-xs" />
            <input type="email" required placeholder="Email" id='email' class="input input-bordered w-full max-w-xs" />
            <input type="text" required placeholder="Hobbies" id='hobbies' class="input input-bordered w-full max-w-xs" />
            <button
                type='submit'
                className='btn btn-sm btn-success'
            >
                SAVE
            </button>
        </form>
    );
};

export default EditHobbies;