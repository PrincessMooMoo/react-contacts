import { useContext, useState } from 'react';
import AuthContext from '../contexts/AuthContext';





const LoginForm = () => {

const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const { login } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        login(username, password)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <input
                type="text"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button type="submit">Login</button>
        </form>
    );
}

export default LoginForm;