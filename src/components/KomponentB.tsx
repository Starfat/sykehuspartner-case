import { Dispatch, SetStateAction } from "react";
import React, { useState } from 'react';

/* 
Komponent B
1. Tekst som tastes inn i tekstboksen i dette komponentet skal 
   vises i tekstboksen i komponent A når brukeren trykker på "OK" i KomponentC
2. Hvis brukeren trykker på div-elementet skal den skifte farge.
  - Fargen som visen skal være internal state for KomponentB
  - Fargen endres ved at klassen som settes på div’en endres avhengig av state
*/

export type KomponentBProps = {
    cssElement1?: string// holder navnet på det ene csselemenet for div
    cssElement2?: string // holder navnet på det ene csselemenet for div
    tekstboksB?: string // holder navnet på det ene csselemenet for div
    setTekstboksB: Dispatch<SetStateAction<string>> // UseState fra Komponent A
  };
  
  const KomponentB = ({ cssElement1, cssElement2, tekstboksB, setTekstboksB }: KomponentBProps) => {
  
    cssElement1 = 'divBoks';
    cssElement2 = 'divBoksEndret';
  
    // Sørger for at verdien i tekstboksen alltid er kontrollert av komponentet 
    const onChangeTekstboksB = (e: React.ChangeEvent<HTMLInputElement>) => {
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
          onChange={onChangeTekstboksB}
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

  export default KomponentB;