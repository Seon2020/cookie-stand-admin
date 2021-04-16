import { useState } from 'react'

export default function CookieStandForm({ onCreate }) {

    const initialValues = {
        location: '',
        max: 0,
        min: 0,
        avg: 0,
    };

    const [values, setValues] = useState(initialValues);

    function submitHandler(event) {
        event.preventDefault();
        onCreate(values);
        setValues(initialValues)
    }

    function inputChangeHandler(event) {
        let { name, value, type } = event.target;

        if (type === "number") {
            value = parseFloat(value);
        }

        setValues({ ...values, [name]: value });
    }
    return (
        <form onSubmit={submitHandler} className="w-full mb-6 font-bold text-center border-2 uppercase bg-green-200 border-green-400 rounded-md p-9">
            <div className="flex mb-6 gap-x-6">
            <div className="flex-1">
                <label htmlFor="location">Add Location</label>
                <input className="w-full p-4 mt-3 h-9" type="text" name="location" id="location" value={values.location} onChange={inputChangeHandler} placeholder="Cookie Stand Location" />
            </div>

            <button type="submit" className="w-4/12 uppercase bg-green-500 rounded">Create Stand</button>

            </div>

            <div className="flex gap-x-12">
            <FormInputSection>
                <label htmlFor="min">Minimum Customers per Hour</label>
                <input className="w-full p-3 mt-3 h-9" type="number" name="min" id="min" value={values.min} onChange={inputChangeHandler} />
            </FormInputSection>
            <FormInputSection>
                <label htmlFor="max">Maximum Customers per Hour</label>
                <input className="w-full p-3 mt-3 h-9" type="number" name="max" id="max" value={values.max} onChange={inputChangeHandler} />
            </FormInputSection>
            <FormInputSection>
                <label htmlFor="avg">Average Cookies per Sale</label>
                <input className="w-full p-3 mt-3 h-9" type="number" name="avg" id="avg" value={values.avg} onChange={inputChangeHandler} />
            </FormInputSection>
        </div>
        </form>
    );
}

function FormInputSection({ children }) {
    return (
        <div className="flex-1 rounded">
            {children}
        </div>
    );
}