import React ,{ useEffect, useState  } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { BsPenFill , BsQuestionCircle} from "react-icons/bs";
import { AiOutlineSearch , AiTwotoneSetting} from "react-icons/ai";

import firebase from 'firebase/app'; 
import { auth } from '../components/to/firebase';
import './Mailheader.css'

const MailHeader = () => {

  const [showListItems,setShowListItems] = useState(false);
  const [inputValue ,setInputValue] = useState('');
  const [isFocused,setIsFocused] = useState(false);
  // here authentication
  const [user,setUser] = useState(null);

  const handleInputChange = (e) =>{
    setInputValue(e.target.value);
  }

  const handleInputFocus = (e) =>{
    setIsFocused(true);
  }

  const handleInputBlur = () =>{
    setIsFocused(false);
  }
  // here click the input it changes the background and focus the box shadow
  const containerStyles = {
    backgroundColor: isFocused ? 'white' : 'initial',
    boxShadow: isFocused ? '0 0 5px rgba(0,0,0,0.5)' : 'initial',
    padding: '10px',
    marginLeft:'50px',
  }

  // here firebase configuration
  
   
 

  useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  },[]);

  const signInWithGoogle  = async () =>{
    const provider = new firebase.auth.GoogleAuthProvider();
    try{
      await firebase.auth().signInWithPopup(provider);

    }catch (error){
      console.error(error);
    }
  }

  const signOut = async () =>{
    try{
      await firebase.auth().signOut();

    }catch (error) {
      console.error(error);
    }
  }


  return (
    <div className='header'>
      <div className="G-Title">
         <div className="menu" onClick={() => setShowListItems(!showListItems)}>
         <GiHamburgerMenu/><div className="Gmail">Gmail</div>
         </div>
         <div className="compose-icon">
            <BsPenFill/><div className="compose-text">Compose</div>
         </div>
      </div>
      <div className="search" style={containerStyles}>
        <div className="search-icon"><AiOutlineSearch/></div>
        <input 
          type="text"
          value={inputValue}
          placeholder='Search mail'
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          style={{
             width:"600px",
             padding:"10px",
        }} />
      </div>
      <div className="question-mark">
        <BsQuestionCircle/>
      </div>
      <div className="settings">
        <AiTwotoneSetting/>
      </div>
       {/* here google auth  */}
       <div className="google-auth">
        {user ? (
          <>
           <p>Welcome, {user.displayName}</p>
           <button onClick={signOut}>SignOut</button>
          </>
        ): (
          <button onClick={signInWithGoogle}>Sign in with Google</button>
        )}
       </div>
     
    </div>
  )
}

export default MailHeader
