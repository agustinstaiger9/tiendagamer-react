import ItemJuego from './ItemJuego';

const ListaJuegos = ({ juegos, borrarJuego, isAdmin }) => {
  return (
    <div className="lista-juegos">
      {juegos.map(juego => (
        <ItemJuego 
          key={juego.id}
          juego={juego}
          borrarJuego={borrarJuego}
          isAdmin={isAdmin}
        />
      ))}
    </div>
  );
};

export default ListaJuegos;
