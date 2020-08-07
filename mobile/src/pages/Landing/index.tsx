import React, { useCallback, useContext } from 'react';

import { useNavigation } from '@react-navigation/native';

import { ThemeContext } from '../../../App';

import landingImage from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';


import { 
    Container, 
    Icon,
    Image, 
    Title, 
    TitleBold, 
    ButtonsContainer, 
    Button,
    ButtonImage,
    ButtonText,
    SecondaryButton,
    TotalConnections,
    HeartImage } from './styles';

const Landing: React.FC = () => {
    const { toggleTheme } = useContext(ThemeContext);

    const navigation = useNavigation();

    const handleNavigateToGiveClassesPages = useCallback(() => {
        navigation.navigate('GiveClasses');
    }, []);

    const handleNavigateToStudyPages = useCallback(() => {
        navigation.navigate('study');
    }, []);

    return (
        <Container>
            <Icon 
                onPress={toggleTheme}
                name="moon"
                size={25}
                color="#fff"
            />

            <Image style={{ resizeMode: 'contain'}} source={landingImage}/>


            <Title>
                Seja bem-vindo, {'\n'}
                <TitleBold>O Que deseja fazer?</TitleBold>
            </Title>


            <ButtonsContainer>
                <Button onPress={handleNavigateToStudyPages}>
                    <ButtonImage source={studyIcon}/>
                    <ButtonText>Estudar</ButtonText>
                </Button>

                <SecondaryButton onPress={handleNavigateToGiveClassesPages}>
                    <ButtonImage source={giveClassesIcon}/>
                    <ButtonText>Dar aulas</ButtonText>
                </SecondaryButton>
            </ButtonsContainer>


            <TotalConnections>
                Total de 300 conexoes ja realizadas{' '}

                <HeartImage source={heartIcon}/>
            </TotalConnections>
        </Container>
    );
};


export default Landing;
