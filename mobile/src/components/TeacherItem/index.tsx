import React, { useCallback, useState } from 'react';
import { Linking } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';

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
    favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
    const [isFavorited, setIsFavorited] = useState(favorited);

    const handleLinkinToWhatsapp = useCallback(() => {
        api.post('/connections', {
            user_id: teacher.id
        });

        Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
    }, []);

    const handleToggleFavorite = useCallback(async () => {
        const favorites = await AsyncStorage.getItem('favorites');

        let favoritesArray = [];

        if (favorites) {
            favoritesArray = JSON.parse(favorites);
        }

        if (isFavorited) {
            const favoriteIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
                return teacherItem.id === teacher.id;
            });

            favoritesArray.splice(favoriteIndex, 1);
            setIsFavorited(false);

        } else {
            favoritesArray.push(teacher);
            setIsFavorited(true);

        }
        await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
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

                    {isFavorited ? (
                        <FavoritedButton onPress={handleToggleFavorite}>
                            <FavoritedImage source={unfavoriteIcon}/>
                        </FavoritedButton>)
                    :
                        <FavoriteButton onPress={handleToggleFavorite}>
                            <FavoriteImage source={heartOutlineIcon}/>
                        </FavoriteButton>
                }

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
