import React, { useCallback, useState } from 'react';

import PageHeader from '../../components/PageHeader';
import { useFocusEffect } from '@react-navigation/native';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import { Container, ScrollView } from './styles';
import AsyncStorage from '@react-native-community/async-storage';

const Favorites: React.FC = () => {
    const [favorites, setFavorites] = useState([]);

    const loadFavorites = useCallback(() => {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTeachers = JSON.parse(response);

                setFavorites(favoritedTeachers);
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

    </Container>
    );
};

export default Favorites;
