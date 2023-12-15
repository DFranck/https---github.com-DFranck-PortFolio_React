import React from "react";
import "./About.scss";
import { Hero } from "../../common/components/Hero/Hero";
import {
  codePurple as cP,
  codeYellow as cY,
  codeRed as cR,
  codeBlue as cB,
  codeCyan as cC,
  codeGreen as cG,
  codeOrange as cO,
} from "../../features/codeColorisation/codeColorisation";

export const About = () => {
  return (
    <main className="about">
      <Hero />
      <section>
        <pre>
          <code className="ide">
            {cP("const")} {cY("profil")} = {"{"}
            <br />
            {cR("nom")}: {cG('"Dufournet"')},
            <br />
            {cR("prenom")}: {cG('"Franck"')},
            <br />
            {cR("titre")}: {cG('"Développeur REACT.js"')},
            <br />
            {cR("description")}:{" "}
            {cG(
              '"Passionné par la création de solutions numériques innovantes, avec une expertise approfondie dans le développement web et une solide compréhension des méthodes agiles."'
            )}
            ,
            <br />
            {cR("competences")}: [
            <br />
            {cG('"React.js"')}, {cG('"Redux.js"')}, {cG('"RTK"')},{" "}
            {cG('"Hooks React"')}, {cG('"JavaScript"')}, {cG('"Tests"')},{" "}
            {cG('"HTML5"')}, {cG('"CSS3/Sass"')}, {cG('"TypeScGipt"')},{" "}
            {cG('"API REST"')}, {cG('"CRUD"')}, {cG('"Algorithmes"')},{" "}
            {cG('"Méthodes agiles"')}
            <br />
            ],
            <br />
            {cR("contact")}: {"{"}
            <br />
            {cR("linkedIn")}:{" "}
            {cG('"https://www.linkedin.com/in/franck-dufournet-239446151/"')},
            <br />
            {cR("github")}: {cG('"https://github.com/FranckDufournet"')}
            <br />
            {"}"}
            <br />
            {"}"};
            <br />
            <br />
            {cP("const")} {cY("formation")} = {"{"}
            <br />
            {cR("organisme")}: {cG('"OpenClassrooms"')},
            <br />
            {cR("nom")}: {cG(`"Développeur d'application - JavaScript React"`)},
            <br />
            {cR("durée")}: {cG(`"12 mois à temps plein"`)}
            <br />
            {cR("certification")}: {cG(`"Diplôme de niveau 6 (bac +3/4)"`)}
            <br />
            {cR("projets")}:{" ["}
            <br />
            {cG('"Prenez en main votre formation front-end"')},{" "}
            {cG('"Transformez une maquette en site web avec HTML & CSS"')},{" "}
            {cG('"Dynamisez une page web avec des animations CSS"')},
            {cG('"Créez une landing page avec Javascript"')},{" "}
            {cG('"Testez vos compétences : les langages du Web"')},{" "}
            {cG(
              '"Créez un site accessible pour une plateforme de photographes"'
            )}
            , {cG('"Développez un algorithme de recherche en JavaScript"')},{" "}
            {cG('"Testez vos compétences : les algorithmes en JavaScript"')},{" "}
            {cG('"Débuggez et testez un SaaS RH"')},{" "}
            {cG('"Définissez les besoins pour une app de soutien scolaire"')},{" "}
            {cG('"Développez une application Web avec React et React Router"')},
            {cG(`"Développez un tableau de bord d'analytics avec React"`)},{" "}
            {cG(
              '"Utilisez une API pour un compte utilisateur bancaire avec React"'
            )}
            {cG('"Faites passer une librairie jQuery vers React"')}
            ,
            <br />
            {"]"}
            <br />
            {"}"};
            <br />
            <br />
            {cC("console")}.{cG("log")}
            {cP("(")}
            {cP("function")} resumeParcours({cP("(")}
            {cR("nom")}:{cG('"Dufournet"')}, {cR("prenom")}:{cG('"Franck"')},{" "}
            {cR("organisme")}:{cG('"OpenClassrooms"')},{cP(")")})
            <br />
          </code>
          <br />
          <code className="console">
            `Bonjour, je suis Franck Dufournet, un Développeur Web Freelance.
            Mon parcours dans le développement web est marqué par une série de
            formations et certifications approfondies, notamment avec
            OpenClassrooms. J'ai acquis des compétences clés en React.js,
            JavaScript, HTML5, CSS3, et TypeScript, ainsi qu'une expertise en
            Redux.js, API REST, et Tests divers. Parmi mes certifications, je
            suis particulièrement fier de :
            <br />
            <br />- 'Gérez votre application React avec Redux et Redux Toolkit',
            où j'ai approfondi mes connaissances en RTK et Redux.js.
            <br />- 'Adoptez les API REST pour vos projets web', qui a renforcé
            mes compétences en API REST, Tests d’API, et CRUD.
            <br />- 'Créez une application React complète', où j'ai développé
            mes compétences en Hooks React, JavaScript, et React.js.
            <br />
            <br />
            J'ai également complété des projets significatifs tels que :
            <br />- 'Dynamisez une page web avec des animations CSS'
            <br />
            <br />
            Ces expériences m'ont permis de développer une approche holistique
            du développement web, en combinant des compétences techniques avec
            une compréhension approfondie de la gestion de projet et de la
            conception UI/UX. Je suis constamment à la recherche de nouvelles
            opportunités pour appliquer mes compétences et apprendre de
            nouvelles technologies.`
          </code>
        </pre>
      </section>
    </main>
  );
};
