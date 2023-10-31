import React from 'react'
import photo2 from "../images/photo2.jpg";
import photo3 from "../images/photo3.jpg";

function about() {
  return (
    <section id='about'>
      <div>
        <h2>Meet your coach</h2>
        <h1>Jouw weg naar een gezondere levensstijl</h1>
        <p>Zeg vaarwel tegen ongezonde gewoontes! Met mijn persoonlijke begeleiding in jouw workouts transformeer
          je niet alleen je bewegings- en eetgewoonten, maar ontdek je ook hoe leuk het kan zijn. Samen werken we
          aan een gezondere levensstijl waarin je consistent en gemotiveerd blijft</p>
      </div>
      <div className='personal-article wie'>
        <div>
          <img src={photo2} alt='Bodybuilding'></img>
        </div>
        <div className='wie-text'>
          <h2>Wie ben ik?</h2>
          <p>Na 3 jaar van consistente, natuurlijke training en een diepe passie voor bodybuilding en
            powerlifting, heb ik in korte tijd opmerkelijke vooruitgang geboekt. Ik begrijp de uitdagingen
            en obstakels die nieuwkomers in de fitnesswereld tegenkomen, omdat ik ze zelf heb
            overwonnen. Deze transformatie inspireerde me om mijn carrière in coaching te beginnen. Mijn missie is om te bewijzen dat iedereen, ongeacht hun startpunt, in korte tijd
            indrukwekkende vooruitgang kan boeken. Laten we samen jouw fitnessreis starten en
            samenwerken aan jouw succesverhaal.</p>
        </div>

      </div>
      <div className='personal-article voorjou'>
        <div>
          <h2>Is dit iets voor jou?</h2>
          <p>Dus, ben je op zoek naar het juiste antwoord? Vraag jezelf dan af: heb je ooit
            geworsteld met je gewicht? Misschien heb je altijd al te kampen gehad met
            overtollige kilo's, of misschien worstelde je eerder met ondergewicht. Heb je
            ooit voor de spiegel gestaan en gedroomd van een fysiek waar je echt trots
            op kunt zijn? Ben je iemand die graag aan zijn gezondheid wil werken door
            te sporten, maar weet je gewoon niet waar je moet beginnen? Als een van
            deze vragen op jou van toepassing is, dan zou dit wel eens de plek kunnen
            zijn waar je de antwoorden vindt waar je naar op zoek bent. </p>
        </div>
        <div>
          <img src={photo3} alt='Powerlifting'></img>
        </div>
      </div>

    </section>
  )
}

export default about
