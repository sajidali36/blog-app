import React, { useState } from 'react';
import { User } from '../Types';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const RegisterPage: React.FC = () => {
  const [user, setUser] = useState<User>({ username: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    localStorage.setItem('users', JSON.stringify([...users, user]));
    alert('Registration successful!');
    setUser({ username: '', email: '', password: '' });
    navigate('/');
  };

  return (
    <>
      <form className="w-50 mx-auto mt-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" name="username" value={user.username} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" name="email" value={user.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" name="password" placeholder="Password" value={user.password} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <p className="mx-5 mt-4">Already have account? <Link to="/login">Login</Link> </p>
      </form>
    </>
  );
};

export default RegisterPage;
