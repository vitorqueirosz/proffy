import styled from 'styled-components/native';
import { BorderlessButton } from  'react-native-gesture-handler';

export const Container = styled.View`
  padding: 40px;
  background: ${props => props.theme.colors.background};

`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const TopBar = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
export const TopBarButton = styled(BorderlessButton)``;


export const Image = styled.Image``;
export const LogoImage = styled.Image``;

export const Title = styled.Text`
    font-family: Archivo_700Bold;
    color: #fff;
    font-size: 24px;
    line-height: 32px;
    max-width: 160px;
    margin: 40px 0;
`;
