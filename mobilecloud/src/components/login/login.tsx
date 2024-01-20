import classNames from 'classnames';
import styles from './login.module.scss';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

// index.tsx or index.js
import 'semantic-ui-css/semantic.min.css';
import '../template/button.css'


import React, { useState } from 'react';

import TextField from '@mui/material/TextField';

export interface LoginProps {
  className?: string;
}

export const Login = ({ className }: LoginProps) => {


  const [showPassword, setShowPassword] = useState(false);

  //----------------------------------------------------------------
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Envoyer la requête POST à votre URL d'authentification
      const response = await axios.post('votre-url-d-authentification', {
        email: email,
        password: password,
      });

      // Stocker les données de réponse dans le stockage local
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      // Rediriger ou effectuer d'autres actions nécessaires après l'authentification réussie
    } catch (error) {
      // Gérer les erreurs d'authentification
      console.error('Erreur d\'authentification :', error);
    }
  };


  return (
    <>

      <div className={classNames(styles.root, className)}>
        <div className="bodyyy">

          <React.Fragment>
            <Typography variant="h3" gutterBottom>
              Sign In

            </Typography>
            <Typography variant="body2" align="center" >
              {'Pas encore de compte ? '}
              <a href='/inscription'>Sign Up here</a>
            </Typography>
          </React.Fragment>

          <Grid container spacing={2} rowSpacing={0.1}>

            <Grid item xs={12} md={12}>
              <TextField sx={{ m: 1, minWidth: 300 }}
                required
                id="outlined-required"
                label="Email address"
                type='email'
                onIonChange={(e) => setEmail(e.detail.value!)}
              />
            </Grid>


            <Grid item xs={12} md={12}>
              <TextField sx={{ m: 1, minWidth: 300 }}
                required
                id="outlined-required"
                label="Mot de passe"
                type='password'
                onIonChange={(e) => setPassword(e.detail.value!)}
              />
            </Grid>


            <Grid item xs={12} md={12}>
              <a href="/"><button type="submit" className="bn29">Se connecter</button></a>
            </Grid>

          </Grid>

        </div>
      </div >
    </>
  );

};

