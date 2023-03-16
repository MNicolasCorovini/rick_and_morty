import { useState } from "react"
import style from "./Form.module.less"
import validation from "./validation"

export default function Form({login}){

    const [userData, setUserData] = useState({
        email: '',
        password: '',
    })

    const [errors, setErrors] = useState({
        email: '',
        password: '',
    })

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        setUserData({...userData, [property]: value});
        validation({...userData, [property]: value}, errors, setErrors);
    }

    const submitHandle = (event) => {
        event.preventDefault();
        login(userData);
    }

    return(
        <div className={style.contenedor}>
            <form className={style.form} onSubmit = {submitHandle}>
                <div>
                    <label htmlFor="email" >Email</label>
                    <input
                    type="text" 
                    name="email" 
                    value={userData.email} 
                    onChange={handleChange} />
                    <p>{errors.email}</p>
                </div>

                <div>
                    <label htmlFor="password" >Password</label>
                    <input 
                    type="text" 
                    name="password" 
                    value={userData.password} 
                    onChange={handleChange} />
                    <p>{errors.password}</p>
                </div>

                <button>LOGIN</button>
            </form>
        </div>
    )
}