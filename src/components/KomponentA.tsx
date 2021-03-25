import React, { useState } from 'react';
import { Dispatch, SetStateAction } from "react";

/* 
Komponent A (hovedkomponent)
Tekst fra tekstboksen i komponent B skal vises i tekstboksen 
i dette komponentet nå brukeren trykker på "OK" i komponent C
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

/* 
Komponent B
1. Tekst som tastes inn i tekstboksen i dette komponentet skal 
   vises i tekstboksen i komponent A når brukeren trykker på "OK" i KomponentC
2. Hvis brukeren trykker på div-elementet skal den skifte farge.
  - Fargen som visen skal være internal state for KomponentB
  - Fargen endres ved at klassen som settes på div’en endres avhengig av state
*/

type KomponentBProps = {
  cssElement1?: string// holder navnet på det ene csselemenet for div
  cssElement2?: string // holder navnet på det ene csselemenet for div
  tekstboksB?: string // holder navnet på det ene csselemenet for div
  setTekstboksB: Dispatch<SetStateAction<string>> // UseState fra Komponent A
};

const KomponentB = ({ cssElement1, cssElement2, tekstboksB, setTekstboksB }: KomponentBProps) => {

  cssElement1 = 'divBoks';
  cssElement2 = 'divBoksEndret';

  // Sørger for at verdien i tekstboksen alltid er kontrollert av komponentet 
  const onChangeTekstboksA = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTekstboksB(e.currentTarget.value);
  };

  const [divBakgrunn, setDivBakgrunn] = useState(cssElement1);

  // Endrer divBakgrunn fra cssElemen1 til cssElement2 og omvendt 
  function endreBakgrunn() {
    divBakgrunn === cssElement1 ?
      setDivBakgrunn(cssElement2 as string) :
      setDivBakgrunn(cssElement1 as string)
    return divBakgrunn;
  };

  return (
    <section
      className="komponentB"
    >
      <p>
        Komponent B
      </p>
      <input
        id="tekstboksB"
        type="text"
        placeholder="Tekstboks"
        defaultValue={tekstboksB}
        onChange={onChangeTekstboksA}
      />
      <div
        className={divBakgrunn}
        onClick={endreBakgrunn} // Kaller på funksjon for å endre bakgrunnsfarge ved onClick
      >
        DIV
      </div>
    </section>
  )
}

/* 
Komponent C
1. Når du trykker «OK» så skal teksten fra tekstboksen i komponent B 
   vises i tekstboksen i komponent A
2. Når du trykker «Avbryt» så skal teksten i tekstboksen i komponent A 
   fjernes
*/

type KomponentCProps = {
  tekstboksB: string
  setTekstboksA: Dispatch<SetStateAction<string>>
};

const KomponentC = ({ tekstboksB, setTekstboksA }: KomponentCProps) => {

  // Funksjon for å flytte tekst
  function flyttTekst() {
    setTekstboksA(tekstboksB);
  }

  // Funksjon for fjerne tekst
  function fjernTekst() {
    setTekstboksA('');
  }

  return (
    <section className="komponentC">
      <p>Komponent C</p>
      <button
        id="okBtn"
        onClick={flyttTekst} // Kaller på funksjon for å flytte tekst ved onClick
      >
        OK
      </button>
      <button
        id="avbrytBtn"
        onClick={fjernTekst} // Kaller på funksjon for å fjerne tekst ved onClick
      >
        Avbryt
      </button>
    </section>
  )
}

export default KomponentA;
