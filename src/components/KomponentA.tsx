import React, { useState } from 'react';
import KomponentB from './KomponentB'
import KomponentC from './KomponentC'


/* 
Komponent A (hovedkomponent)
Tekst fra tekstboksen i komponent B skal vises i tekstboksen 
i dette komponentet når brukeren trykker på "OK" i komponent C
*/

const KomponentA = () => {

  const [tekstboksA, setTekstboksA] = useState('');
  const [tekstboksB, setTekstboksB] = useState('');

  return (
    <div className="App">
      <section className="komponentA">
        <p>Komponent A (hovedkomponent)</p>
        <input
          id="tekstboksA"
          type="text"
          placeholder="Tekstboks"
          defaultValue={tekstboksA}
        />
      </section>
      <KomponentB
        tekstboksB={tekstboksB} // gjør state tilgjengelig i KomponentB
        setTekstboksB={setTekstboksB} // gjør state tilgjengelig i KomponentB
      />
      <KomponentC
        tekstboksB={tekstboksB} // gjør state tilgjengelig i KomponentC
        setTekstboksA={setTekstboksA} // gjør state tilgjengelig i KomponentC
      />
    </div>
  )
}

export default KomponentA;
