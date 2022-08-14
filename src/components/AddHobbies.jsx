import React from 'react';
import { AiOutlinePlus } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { hobbyAdding } from '../redux/hobbiesSlice';
import toast from 'react-hot-toast';
import ShowHobbies from './ShowHobbies';





const AddHobbies = () => {
    const hobbiesState = useSelector((state) => state.hobbiesStore)
    console.log(hobbiesState.addHobbyStatus);
    const dispatch = useDispatch()



    const handleForm = (e) => {
        e.preventDefault()

        const formValue = {
            name: e.target.name.value,
            phone: e.target.phone.value,
            email: e.target.email.value,
            hobbies: e.target.hobbies.value
        }
        dispatch(hobbyAdding(formValue))
        console.log(formValue)
        e.target.name.value = ''
        e.target.phone.value = ''
        e.target.email.value = ''
        e.target.hobbies.value = ''

    }


    return (
        <>
            <label htmlFor="form-modal" className='flex items-center justify-center gap-4 my-6 mx-auto w-full max-w-xs btn btn-active btn-ghost'>
                <AiOutlinePlus />
                <span>Add Your Hobbies</span>
            </label>
            <input type="checkbox" id="form-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <form
                        onSubmit={handleForm}
                        className='flex flex-col items-center gap-4 '>

                        <input type="text" required placeholder="Name" id='name' class="input input-bordered w-full max-w-xs" />
                        <input type="tel" required placeholder="Phone Number" id='phone' class="input input-bordered w-full max-w-xs" />
                        <input type="email" required placeholder="Email" id='email' class="input input-bordered w-full max-w-xs" />
                        <input type="text" required placeholder="Hobbies" id='hobbies' class="input input-bordered w-full max-w-xs" />
                        <button
                            // for='form-modal'
                            type='submit'
                            className='btn btn-sm btn-success'
                        >
                            SAVE
                        </button>
                    </form>
                    <div class="modal-action">
                        <label for="form-modal" class="btn btn-circle">✖</label>
                    </div>
                </div>
            </div>
            {
                hobbiesState.addHobbyStatus === "rejected" ? toast.error('Got Error') : null
            }
            {
                hobbiesState.addHobbyStatus === "success" ? toast.success('Added Successfully') : null
            }
            <ShowHobbies />
        </>
    );
};

export default AddHobbies;