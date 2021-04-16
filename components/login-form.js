import { useState } from 'react'
import Header from '../components/cookie-stand-header'
import Head from 'next/head'

export default function LoginForm({ onSubmit }) {

    const initialValues = {
        username: '',
        password: '',
    }

    const [values, setValues] = useState(initialValues);

    function submitHandler(event) {
        event.preventDefault();
        onSubmit(values);
        setValues(initialValues)
    }

    function inputChangeHandler(event) {

        let { name, value } = event.target;

        setValues({ ...values, [name]: value });
    }

    return (
        <div>
            <Head>
                <title>Cookie Stand Admin</title>
            </Head>
            <Header title="Cookie Stand Admin"/>
        <form onSubmit={submitHandler} className="flex flex-col uppercase text-center w-1/2 p-5 m-auto text-sm font-bold bg-green-200 border-2 border-green-400 rounded-md">
            <div className="flex flex-col my-3">
                <label htmlFor="username" className="mb-1">User Name</label>
                <input className="text-lg py-1" type="text" name="username" id="username" value={values.username} onChange={inputChangeHandler} placeholder="User Name" />
            </div>

            <div className="flex flex-col my-3">
                <label htmlFor="password" className="mb-1">password</label>
                <input className="text-lg py-1" type="password" name="password" id="password" value={values.password} onChange={inputChangeHandler} placeholder="password" />
            </div>

            <button type="submit" className="p-3 my-3 uppercase bg-green-500 rounded">Sign In</button>

        </form>
        </div>
    );
}
