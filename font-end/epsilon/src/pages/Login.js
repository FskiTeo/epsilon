import React from 'react';
import TitleContact from '../components/TitleLogin';
import '../css/Login.css';
import { motion } from "framer-motion"


const Login = () => {
  return (
  <div>
    <TitleContact />
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}>
    <div class="container-login">
        <div class="inputs">
            <label>Email</label>
            <input type="email" placeholder="MaBite@me.com" />
            <label>Password</label>
            <input type="password" placeholder="Password" />
            <button className='button' type="submit">Envoyer</button>
        </div>
        </div>
    </motion.div>
    </div>
  );
};

export default Login;
