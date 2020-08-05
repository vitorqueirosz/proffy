import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';


import './styles.css';

const TeacherItem: React.FC = () => {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars0.githubusercontent.com/u/59986415?s=460&u=f4baf59ee6ec2cb82eb6381b5ebe9c90afc81f84&v=4" 
                        alt="Vitor Queiroz"/>
                        <div>
                            <strong>Vitor Queiroz</strong>
                            <span>Ingles</span>
                        </div>
                    </header>

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                        <br />
                        Voluptatum autem ipsa ipsum dicta aliquid ab possimus labore illo! Temporibus est aperiam aliquid iure illum, amet maiores unde expedita animi blanditiis.
                    </p>

                    <footer>
                        <p>
                            Preco/hora
                            <strong>R$ 200, 00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp Icon"/>
                            Entrar em contato
                        </button>
                    </footer>

                </article>
    )
}

export default TeacherItem;