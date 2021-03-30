import React from 'react';
import Layout from 'components/Layout'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

export default function App() {
  return (
    <Layout>
      <div className="trainImg">
        <div className="login">
          <h1>Ingrese sus datos</h1>
          <TextField id="outlined-basic" label="C.U.I.L" variant="outlined" />
          <TextField id="outlined-basic" label="Contraseña" variant="outlined" />
          <Link to="/home">
            <Button variant="contained" className="loginBtn">
              Login
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
