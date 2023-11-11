import React, { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';

function Prices() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  useEffect(() => {
    const card = document.getElementById("card");

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const angle = Math.atan2(-x, y);
      card.style.setProperty("--rotation", angle + "rad");
    });
  }, []);

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
  }

  return (
    <section id='prices'>
      <div className='title-section'>
        <h2>Investeer in je Gezondheid en Welzijn</h2>
        <h1 className='title-prices'>Betaalbare Prijzen voor Jouw Fitness Succes</h1>
      </div>
      <div className='prijzen-section'>
        <div className='prijzen-card'>
          <div className='prijzen-card-title'>
            <h1>📈</h1>
            <h4>Digital Fitness Pakket</h4>
          </div>
          <div className='prijzen-card-price'>
            <h2>€10</h2>
            <h5>/per uur</h5>
          </div>
          <div className='prijzen-card-included'>
            <p>Inbegrepen:</p>
            <ul className="styled-list">
              <li><FaCheck /> Wekelijkse Zoom-sessie van 1 uur.</li>
              <li><FaCheck /> Toegang tot een online portal met aanvullende bronnen en opdrachten.</li>
              <li><FaCheck /> Beperkte e-mailondersteuning tussen de sessies door (maximaal 2 e-mails per week).</li>
              <li><FaCheck /> Facturering op uurbasis met flexibele planning.</li>
            </ul>
          </div>
          <div className='prijzen-card-btn'>
            <button onClick={() => handlePlanSelect('Digital')}> Inschrijven</button>
          </div>
        </div>
        <div className='prijzen-card' id='card'>
          <div className='prijzen-card-title'>
            <h1>💪</h1>
            <h4>Optimal Growth Pakket</h4>
          </div>
          <div className='prijzen-card-price'>
            <h2><b></b>€25</h2>
            <h5>/per uur</h5>
          </div>
          <div className='prijzen-card-included'>
            <p>Inbegrepen:</p>
            <ul className="styled-list">
              <li><FaCheck /> Wekelijkse persoonlijke begeleidingssessies met een flexibele duur van maximaal 2 uur.</li>
              <li><FaCheck /> Gepersonaliseerd Trainingsplan</li>
              <li><FaCheck /> Onbeperkte e-mailondersteuning met gegarandeerde reactie binnen 24 uur.</li>
              <li><FaCheck /> Individueel afgestemd trainingsprogramma en voortgangsrapportage.</li>
              <li><FaCheck /> Facturering op uurbasis met flexibele planning.</li>
            </ul>
          </div>
          <div className='prijzen-card-btn'>
            <button className='important-btn' onClick={() => handlePlanSelect('Growth')}> Inschrijven</button>
          </div>
        </div>
        <div className='prijzen-card'>
          <div className='prijzen-card-title'>
            <h1>🚀</h1>
            <h4>Ultimate Success Pakket</h4>
          </div>
          <div className='prijzen-card-price'>
            <h2>€35</h2>
            <h5>/per uur</h5>
          </div>
          <div className='prijzen-card-included'>
            <p>Inbegrepen:</p>
            <ul className="styled-list">
              <li><FaCheck /> Twee wekelijkse persoonlijke begeleidingssessies van 1,5 uur per sessie.</li>
              <li><FaCheck /> Volledig Gepersonaliseerd Trainingsplan met Continue Optimalisatie.</li>
              <li><FaCheck /> Maandelijkse voortgangsrapporten en aanpassing van doelen.</li>
              <li><FaCheck /> Facturering op kwartaalbasis met extra voordelen zoals gratis proteine shakes.</li>
            </ul>
          </div>
          <div className='prijzen-card-btn'>
            <button onClick={() => handlePlanSelect('Success')}> Inschrijven</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Prices;
