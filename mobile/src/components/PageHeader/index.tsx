import React, { useCallback } from 'react';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';

import { Container, TopBar, TopBarButton, Image, LogoImage, Title } from './styles';
import { useNavigation } from '@react-navigation/native';

interface PageHeaderProps {
    title: string;
    filter?: string;

}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {

    const navigation = useNavigation();

    const handleGoBack = useCallback(() => {
        navigation.navigate('Landing');
    }, []);

    return (
        <Container>
            <TopBar>
                <TopBarButton onPress={handleGoBack}>
                    <Image source={backIcon} resizeMode="contain" />
                </TopBarButton>

                <LogoImage source={logoImg} resizeMode="contain"/>
            </TopBar>

            <Title>{title}</Title>
        </Container>
    );
};


export default PageHeader;