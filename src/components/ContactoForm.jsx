import { useState } from 'react';

const ContactoForm = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [tipoConsulta, setTipoConsulta] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre || !email || !tipoConsulta || !mensaje) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    const nuevaConsulta = {
      id: crypto.randomUUID(),
      nombre,
      email,
      tipoConsulta,
      mensaje,
      fecha: new Date().toLocaleString(),
    };

    const consultasGuardadas = JSON.parse(localStorage.getItem('consultas')) || [];
    consultasGuardadas.push(nuevaConsulta);
    localStorage.setItem('consultas', JSON.stringify(consultasGuardadas));

    alert('Mensaje enviado con éxito.');

    setNombre('');
    setEmail('');
    setTipoConsulta('');
    setMensaje('');
  };

  return (
    <form onSubmit={handleSubmit} className="contacto-form">
      <h2>Formulario de Contacto</h2>

      <label>
        Nombre:
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Tu nombre"
          required
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tuemail@mail.com"
          required
        />
      </label>

      <label>
        Tipo de consulta:
        <select
          value={tipoConsulta}
          onChange={(e) => setTipoConsulta(e.target.value)}
          required
        >
          <option value="">-- Selecciona una opción --</option>
          <option value="Juegos">Juegos</option>
          <option value="Reparaciones">Reparaciones</option>
          <option value="Presupuestos">Presupuestos</option>
        </select>
      </label>

      <label>
        Mensaje:
        <textarea
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)} 
          placeholder="Escribe tu consulta aquí..."
          required
        />
      </label>

      <button type="submit" className="btn-enviar">Enviar</button>
    </form>
  );
};

export default ContactoForm;
