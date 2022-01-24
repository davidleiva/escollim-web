import * as React from "react";
import logo from "../images/escollim.svg";
import bbvaEscollim from "../images/bbva-escollim.png";
import alquilerEscollim from "../images/se-alquila.png"
import policiaEscollim from "../images/policia-local.png"
import NavBar from "../components/NavBar";
import MyHelmet from "../components/MyHelmet";


// markup
const IndexPage = () => {
  return (
    <>
    <MyHelmet title={'Inicio'} />
    <NavBar />
    <main>
      <section className="Section">
        <div className="container">
          <div className="row">
            <h3>Noticias</h3>
            <article>
              <h2>El señor alcalde caga de pie y todos en su grupo lo celebran</h2>
              <p>Proident nostrud in aliqua ex eiusmod eiusmod officia excepteur.</p>
              <img src='http://placeskull.com/600' alt=''/>
            </article>
          </div>
        </div>
      </section>

    </main>
    </>
  );
};

export default IndexPage;
