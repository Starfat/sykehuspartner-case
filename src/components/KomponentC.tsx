import { Dispatch, SetStateAction } from "react";

/* 
Komponent C
1. Når du trykker «OK» så skal teksten fra tekstboksen i komponent B 
   vises i tekstboksen i komponent A
2. Når du trykker «Avbryt» så skal teksten i tekstboksen i komponent A 
   fjernes
*/

export type KomponentCProps = {
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

export default KomponentC;