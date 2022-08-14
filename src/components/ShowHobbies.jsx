import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteHObby, getHobbies } from '../redux/hobbiesSlice';
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

    return (

        <div class="overflow-x-auto max-w-[1240px] mx-auto">
            {
                data.length > 0 && <Mailer />
            }
            <table class="table w-full">
                <thead className=''>
                    <tr>
                        <th>
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
                                        <Link to={'/edit/' + h._id} class="btn btn-ghost  text-xl">🖋</Link>
                                        <button
                                            onClick={() => handleDelete(h._id)}
                                            class="btn btn-ghost text-xl text-red-600">✖</button>
                                    </th>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div >
    );
};

export default ShowHobbies;