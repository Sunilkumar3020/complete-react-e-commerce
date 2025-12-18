import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/auth/AuthContext"
import { registerUser } from "../../context/auth/authActions"
const Register = () => {
    const { dispatch } = useContext(AuthContext)
    const [formField, setFormField] = useState({ email: '', password: '' })
    const navigate = useNavigate()
    const handleInputChange = e => {
        const { name, value } = e.target;
        setFormField((prev) => (
            {
                ...prev,
                [name]: value
            }
        ))
    }

    const handleFormSubmit = async e => {
        e.preventDefault();
        await registerUser(dispatch, { email: formField.email, password: formField.password });
        navigate('/products')
    }
    return (
        <form onSubmit={handleFormSubmit}>
            <h2>Register</h2>
            <input type="email" name="email" id="email" value={formField.email} onChange={handleInputChange} />
            <input type="password" name="password" id="password" value={formField.password} onChange={handleInputChange} />
            <button>Create Account</button>
        </form>
    )
}

export default Register