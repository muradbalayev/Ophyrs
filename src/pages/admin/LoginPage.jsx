import useLogin from '@/hooks/useLogin';
import { useState } from 'react';
import '../../styles/AdminLogin.css'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
const LoginPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState(false)
    const [rememberMe, setRememberMe] = useState(false);

    const login = useLogin(true); // Pass true for admin login



    const handleLogin = async (e) => {
        e.preventDefault();
        login(username, password, rememberMe);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
            <div className="max-w-md w-full space-y-8 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
                        Admin Panel
                    </h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                    <div className="rounded-md  space-y-4">
                        <div className="flex flex-col gap-1 mt-3">
                            <label className="text-gray-600 dark:text-white ms-1 text-sm">Username</label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                required
                                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 text-gray-900 dark:text-white dark:bg-gray-700 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col gap-1 mt-3">
                        <label className="text-gray-600 dark:text-white ms-1 text-sm">Password</label>
                        <div className="relative">
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type={type ? "text" : "password"}
                                required
                                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 text-gray-900 dark:text-white dark:bg-gray-700 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
                                placeholder="Password"
                            />
                            <span className='eye_icon absolute' onClick={() => setType(!type)}>
                                {type ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
                            </span>
                        </div>
                    </div>
                        <div className="w-full flex gap-2 items-center font-medium text-sm mt-2">
                            <p className='ms-1 text-gray-600 dark:text-white'>Remember me</p>

                            <input
                                checked={rememberMe}
                                onChange={(e) => setRememberMe(e.target.checked)}
                                type="checkbox" className="hidden" />

                            <div className="checkbox-wrapper-31" onClick={() => setRememberMe(!rememberMe)}>
                                <input type="checkbox" />
                                <svg viewBox="0 0 35.6 35.6">
                                    <circle className="background" cx="17.8" cy="17.8" r="17.8"></circle>
                                    <circle className="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
                                    <polyline className="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white dark:text-black bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                        >
                            Daxil ol
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage; 