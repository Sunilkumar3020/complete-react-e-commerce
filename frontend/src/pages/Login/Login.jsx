import { useContext, useState } from "react"
import { loginUser } from "../../context/auth/authActions";
import { AuthContext } from '../../context/auth/AuthContext';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { dispatch } = useContext(AuthContext);
    let navigate = useNavigate()

    const [formField, setFormField] = useState({
        email: '',
        password: ''
    })
    const handleInputChange = e => {
        const { name, value } = e.target;
        setFormField((prev) => (
            {
                ...prev,
                [name]: value
            }
        ))
    }

    const handleSubmit = async e => {
        e.preventDefault()
        await loginUser(dispatch, { email: formField.email, password: formField.password });
        navigate("/products");

    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input type="email" name="email" placeholder="Email" onChange={handleInputChange} value={formField.email} />
            <input type="password" name="password" id="password" onChange={handleInputChange} value={formField.password} />
            <button>Login</button>
        </form>
    )
}

export default Login;