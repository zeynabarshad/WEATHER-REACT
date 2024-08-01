import React from 'react'
import {useRef,useState,useEffect} from 'react'
import { faCheck,faTimes,faInfoCircle } from '@fortawesome/free-solid-svg-icons'

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
//iska mtlb pass me lazmi ha 1 lowercase , 1 uppercase , 1 character , 1 num ,yeh 8 sy 24 tk ky dermiyan huskta
const Register = () => {
  const useRef=useRef();
  const errRef=useRef();
  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setpwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [PwdFocus, setPwdFocus] = useState(false);
  
  const [matchPwd, setmatchPwd] = useState('');
  const [validMatch, setValidMatc] = useState(false);
  const [MatchFocus, setMatchFocus] = useState(false);

  const [errMsg, seterrMsg] = useState('');
  const [success, setsuccess] = useState(false);

   useEffect(()=>{
    useRef.current.focus();
   },[])
   useEffect(() => {
    const result=USER_REGEX.test(user);
    console.log(result);    setValidName(result);

   
   }, [user])
   useEffect(() => {
     const result=PWD_REGEX(pwd);
     setValidPwd(result);
     const match = pwd === matchPwd;
     setValidMatc(match);
   
   
   }, [pwd,matchPwd])
   useEffect(() => {
     seterrMsg('');
   
    
   }, [user,pwd,matchPwd])
   
   
  return (
   <section>
    <p ref={errRef} className={errMsg ? "errmsg": "offscreen"} aria-live='assertive'>{errMsg}</p>
   </section>
  )
}

export default Register