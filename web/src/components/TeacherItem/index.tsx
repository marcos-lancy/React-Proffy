import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.png';
import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/27226257?s=400&u=ad03f4eb594d8788970ca5340fee31af69b34a31&v=4" alt="Marcos Lancy" />
        <div>
          <strong>Marcos Lancy</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
            <br />
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiencias malucas.
          </p>

      <footer>
        <p>
          Preço por hora
              <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  );
}

export default TeacherItem;