import React, { useCallback } from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';


import './styles.css';
import api from '../../services/api';

export interface Teacher {
    id: number;
    name: string;
    avatar: string;
    bio: string;
    cost: number;
    whatsapp: string;
    subject: string;
    
}
interface TeacherItemProps {
    teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher  }) => {

    const createNewConnection = useCallback(() => {
        
        api.post('/connections', {
            user_id: teacher.id
        })
    }, [teacher.id]);

    return (
        <article className="teacher-item">
                    <header>
                        <img src={teacher.avatar} 
                        alt={teacher.name}/>
                        <div>
                            <strong>{teacher.name}</strong>
                            <span>{teacher.subject}</span>
                        </div>
                    </header>

                        <p>{teacher.bio}</p>

                    <footer>
                        <p>
                            Preco/hora
                            <strong>R$ {teacher.cost}</strong>
                        </p>
                        <a target="_blank" href={`https://wa.me/${teacher.whatsapp}`} type="button" onClick={createNewConnection}>
                            <img src={whatsappIcon} alt="Whatsapp Icon"/>
                            Entrar em contato
                        </a>
                    </footer>

                </article>
    )
}

export default TeacherItem;