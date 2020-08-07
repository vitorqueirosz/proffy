import React, { useCallback } from 'react';

import { useNavigation } from '@react-navigation/native';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';



import { Container, ImageBackground,Title, Description, AlrightButton, TextButton } from './styles';

const GiveClasses: React.FC = () => {
    const { goBack } = useNavigation();

    const handleNavigateBack = useCallback(() => {
        goBack();
    }, []);

    return (
        <Container>
            <ImageBackground 
            resizeMode="contain" 
            source={giveClassesBgImage}
            >
                <Title>Quer ser um Proffy?</Title>
                <Description>Para comecar, voce precisa se cadastrar como professor na nossa plataforma Web.</Description>
            </ImageBackground>

            <AlrightButton onPress={handleNavigateBack}>
                <TextButton>Tudo bem</TextButton>
            </AlrightButton>
        </Container>
    );
};


export default GiveClasses;