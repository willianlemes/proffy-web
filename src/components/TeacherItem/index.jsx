import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars2.githubusercontent.com/u/10226056?s=460&u=003869d6548be8be62809cc6eb641a3568b7f178&v=4"
          alt="Willian Lemes"
        />
        <div>
          <strong>Willian Lemes</strong>
          <span>Desenvolvimento Web</span>
        </div>
      </header>
      <p>
        Entusiasta das melhores tecnologias de programação.
        <br /> <br />
        Apaixonado por programação e solução de problemas.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 150,00</strong>
        </p>
        <button>
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
