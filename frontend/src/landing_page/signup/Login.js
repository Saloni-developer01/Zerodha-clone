import React from 'react';

const Login = () => {
    return (
        <div className="w-full text-center p-8 bg-gray-100 m-4">
            <h2 className="text-2xl font-bold mb-6">Login</h2>
            <p className="text-gray-600 mb-4">Please enter your credentials to login.</p>
            <form>
                <input type="text" placeholder="Username" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <a href="/signup">Sign up</a></p>
        </div>
    );
}

export default Login;
