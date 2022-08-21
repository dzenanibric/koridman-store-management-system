import React from 'react';
import "./index.scss";

import Button from "../Button";

export default function Login(props) {

    const data = {
        username: 'rootAdmin',
        password: 'root'
    }

    const usernameRef = React.useRef(null);
    const passwordRef = React.useRef(null);
    const [msg, setMsg] = React.useState('');
    const checkLogin = () => {
        if(usernameRef.current.value === data.username && passwordRef.current.value === data.password){
            document.querySelector('.route__mainRoute__body__app').style.display = 'block';
            document.querySelector('.component__login').style.display = 'none';
            document.getElementById('logged-user').innerText = data.username;
        }
        else{
            setMsg('Netačni podaci, pokušaj ponovo!');
        }
    }

  return (
    <div style={{display: props.display}} className='component__login'>
        <h3>Molimo prijavite se</h3>
        <input ref={usernameRef} type='text' placeholder='Korisničko ime' />
        <input ref={passwordRef} type='password' placeholder='Šifra' />
        <Button background='#cd7342' color='white' value='Prijava' width='100%' height='30px' onClick={()=>checkLogin()} />
        <div id='msg'>{msg}</div>
    </div>
  )
}
