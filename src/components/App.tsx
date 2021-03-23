
/* 
Komponent A (hovedkomponent)
Tekst fra tekstboksen i komponent B skal vises i tekstboksen 
i dette komponentet nå brukeren trykker på "OK" i komponent C
*/ 

const KomponentA = () =>
  <section>
    <p>Komponent A (hovedkomponent)</p>
    <input type="text" placeholder="Tekstboks" />
  </section>
  ;

/* 
Komponent B
1. Tekst som tastes inn i tekstboksen i dette komponentet skal 
   vises i tekstboksen i komponent A når brukeren trykker på "OK" i komponent C
2. Hvis brukeren trykker på div-elementet skal den skifte farge.
  - Fargen som visen skal være internal state for komponent B
  - Fargen endres ved at klassen som settes på div’en endres avhengig av state
*/ 

const KomponentB = () =>
  <section>
    <p>Komponent B</p>
    <input type="text" placeholder="Tekstboks" />
    <div>DIV</div>
  </section>
  ;

/* 
Komponent C
1. Når du trykker «OK» så skal teksten fra tekstboksen i komponent B 
   vises i tekstboksen i komponent A
2. Når du trykker «Avbryt» så skal teksten i tekstboksen i komponent A 
   fjernes
*/ 
const KomponentC = () =>
  <section>
    <p>Komponent C</p>
    <button >OK</button>
    <button >Avbryt</button>
  </section>
  ;

const App = () =>
  <div className="App">
    <KomponentA />
    <KomponentB />
    <KomponentC />
  </div>
  ;

export default App;
