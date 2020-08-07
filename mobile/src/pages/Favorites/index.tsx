import React from 'react';

import PageHeader from '../../components/PageHeader';

import TeacherItem from '../../components/TeacherItem';

import { Container, ScrollView } from './styles';

const Favorites: React.FC = () => {
    return (
        <Container>
        <PageHeader title="Meus proffys favoritos" />


        <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16
                }}
            >
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </ScrollView>

    </Container>
    );
};

export default Favorites;
