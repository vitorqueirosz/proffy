import React, { useState, useCallback } from 'react';

import PageHeader from '../../components/PageHeader';
import { KeyboardAvoidingView , Platform} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import TeacherItem, { Teacher } from '../../components/TeacherItem';
import RNPickerSelect from 'react-native-picker-select';

import { Feather } from '@expo/vector-icons';

import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';

import {
    Container,
    ScrollView,
    SearchForm,
    SubjectLabelText,
    Input,
    InputBlock,
    InputGroup,
    SubmitButton,
    SubmitButtonText,
    EmptyTeacherList,
    EmptyText  } from './styles';


const TeacherList: React.FC = () => {
    const [isFiltersVisible, setIsFiltersVisible] = useState(true);
    const [teachers, setTeachers] = useState([]);
    const [empty, setEmpty] = useState(false);

    const [favorites, setFavorites] = useState<number[]>([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekday] = useState('');
    const [time, setTime] = useState('');

    const loadFavorites = useCallback(() => {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTeachers = JSON.parse(response);

                const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
                    return teacher.id;
                });

                setFavorites(favoritedTeachersIds);
            }
        })
    }, []);

    const handleToggleFiltersVisible = useCallback(() => {
        setIsFiltersVisible(!isFiltersVisible);
    }, [isFiltersVisible]);


    const handleFilterSubmit = useCallback( () => {
        loadFavorites();

        try {
           api.get('/classes', {
                params: {
                   subject,
                   week_day,
                   time
               }
           }).then(response => {

            const findTeacher = response.data.find((teacher: Teacher) => teacher.id);

            if (!findTeacher) {
               return setEmpty(true);
            }

            setTeachers(response.data);
            setIsFiltersVisible(false);
            setEmpty(false);
           });


        } catch (err) {
            console.log('ok')
        }

    }, [subject, week_day, time]);

    return (
        <KeyboardAvoidingView
        style={{ flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
        >
            <Container>
                <PageHeader
                title="Proffys disponiveis"
                headerRight={(
                    <BorderlessButton onPress={handleToggleFiltersVisible}>
                    <Feather name="filter" size={20} color="#04D361"/>

                    </BorderlessButton>
                )}>

                    {isFiltersVisible && (
                        <SearchForm>
                            <SubjectLabelText>Materia</SubjectLabelText>
                            <RNPickerSelect
                                    onValueChange={(itemValue, itemIndex) =>
                                        setSubject(itemValue)
                                    }
                                    items={[
                                        { value: 'Artes', label: 'Artes'},
                                        { value: 'Historia', label: 'Historia'},
                                        { value: 'Matematica', label: 'Matematica'},
                                        { value: 'Ingles', label: 'Ingles'},
                                        { value: 'Portugues', label: 'Portugues'},
                                        { value: 'Geografia', label: 'Geografia'},
                                        { value: 'Biologia', label: 'Biologia'},
                                        { value: 'Fisica', label: 'Fisica'},
                                        { value: 'Quimica', label: 'Quimica'},
                                        { value: 'Educacao Fisica', label: 'Educacao Fisica'}
                                    ]}
                                    >

                                    <Input
                                        placeholder="Qual o dia?"
                                        value={subject}
                                    />
                                </RNPickerSelect>

                            <InputGroup>
                                <InputBlock>
                                    <SubjectLabelText>Dia da Semana</SubjectLabelText>


                                <RNPickerSelect
                                    onValueChange={(itemValue, itemIndex) =>
                                        setWeekday(String(itemValue))
                                    }
                                    items={[
                                        { value: '0', label: 'Domingo'},
                                        { value: '1', label: 'Segunda-Feira'},
                                        { value: '2', label: 'Terca-Feira'},
                                        { value: '3', label: 'Quarta-Feira'},
                                        { value: '4', label: 'Quinta-Feira'},
                                        { value: '5', label: 'Sexta'},
                                        { value: '6', label: 'Sabado'}
                                    ]}
                                    >

                                    <Input
                                        placeholder="Qual o dia?"
                                        value={week_day}
                                    />
                                </RNPickerSelect>
                            </InputBlock>

                                <InputBlock>
                                    <SubjectLabelText>Horario</SubjectLabelText>
                                    <Input
                                        value={time}
                                        onChangeText={text => setTime(text)}
                                        placeholder="Qual o horario?"
                                        placeholderTextColor="#c1bccc"
                                    />
                                </InputBlock>
                            </InputGroup>

                            <SubmitButton onPress={handleFilterSubmit}>
                                <SubmitButtonText>Filtrar</SubmitButtonText>
                            </SubmitButton>
                        </SearchForm>
                    )}
                </PageHeader>


                {empty ?  <EmptyTeacherList>
                <EmptyText>Proffy não encontrado, tente novamente</EmptyText>
                    <Feather name="slash" size={20} color="#E33D3D"/>
                </EmptyTeacherList>

                :


                teachers.length === 0 ? (

                    <EmptyTeacherList>
                        <EmptyText>Nenhum Proffy filtrado</EmptyText>
                        <Feather name="filter" size={20} color="#04D361"/>
                    </EmptyTeacherList>
                    )

                    : (

                        <ScrollView
                        keyboardShouldPersistTaps="handled"
                            contentContainerStyle={{
                                paddingHorizontal: 16,
                                paddingBottom: 16
                            }}
                        >

                            {teachers.map((teacher: Teacher) => {
                                return (
                                    <TeacherItem
                                    key={teacher.id}
                                    teacher={teacher}
                                    favorited={favorites.includes(teacher.id)}
                                    />
                                )
                            })}
                        </ScrollView>
                    )}
            </Container>
        </KeyboardAvoidingView>
    );
};

export default TeacherList;
