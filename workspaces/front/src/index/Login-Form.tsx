import '../App.css'
import { Form } from './State-Form';

function LoginForm() {

  const [Email, Password] = [Form(), Form()];

  return (
      <form>
        <Email.getForm name="email" type="email" label="E-mail" />
        <Password.getForm name="password" type="password" label="Senha" />
        <button type="button" onClick={()=>console.log(Email.getState(), Password.getState())} >Login</button>
      </form>
  );  
}

export default LoginForm;
