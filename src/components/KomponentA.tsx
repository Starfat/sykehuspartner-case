import { useState } from 'react';
import { Dispatch, SetStateAction } from "react";

/* 
Komponent A (hovedkomponent)
Tekst fra tekstboksen i komponent B skal vises i tekstboksen 
i dette komponentet nå brukeren trykker på "OK" i komponent C
*/

type KomponentAProps = {
  tekst?: string// holder navnet på det ene csselemenet for div

};
export const KomponentA = ({ tekst }: KomponentAProps) => {

  tekst = 'Livet Leker';
  const [tekstboksVerdi, setTekstboksVerdi] = useState(tekst);
  setTekstboksVerdi('test');

  return (
    <div className="App">
      <section className="komponentA">
        <p>Komponent A (hovedkomponent)</p>
        <input
          id="tekstboksA"
          type="text"
          placeholder="Tekstboks"
          value={tekstboksVerdi}
        />
      </section>
      <KomponentB tekstboksVerdi={tekstboksVerdi} />
      <KomponentC setTekstboksVerdi={setTekstboksVerdi} />
    </div>
  )
}

/* 
Komponent B
1. Tekst som tastes inn i tekstboksen i dette komponentet skal 
   vises i tekstboksen i komponent A når brukeren trykker på "OK" i komponent C
2. Hvis brukeren trykker på div-elementet skal den skifte farge.
  - Fargen som visen skal være internal state for komponent B
  - Fargen endres ved at klassen som settes på div’en endres avhengig av state
*/

type KomponentBProps = {
  cssElement1?: string// holder navnet på det ene csselemenet for div
  cssElement2?: string // holder navnet på det ene csselemenet for div
  tekstboksVerdi?: string // holder navnet på det ene csselemenet for div
};

const KomponentB = ({ cssElement1, cssElement2, tekstboksVerdi }: KomponentBProps) => {

  cssElement1 = 'divBoks';
  cssElement2 = 'divBoksEndret';

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
        value={tekstboksVerdi}
      />
      <div
        className={divBakgrunn}
        onClick={endreBakgrunn}
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
  setTekstboksVerdi?: Dispatch<SetStateAction<string>> // holder navnet på det ene csselemenet for div
  tekst?: string
};

const KomponentC = ({ setTekstboksVerdi, tekst }: KomponentCProps) => {

  return (
    <section className="komponentC">
      <p>Komponent C</p>
      <button
        id="OKBtn"
      >
        Avbryt
      </button>
      <button
        id="avbrytBtn"
      >
        Avbryt
      </button>
    </section>
  )
}

export default KomponentA;
