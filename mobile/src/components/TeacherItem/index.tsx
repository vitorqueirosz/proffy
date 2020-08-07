import React, { useCallback } from 'react';
import { Linking } from 'react-native';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whastsAppIcon from '../../assets/images/icons/whatsapp.png';

import {
    Container,
    Profile,
    Image,
    ProfileInfo,
    NameText,
    SubjecText,
    BioText,
    Footer,
    PriceText,
    PriceValueText,
    ButtonsContainer,
    FavoriteButton,
    FavoritedButton,
    FavoriteImage,
    FavoritedImage,
    ContactButton,
    ContactButtonText,
    ContactButtonImage } from './styles';

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

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {

    const handleLinkinToWhatsapp = useCallback(() => {
        Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
    }, []);

    return (
        <Container>
            <Profile>
                <Image source={{ uri: teacher.avatar }}/>


                <ProfileInfo>
                    <NameText>{teacher.name}</NameText>
                    <SubjecText>{teacher.subject}</SubjecText>
                </ProfileInfo>
            </Profile>

            <BioText>{teacher.bio}</BioText>

            <Footer>
                <PriceText>
                    Preco/hora {'   '}

                    <PriceValueText>R$ {teacher.cost}</PriceValueText>
                </PriceText>

                <ButtonsContainer>
                    {/* <FavoriteButton>
                        <FavoriteImage source={heartOutlineIcon}/>
                    </FavoriteButton> */}

                    <FavoritedButton>
                        <FavoritedImage source={unfavoriteIcon}/>
                    </FavoritedButton>

                    <ContactButton onPress={handleLinkinToWhatsapp}>
                        <ContactButtonImage source={whastsAppIcon}/>
                        <ContactButtonText>Entrar em contato</ContactButtonText>
                    </ContactButton>
                </ButtonsContainer>
            </Footer>
        </Container>
    );
};

export default TeacherItem;
