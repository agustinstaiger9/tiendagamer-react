import juegos from '../data/juegos';
import ListaJuegos from '../components/ListaJuegos';

const Inicio = () => {
  const destacados = juegos.filter(juego => juego.destacado);

  return (
    <div className="inicio-container">
      <h1>Juegos Destacados</h1>
      <ListaJuegos juegos={destacados} />
    </div>
  );
};

export default Inicio;
