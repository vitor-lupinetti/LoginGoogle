import logo from './logo.svg';
import './App.css';
import { GoogleLogin } from 'react-google-login';
import { useState } from 'react';
function App() {
  const [token, setToken] = useState('');
  const handleLogin = async googleData => {
    console.log(googleData.accessToken)
    setToken(googleData.accessToken)
    // const res = await fetch("http://localhost:5000/users/loginGoogle", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     token: googleData.tokenId
    //   }),
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // })
    // const data = await res.json()
    // console.log(data)
    // store returned user somehow
  }
  return (
    <div className="App">
      <GoogleLogin
        clientId={process.env.REACT_APP_CLIENT_ID}
        buttonText="Log in with Google"
        onSuccess={handleLogin}
        onFailure={handleLogin}
        cookiePolicy={'single_host_origin'}
      />

      <p>Seu acess token é: {token}</p>
    </div>
  );
}

export default App;
