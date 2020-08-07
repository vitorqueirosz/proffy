import React, { useState, useCallback } from 'react';

import PageHeader from '../../components/PageHeader';
import { BorderlessButton } from 'react-native-gesture-handler';

import TeacherItem from '../../components/TeacherItem';

import { Feather } from '@expo/vector-icons';

import {
    Container,
    ScrollView,
    SearchForm,
    SubjectLabelText,
    Input,
    InputBlock,
    InputGroup,
    SubmitButton,
    SubmitButtonText  } from './styles';


const TeacherList: React.FC = () => {
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);

    const handleToggleFiltersVisible = useCallback(() => {
        setIsFiltersVisible(!isFiltersVisible);
    }, [isFiltersVisible]);


    return (
        <Container>
            <PageHeader
            title="Proffys disponiveis"
            headerRight={(
                <BorderlessButton onPress={handleToggleFiltersVisible}>
                <Feather name="filter" size={20} color="#fff"/>

                </BorderlessButton>
            )}>

                {isFiltersVisible && (
                    <SearchForm>
                        <SubjectLabelText>Materia</SubjectLabelText>
                        <Input
                            placeholder="Qual a materia?"
                            placeholderTextColor="#c1bccc"
                        />

                        <InputGroup>
                            <InputBlock>
                                <SubjectLabelText>Dia da Semana</SubjectLabelText>
                                <Input
                                    placeholder="Qual o dia?"
                                    placeholderTextColor="#c1bccc"
                                />
                            </InputBlock>

                            <InputBlock>
                                <SubjectLabelText>Horario</SubjectLabelText>
                                <Input
                                    placeholder="Qual o horario?"
                                    placeholderTextColor="#c1bccc"
                                />
                            </InputBlock>
                        </InputGroup>

                        <SubmitButton>
                            <SubmitButtonText>Filtrar</SubmitButtonText>
                        </SubmitButton>
                    </SearchForm>
                )}
            </PageHeader>


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
