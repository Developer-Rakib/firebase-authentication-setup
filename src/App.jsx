import './App.css'
import app from './firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';


const auth = getAuth(app);

function App() {
  let [userInfo, setUserInfo] = useState({})
  const provider = new GoogleAuthProvider();
  const hndleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        setUserInfo(result.user);
        console.log(result.user);
      })
      .catch(error => {
        console.log(error);
      })
  }
  const hndleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUserInfo({})
      })
  }


  return (
    <div className="App">
      {
        Object.keys(userInfo).length > 0 ? <button onClick={hndleSignOut}>Sign Out</button> : <button onClick={hndleSignIn}>Sign In</button>
      }

      {
        Object.keys(userInfo).length == 0 || <>

          <h2>{userInfo?.displayName}</h2>
          <p>{userInfo?.email}</p>
          <img style={{ height: '100px', width: "100px", borderRadius: '50%', border: '1px solid lightGray' }} src={userInfo?.photoURL} alt="" />
        </>
      }
    </div>
  )
}

export default App
