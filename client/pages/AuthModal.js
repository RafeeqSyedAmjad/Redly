import Button from "./Button";
import Input from "./Input";
import { useState } from 'react';
import axios from 'axios';
export default function AuthModal(props) {

    const [modalType, setModalType] = useState('login');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function register(e) {
        const data = { email, username, password };
        axios.post('http://localhost:4000', data, { withCredentials: true });

    }
    return (
        <div className="w-screen h-screen top-0 left-0 z-20 flex" style={{ backgroundColor: 'rgba(0,0,0,.6)' }}>
            <div className=" w-3/4 mx-auto rounded-md  sm:w-1/2 md:w-1/4 border border-reddit_dark-brighter p-5 bg-reddit_dark text-reddit_text self-center">
                {modalType === 'login' && (
                    <h1 className="text-2xl mb-5">Login</h1>
                )}
                {modalType == 'register' && (
                    <h1 className="text-2xl mb-5">Register</h1>
                )}
                {modalType == 'register' && (
                    <label>
                        <span className="text-reddit_text-darker text-sm">E-mail:</span>
                        <Input type="email" className="mb-3 w-full" value={email} onChange={e => setEmail(e.target.value)} />
                    </label>
                )}
                <label>
                    <span className="text-reddit_text-darker text-sm">username:</span>
                    <Input type="text" className="mb-3 w-full" value={username} onChange={e => setUsername(e.target.value)} />
                </label>

                <label>
                    <span className="text-reddit_text-darker text-sm">password:</span>
                    <Input type="password" className="mb-3 w-full" value={password} onChange={e => setPassword(e.target.value)} />
                </label>
                {modalType == 'Login' && (
                    <Button className="w-full py-2 mb-3">
                        Login In
                    </Button>
                )}

                {modalType == "Signup" && (
                    <Button onClick={e => register(e)} className="w-full py-2 mb-3"> Sign Up</Button>
                )}



                {
                    modalType === 'login' && (
                        <div>
                            New to Reddit? <button className="text-blue-600" onClick={() => setModalType('register')}>SIGN UP</button>
                        </div>
                    )
                }
                {
                    modalType === 'register' && (
                        <div>
                            Already have an account <button className="text-blue-600" onClick={() => setModalType('login')}>LOG IN</button>
                        </div>
                    )
                }

            </div >
        </div >
    )
}
