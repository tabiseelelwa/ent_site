import React from 'react'
import '../css/login.scss'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='log'>
      <form>
        <h3>Connexion</h3>
        <input type="text" placeholder='esubetabiseelelwa@gmail.com'/>
        <input type="text" placeholder='Entrez votre mot de passe'/>
        <button>Connexion</button>

        <p>Pas de compte ? <Link to="/enregUser">S'inscrire</Link></p>
      </form>

    </div>
  )
}

export default Login