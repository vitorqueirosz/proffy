import styled from 'styled-components/native';
import { keyframes } from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.colors.background};
  justify-content: center;
  padding: 40px;
`;

export const Icon = styled(Feather)`
    align-self: flex-end;
    margin-bottom: 5px;
`;


export const Image = styled.Image`
    width: 100%;

`;

export const Title = styled.Text`
    color: ${props => props.theme.colors.color};
    font-family: Poppins_400Regular;
    font-size: 20px;
    line-height: 30px;
    margin-top: 80px;
`;

export const TitleBold = styled.Text`
    font-family: Poppins_600SemiBold;
`;


export const ButtonsContainer = styled.View`
    flex-direction: row;
    margin-top: 40px;
    justify-content: space-between;
`;

export const Button = styled(RectButton)`
    height: 150px;
    width: 48%;
    border-radius: 8px;
    justify-content: space-between;
    padding: 24px;
    background: #9871f5;
`;

export const ButtonImage = styled.Image``;

export const ButtonText = styled.Text`
    font-family: Archivo_700Bold;
    color: ${props => props.theme.colors.color};
    font-size: 20px;
`;


export const SecondaryButton = styled(RectButton)`
    height: 150px;
    width: 48%;
    border-radius: 8px;
    justify-content: space-between;
    padding: 24px;
    background: #04d361;
`;

export const TotalConnections = styled.Text`
    font-family: Poppins_400Regular;
    color: #d4c2ff;
    font-size: 12px;
    line-height: 20px;
    max-width: 140px;
    margin-top: 40px;
`;


export const HeartImage = styled.Image``;
