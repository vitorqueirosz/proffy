import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    background: #fff;
    border-width: 1px;
    border-color: #e6e6f0;
    border-radius: 8px;
    margin-bottom: 16px;
    overflow: hidden;
`;


export const Profile  = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 24px;
`;
export const Image  = styled.Image`
    width: 64px;
    height: 64px;
    border-radius: 32px;
    background-color: #eee;
`;
export const ProfileInfo  = styled.View`
    margin-left: 16px;

`;
export const NameText  = styled.Text`
    font-family: Archivo_700Bold;
    color: #32264d;
    font-size: 20px;
`;
export const SubjecText  = styled.Text`
    font-family: Poppins_400Regular;
    color: #646180;
    font-size: 12px;
    margin-top: 4px;
`;

export const BioText = styled.Text`
    margin: 0 24px;
    font-family: Poppins_400Regular;
    font-size: 14px;
    line-height: 24px;
    color: #646180;
`;

export const Footer  = styled.View`
    background: #fafafc;
    padding: 24px;
    align-items: center;
    margin-top: 24px;
`;
export const PriceText  = styled.Text`
    font-family: Poppins_400Regular;
    font-size: 14px;
    color: #6a6180;
`;
export const PriceValueText  = styled.Text`
    font-family: Archivo_700Bold;
    color: #8257e5;
    font-size: 16px;
`;
export const ButtonsContainer  = styled.View`
    flex-direction: row;
    margin-top: 16px;

`;
export const FavoriteButton  = styled(RectButton)`
    background: #8257e5;
    width: 56px;
    height: 56px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    margin-right: 8px;

`;
export const FavoriteImage  = styled.Image``;

export const FavoritedButton = styled(RectButton)`
    background: #e33d3d;
    width: 56px;
    height: 56px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
`;
export const FavoritedImage  = styled.Image``;

export const ContactButton  = styled(RectButton)`
    background: #04d361;
    flex: 1;
    flex-direction: row;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    margin-right: 8px;
`;
export const ContactButtonImage = styled.Image``;
export const ContactButtonText = styled.Text`
    color: #fff;
    font-family: Archivo_700Bold;
    font-size: 16px;
    margin-left: 16px;
`;
