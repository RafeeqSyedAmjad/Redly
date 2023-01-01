import Image from 'next/image'
import { useState, useEffect } from 'react';
import AuthModal from './AuthModal';
import AuthModalContext from './AuthModalContext';
import Header from './Header';
import PostForm from './PostForm';
import axios from 'axios';
import UserContext from './UserContext';
import Post from './Post';
import PostListing from './PostListing';
import Index from './comments/index'
import Board from './Board';

import { useRouter } from 'next/router';


export default function Home() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [user, setUser] = useState({})
  const router = useRouter()


  useEffect(() => {


    axios.get('http://localhost:4000/user', { withCredentials: true })
      .then(response => setUser(response.data)).catch(() => {
        console.log("user is logged out")
      })



  }, []);
  function logout() {
    axios.post('http://localhost:4000/logout', {}, { withCredentials: true })
      .then(() => setUser({}));
  }

  return (
    <AuthModalContext.Provider value={{ show: showAuthModal, setShow: setShowAuthModal }}>
      <UserContext.Provider value={{ ...user, logout, setUser }}>
        <Header />
        <Board />
        <Index />
        {/* <AuthModal /> */}
      </UserContext.Provider>
    </AuthModalContext.Provider>
  )
}
