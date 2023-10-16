import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth  from "../hooks/useAuth"
import { App } from "../pages/App";             ///pagina home
import Signin from "../pages/Signin";           ///pagina secundaria de login
import Signup from "../pages/Signup";           ///pagina de Cadastro secundaria
import Login from "../pages/Login";             ///pagina de login primaria
import Signuptwo  from "../pages/Signuptwo"        ///pagina de Cadastro primaria

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Login />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/home" element={<Private Item={App} />} />
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup2" element={<Signuptwo />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
