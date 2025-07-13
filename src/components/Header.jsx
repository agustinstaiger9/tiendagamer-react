import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/catalogo">Catálogo</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>
        <NavLink to="/admin">Admin</NavLink>
      </nav>
    </header>
  );
};

export default Header;
