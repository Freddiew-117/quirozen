import './App.css'
import { useState } from 'react';

const horarios = [
  { dia: 'Lunes a Viernes', horas: '9 - 13h y 16-20h (citas urgencias de 20 a 21h)' },
  { dia: 'Sábado', horas: '9 - 14h (tardes cerrado, se admiten citas urgencias)' },
  { dia: 'Domingo', horas: 'cerrado (se admiten citas urgencias)' },
];

const masajes = [
  { nombre: 'Masaje descontracturante', descripcion: 'Ideal para tensiones musculares, cuello, espalda, hombros', duracion: '50–60 min', precio: '30–40 €' },
  { nombre: 'Masaje relajante', descripcion: 'Suave, con ritmo lento, para reducir estrés y ansiedad', duracion: '50–60 min', precio: '30–40 €' },
  { nombre: 'Masaje deportivo', descripcion: 'Para preparar o recuperar el músculo antes/después de actividad', duracion: '45–60 min', precio: '35–45 €' },
  { nombre: 'Masaje circulatorio', descripcion: 'Estimula el sistema venoso y linfático (piernas cansadas, etc.)', duracion: '45–60 min', precio: '30–40 €' },
  { nombre: 'Masaje craneofacial', descripcion: 'Cara, cráneo y cuello. Relaja y mejora dolores de cabeza', duracion: '30 min', precio: '20–25 €' },
  { nombre: 'Masaje de espalda', descripcion: 'Masaje focalizado en zona dorsal, lumbar y cervical', duracion: '30–40 min', precio: '25–30 €' },
  { nombre: 'Masaje cervical', descripcion: 'Masaje específico para cervicales y trapecios', duracion: '20–30 min', precio: '20–25 €' },
  { nombre: 'Masaje podal (pies)', descripcion: 'Relajante o con técnica reflexológica básica', duracion: '30 min', precio: '20–25 €' },
  { nombre: 'Masaje abdominal', descripcion: 'Suave, mejora la digestión y libera tensión visceral', duracion: '20–30 min', precio: '20–25 €' },
  { nombre: 'Masaje combinado', descripcion: 'Por ejemplo: espalda + piernas o espalda + facial', duracion: '60 min', precio: '35–45 €' },
  { nombre: 'Masaje con aromaterapia', descripcion: 'Masaje relajante con aceites esenciales personalizados', duracion: '60 min', precio: '35–45 €' },
  { nombre: 'Masaje con piedras calientes', descripcion: 'Masaje relajante profundo con piedras volcánicas templadas', duracion: '60 min', precio: '40–50 €' },
  { nombre: 'Masaje anticelulítico / reafirmante', descripcion: 'Técnicas de amasamiento y drenaje para moldear zonas específicas', duracion: '30–40 min', precio: '25–35 €' },
];

