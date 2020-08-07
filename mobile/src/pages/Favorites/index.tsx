import React, { useCallback, useState } from 'react';

import PageHeader from '../../components/PageHeader';
import { useFocusEffect } from '@react-navigation/native';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import AsyncStorage from '@react-native-community/async-storage';

import { Container, ScrollView, EmptyTeacherList, EmptyText, FavoritedImage } from './styles';

const Favorites: React.FC = () => {
    const [favorites, setFavorites] = useState([]);
    const [empty, setEmpty] = useState(true);

    const loadFavorites = useCallback(() => {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {

                const favoritedTeachers = JSON.parse(response);

                if(response.length === 2) {
                    setEmpty(true);
                } else {
                    setEmpty(false);
                    setFavorites(favoritedTeachers);
                }


                console.log(response.length)
            } else {
                setEmpty(true);
            }
        })
    }, []);

    useFocusEffect(
        useCallback(() => {
          loadFavorites();
        }, [])
      )

    return (
        <Container>
        <PageHeader title="Meus proffys favoritos" />


        {empty ? (
            <EmptyTeacherList>
                <EmptyText>Voce não tem nenhum Proffy favoritado.</EmptyText>
                <FavoritedImage source={unfavoriteIcon}/>
           </EmptyTeacherList>
        )


        :

        <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >
                {favorites.map((teacher: Teacher) => {
                    return (
                        <TeacherItem
                        key={teacher.id}
                        teacher={teacher}
                        favorited
                        />
                    )
                })}

        </ScrollView>

        }

    </Container>
    );
};

export default Favorites;
