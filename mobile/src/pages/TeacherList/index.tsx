import React from 'react';

import PageHeader from '../../components/PageHeader';
import { Container, ScrollView } from './styles';
import TeacherItem from '../../components/TeacherItem';

const TeacherList: React.FC = () => {
    return (
        <Container>
            <PageHeader title="Proffys disponiveis" />


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

export default TeacherList;
