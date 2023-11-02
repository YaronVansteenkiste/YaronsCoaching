import React, { useEffect } from 'react'

function Prices() {
  useEffect(() => {
    const card = document.getElementById("card");

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const angle = Math.atan2(-x, y);
      card.style.setProperty("--rotation", angle + "rad");
    });

  })
  return (
    <section id='prices'>
      <div className='title-section'>
        <h2>Investeer in je Gezondheid en Welzijn</h2>
        <h1 className='title-prices'>Betaalbare Prijzen voor Jouw Fitness Succes</h1>
      </div>
      <div className='prijzen-section'>
        <div>
          <h1>📈</h1>
          <h4>Digital Fitness Pakket</h4>
          <h2>€15</h2>
          <h5>/per week</h5>
          <p>Inbegrepen:</p>
          <ul className="styled-list">
            <li>Wekelijkse Privé Zoom-sessies voor Persoonlijke Begeleiding</li>
            <li>Op maat gemaakt Trainingsplan</li>
            <li>Voortgangscontrole en Aanmoediging voor Wekelijkse Workouts</li>
            <li>E-mailondersteuning</li>
          </ul>
        </div>
        <div id='card'>
          <h1>💪</h1>
          <h4>Optimal Growth Pakket</h4>
          <h2><b></b>€25</h2>
          <h5>/per week</h5>
          <p>Inbegrepen:</p>
          <ul className="styled-list">
            <li>Wekelijkse Persoonlijke Coaching met Reguliere Ondersteuning</li>
            <li>Gepersonaliseerd Trainingsplan</li>
            <li>Basis Voedingsadvies</li>
            <li>Wekelijkse Voortgangscontrole</li>
            <li>E-mail- en Telefoonsupport</li>
            <li>Accountability om Je Op de Rails te Houden</li>
          </ul>
        </div>
        <div>
          <h1>🚀</h1>
          <h4>Ultimate Success Pakket</h4>
          <h2>€45</h2>
          <h5>/per week</h5>
          <p>Inbegrepen:</p>
          <ul className="styled-list">
            <li>Dagelijkse Persoonlijke Coaching met 24/7 Ondersteuning</li>
            <li>Volledig Gepersonaliseerd Trainingsplan met Continue Optimalisatie</li>
            <li>Diepgaande Voedingsanalyse en Aanbevelingen</li>
            <li>Toegang tot Exclusieve Hulpmiddelen voor Maximale Resultaten</li>
            <li>Prioritaire Klantenondersteuning</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Prices
