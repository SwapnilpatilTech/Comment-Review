import React from 'react';
import { useFormik } from 'formik';
import { object, string, number, boolean } from 'yup';

const schema = object({
    name: string().required().min(3),
    age: number().required().positive().integer(),
    email: string().required().email(),
    password: string().required().min(12),
    category: string().required(),
    isValid: boolean().required(),
});

const intial_state = {
    name: '',
    age: '',
    email: '',
    password: '',
    category: '',
    isValid: false,
}

export default function StudentForm() {
    const formik = useFormik({
        initialValues: intial_state,
        validationSchema: schema,
        onSubmit: value => {
            console.log(value);
            alert(`${value.name}  form is submited.`);
        }
    });

    const { values, errors, touched } = formik;

    return (
        <div className="form-container">
            <form action="" onSubmit={formik.handleSubmit}>
                <label htmlFor="Name">Name</label>
                <input type="text" name='name' value={values.name}  onChange={formik.handleChange} />
                {errors.name && touched.name && <span className="error">{errors.name}</span>}

                <br />
                <label htmlFor="">Age</label>
                <input type="number" name='age' value={values.age} onChange={formik.handleChange} />
                {errors.age && touched.age && <span className="error">{errors.age}</span>}

                <br />

                <label htmlFor="">Email</label>
                <input type="email" name='email' value={values.email}  onChange={formik.handleChange} />
                {errors.email && touched.email && <span className="error">{errors.email}</span>}

                <br />

                <label htmlFor="">Password</label>
                <input type="password" name='password' value={values.password}  onChange={formik.handleChange} />
                {errors.password && touched.password && <span className="error">{errors.password}</span>}

                <br />

                <select name="category" value={values.category} onChange={formik.handleChange} >
                    <option value="">Select category</option>
                    <option value="Men">Men</option>
                    
                    <option value="women">Women</option>
                    <option value="Kids">Kids</option>
                </select>
                {errors.category && touched.category && <span className="error">{errors.category}</span>}

                <br />

                <div style={{display: "flex", gap: "8px", alignItems: "center"}}>
                    <input type="checkbox" name="isValid" value={values.isValid} onChange={formik.handleChange} />
                    <p>I confirm that I have reviewed and accepted the Terms & Privacy Policy </p>
                    {errors.isValid && touched.isValid && <span className="error">{errors.isValid}</span>}
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}