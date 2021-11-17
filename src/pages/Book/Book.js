import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import axios from 'axios'
import './Book.css';

const Purchase = () => {
    const [product, setProduct] = useState([])
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth()
    const { id } = useParams()

    useEffect(() => {
        //load data from server
        fetch(`https://frozen-reaches-18758.herokuapp.com/orders/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    // POST DATA TO SERVER
    const onSubmit = data => {
        //post data in server
        axios.post("https://frozen-reaches-18758.herokuapp.com/orders", data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully')
                    reset()
                }
            })
        console.log(data);
    }

    return (
        <div>

            <div className='addorders'>
                <h2>PURCHASE PRODUCT</h2>

                <form onSubmit={handleSubmit(onSubmit)} className="form" >
                    {/* Name, email etc from database */}
                    <input {...register("productName")} value={product?.name} />
                    <input {...register("name", { required: true })} defaultValue={user.displayName} />
                    <input {...register("email")} value={user.email} />
                    <textarea {...register("description")} value={product?.description} />
                    <input {...register("address")} placeholder="Address" />
                    <input type="submit" value='Confirm Order' style={{ height: '35px', background: 'navy', cursor: 'pointer', color: '#fff' }} />
                </form>
            </div>

        </div>
    );
};

export default Purchase;