import { useState } from 'react';
import '../App.css'
import { Form } from './State-Form';

function LoginForm() {
  const email = Form({type: "email", name:"email"}), password = Form({type: "password", name:"password"})
  return (
      <form>
        <label htmlFor="user-email">E-mail</label>
        {email.getForm()}
        <label htmlFor="user-password">Senha</label>
        {password.getForm()}
        <button type="button" onClick={() => console.log(email.getState(), password.getState())} >Login</button>
      </form>
  );
}

export default LoginForm;
