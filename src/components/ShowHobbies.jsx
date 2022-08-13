import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { deleteHObby, getHobbies, updateHobby } from '../redux/hobbiesSlice';
import Mailer from './Mailer';


const ShowHobbies = () => {
    const [data, setData] = useState([])
    console.log(data);
    const dispatch = useDispatch()
    const allData = useSelector((state) => state.hobbiesStore)
    const { hobbies } = allData;
    // console.log(hobbies)
    useEffect(() => {
        dispatch(getHobbies())
    }, [dispatch])


    const handleDelete = (_id) => {
        dispatch(deleteHObby(_id))
    }

    const handleChange = (h) => {
        console.log(h);
        setData([h, ...data])
    }

    const handleForm = (e) => {
        e.preventDefault()
        const formValue = {
            name: e.target.name.value,
            phone: e.target.phone.value,
            email: e.target.email.value,
            hobbies: e.target.hobbies.value
        }
        dispatch(updateHobby(formValue))
        console.log(formValue)
        e.target.name.value = ''
        e.target.phone.value = ''
        e.target.email.value = ''
        e.target.hobbies.value = ''
    }

    return (

        <div class="overflow-x-auto max-w-[1240px] mx-auto">
            {
                data.length > 0 && <Mailer />
            }
            <table class="table w-full">
                {/* <!-- head --> */}
                <thead className=''>
                    <tr>
                        <th>
                            {/* <label>
                                <input type="checkbox" class="checkbox" />
                            </label> */}
                        </th>
                        <th>#</th>
                        <th>Name</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>Hobbies</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        hobbies && hobbies.map((h, index) => {
                            // console.log(h._id)
                            return (
                                <tr>
                                    <th>
                                        <label>
                                            <input onChange={() => handleChange(h)} type="checkbox" class="checkbox" />
                                        </label>
                                    </th>
                                    <td>{index + 1}</td>
                                    <td>{h.name}</td>
                                    <td>{h.phone}</td>
                                    <td>{h.email}</td>
                                    <td>{h.hobbies}</td>
                                    <th>
                                        <label htmlFor='edit-modal' class="btn btn-ghost  text-xl">🖋</label>
                                        <button
                                            onClick={() => handleDelete(h._id)}
                                            class="btn btn-ghost text-xl">✖</button>
                                    </th>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <input type="checkbox" id="edit-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <form
                        onSubmit={handleForm}
                        className='flex flex-col items-center gap-4 '>
                        <div class="modal-action flex items-end justify-end">
                            <label for="edit-modal" class="btn bg-transparent">✖</label>
                        </div>
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

                </div>
            </div>
        </div >
    );
};

export default ShowHobbies;