import React from 'react'
import './CSS/Login.css'
import Button from '@material-ui/core/Button'
import { auth, provider } from '../Firebase'
import { actionTypes } from './Reducer'
import { useStateValue } from './StateProvider'

function Login() {
  const [state, dispatch] = useStateValue()

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  return (
    <div className='login'>
      <div className='login_logo'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png'
          alt=''
        />
        <img
          src='https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg'
          alt=''
        />
      </div>
      <Button
        variant='contained'
        color='primary'
        type='submit'
        onClick={signIn}>
        Sign In
      </Button>
    </div>
  )
}

export default Login
