import { useState } from 'react';
import axios from 'axios';
import "./registration.css"
const Registration = () => {
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(''); 

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    const formData = { username, phoneNumber, email, password, confirmPassword };
    try {
      await axios.post('http://135.181.152.249:8072/Account/register', formData);
      window.location.href = '/login';
    } catch (error) {
      setError(error.message);
    }
  };

  const gotoLogin = () => {
    window.location.href = '/login';
  };

  return (
    <div className='bgbgb'>
      <h1>Join Our Library</h1>
      <form onSubmit={handleRegister}>
        <input 
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input 
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input 
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="password" placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {error && <p>{error}</p>}
        <button type="submit">Register</button>
        <button onClick={gotoLogin}>Go to Login Page</button>
      </form>
    </div>
  );
};

export default Registration;
