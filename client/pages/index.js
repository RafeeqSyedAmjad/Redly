import Image from 'next/image'
import { useState, useEffect } from 'react';
import AuthModal from './AuthModal';
import AuthModalContext from './AuthModalContext';
import Header from './Header';
import PostForm from './PostForm';
import axios from 'axios';
import UserContext from './UserContext';

export default function Home() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [user, setUser] = useState({})

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
        <AuthModal />
        <PostForm />
        <div className="px-6 bg-reddit_dark text-reddit_text">
          <div className="border border-reddit_border bg-reddit_dark-brighter p-2 rounded-md">
            <h5 className="text-reddit_text-darker text-sm mb-1">Posted by u/123 5 hours ago</h5>
            <h2 className="text-xl mb-3">Do you feel like you're "missing out" on the latest and hottest tech stacks?</h2>
            <div className="text-sm leading-6">
              <p>
                99% of the time there's absolutely no reason to update your project with those shiny new things. But sometimes you just can't help trying out those new mouth watering shiny new toys that look really cool.

                Sometimes it feels overwhelming and impossible to keep up with all the latest tech.

                Is react with next still hot? Flutter? Nestjs? Graphql? How about prisma the new rising kid on the block.

                "I would like to buy some cyanide."

                The pharmacist asked, "Why in the world do you need cyanide?"

                The lady : "I need it to poison my husband."

                The pharmacists eyes got big and he exclaimed : "Lord have mercy! I can't give you cyanide to kill your husband! That's against the law! I'll lose my license! They'll throw both of us in jail! All kinds of bad things will happen. Absolutely not! You CANNOT have any cyanide!"

                The lady reached into her purse and pulled out a picture of her husband in bed with the pharmacist's wife.

                The pharmacist looked at the picture and replied : "Oh Well now That's different. You didn't tell me you had a prescription.

                I’m working in an electric utility as a civil engineer. I don’t have a good background in electrical and think it would be helpful if I understood it better. I work on the structures but I’d like to be able to understand what’s happening when I’m invited to meetings.

                Can someone provide a simple explanation on how power distribution works?

                Is it actual amperage that gets distributed? Is it watts?

                How does the amount of power vary between a 25kV primary and a 120/240V secondary?

                Also why is it 120/240V and not just 120V? Or just 240V?

                I have lots of questions, anything helps!
              </p>
            </div>
          </div>
        </div>
      </UserContext.Provider>
    </AuthModalContext.Provider>
  )
}
