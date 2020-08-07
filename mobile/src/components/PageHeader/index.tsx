import React, { useCallback, ReactNode } from 'react';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';

import { Container, Header, TopBar, TopBarButton, Image, LogoImage, Title } from './styles';
import { useNavigation } from '@react-navigation/native';

interface PageHeaderProps {
    title: string;
    headerRight?: ReactNode;
    filter?: string;

}

const PageHeader: React.FC<PageHeaderProps> = ({ title, children, headerRight }) => {

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

            <Header>
                <Title>{title}</Title>
                {headerRight}
            </Header>

            {children}
        </Container>
    );
};


export default PageHeader;
