import React, { useState } from 'react'
import "./Login.css"
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';
import {login} from '../../features/userSlice';
import {createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword} from 'firebase/auth';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [pic, setPic] = useState("");
  const dispatch = useDispatch();


  const loginToApp = async(e) =>{
    e.preventDefault();

    await signInWithEmailAndPassword(auth, email, password)
    .then((userAuth)=>{
      dispatch(login({
        email:userAuth.user.email,
        uid:userAuth.user.uid,
        displayName:userAuth.user.displayName,
        profileUrl:userAuth.user.photoURL,
      }))
    })
    .catch(error => alert(error));
  };

  const register = async() =>{
    if(!name){
      return alert("Please enter full name");
    }
    await createUserWithEmailAndPassword(auth, email, password)
    .then((userAuth)=>{
      updateProfile(userAuth.user,{
        displayName: name, 
        photoUrl: pic
      })
      .then(()=>{
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
          photoUrl: pic,
        }))
      })
    })
    .catch(error=> alert(error));
  };

  return (
    <div className='login'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png" alt="" />
        <form>
        <input type="text" name="" id="" placeholder='Full Name' value={name} onChange={(e)=>setName(e.target.value)} />
        <input type="text" name="" id="" placeholder='Profile pic URL' value={pic} onChange={(e)=>setPic(e.target.value)}/>
        <input type="email" name="" id="" placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <input type="password" name="" id="" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button type="submit" onClick={loginToApp}>Sign In</button>
        </form>
        <p>Not a member?
        <span className='login__register' onClick={register}>Register Now</span>
        </p>
    </div>
  )
}

export default Login;