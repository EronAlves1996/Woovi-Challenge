import '../App.css'
import { Form } from './State-Form';

function LoginForm() {
  const [email, password] = [Form({type: "email", name:"email", label:"E-mail"}), Form({type: "password", name:"password", label: "Senha"})];

  return (
      <form>
        {[email, password].map(el => el.getForm())}
        <button type="button" onClick={() => console.log(email.getState(), password.getState())} >Login</button>
      </form>
  );  
}

export default LoginForm;