const bonos = [
  {
    titulo: 'Bono 5 sesiones',
    descripcion: 'Ideal para quienes vienen una vez por semana o cada 15 días.',
    detalles: '5 masajes de 50–60 min',
    precio: '150 € (30 €/sesión en lugar de 35–40 €)',
    regalo: 'Pequeña sesión de 10 min extra en la última sesión (cuello o facial)'
  },
  {
    titulo: 'Bono 10 sesiones',
    descripcion: 'Para clientes constantes o con tratamiento prolongado (espalda, cervicales, estrés).',
    detalles: '10 masajes de 50–60 min',
    precio: '280 € (28 €/sesión)',
    regalo: '1 masaje facial o podal de 20 min extra'
  },
  {
    titulo: 'Programa “Mensual Relax”',
    descripcion: 'Cuota mensual para bienestar continuo.',
    detalles: '1 sesión semanal (4 al mes) de 60 min',
    precio: '110 €/mes',
    regalo: 'Horario flexible o fijo. No acumulable si se falta sin avisar.'
  },
  {
    titulo: 'Tarjeta de fidelidad “Tu 6º masaje es GRATIS”',
    descripcion: 'Sellas 5 sesiones → la 6ª es gratis (o al 50%). Válido durante 3 meses.',
    detalles: 'Premia a quien te recomienda: trae a un amigo → ambos tenéis 5 € de descuento en la siguiente sesión.',
    precio: 'Promoción por tiempo limitado o permanente',
    regalo: ''
  },
  {
    titulo: 'Bono "Familia Relajada"',
    descripcion: 'Pensado para familias que desean cuidarse sin gastar de más.',
    detalles: '5 sesiones de 50 min para compartir entre miembros de la familia',
    precio: '140 € (ahorras 35 € si el precio normal es 35 €/sesión)',
    regalo: 'Válido durante 2 meses'
  },
  {
    titulo: 'Bono “Peque + Mayor”',
    descripcion: 'Para que el niño y el adulto se beneficien del bienestar en conjunto.',
    detalles: '1 sesión de mindfulness para niño + 1 masaje de 50 min para adulto',
    precio: '45 € (en lugar de 60 €)',
    regalo: 'Ideal para sábado por la mañana o tarde'
  },
  {
    titulo: 'Bono "Dúo Relax"',
    descripcion: 'Para parejas que quieren compartir bienestar.',
    detalles: '2 masajes relajantes de 60 min (uno cada uno, en el mismo día o separados)',
    precio: '65 € (en lugar de 70 €)',
    regalo: 'Puedes ofrecer ambiente con velas y música suave'
  },
  {
    titulo: 'Bono "Pareja Constante"',
    descripcion: 'Para parejas que quieren cuidarse mes a mes.',
    detalles: '4 sesiones al mes (2 por persona)',
    precio: '120 € (en lugar de 140 €)',
    regalo: ''
  },
  {
    titulo: 'Bono "Mimos para mí"',
    descripcion: 'Porque cuidar a otros también merece autocuidado.',
    detalles: '4 sesiones de 40 min (relajante o espalda)',
    precio: '100 € (en lugar de 120 €)',
    regalo: 'Horario especial: solo mañanas entre semana (ej. 10:00 – 13:00)'
  },
  {
    titulo: 'Bono "Espalda Feliz"',
    descripcion: 'Para aliviar tensiones por carga física o emocional.',
    detalles: '3 masajes de espalda + 1 masaje facial de regalo',
    precio: '85 € (valor real: 110 €)',
    regalo: ''
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="main-container">
      <header className="fixed-header">
        <div className="header-content">
          <img src="/logo-removebg-preview.png" alt="Logo Quirozen" className="main-logo left" />
          <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
            <ul>
              <li><a href="#info" onClick={() => setMenuOpen(false)}>Información principal</a></li>
              <li><a href="#reservas" onClick={() => setMenuOpen(false)}>Reservas</a></li>
              <li><a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre nosotros</a></li>
              <li><a href="#promos" onClick={() => setMenuOpen(false)}>Promociones/Bonos</a></li>
            </ul>
          </nav>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>
      <main>
        <section id="info" className="section">
          <h2>Información principal</h2>
          <h3>Horarios</h3>
          <ul className="horarios-list">
            {horarios.map((h, i) => (
              <li key={i}><strong>{h.dia}:</strong> {h.horas}</li>
            ))}
          </ul>
          <h3>Tipos de masajes</h3>
          <div className="masajes-list">
            {masajes.map((m, i) => (
              <div className="masaje-card" key={i}>
                <h4>{m.nombre}</h4>
                <p>{m.descripcion}</p>
                <p><strong>Duración:</strong> {m.duracion}</p>
                <p><strong>Precio:</strong> {m.precio}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="reservas" className="section">
          <h2>Reservas</h2>
          <p>Próximamente: formulario de reservas online.</p>
        </section>
        <section id="sobre" className="section">
          <h2>Sobre nosotros</h2>
          <p>Próximamente.</p>
        </section>
        <section id="promos" className="section">
          <h2>Promociones y Bonos</h2>
          <div className="bonos-list">
            {bonos.map((b, i) => (
              <div className="bono-card" key={i}>
                <h4>{b.titulo}</h4>
                <p>{b.descripcion}</p>
                <p><strong>{b.detalles}</strong></p>
                <p><strong>Precio:</strong> {b.precio}</p>
                {b.regalo && <p><em>{b.regalo}</em></p>}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
