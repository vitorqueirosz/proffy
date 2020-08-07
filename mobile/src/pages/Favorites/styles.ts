import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #f0f0f7;

`;

export const ScrollView = styled.ScrollView`
    margin-top: -40px;
`;


export const EmptyTeacherList = styled.View`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 16px;
    margin: auto;

    background: ${props => props.theme.colors.background}
    margin: auto 20px;
`;


export const EmptyText = styled.Text`
    color: ${props => props.theme.colors.color};
    font-size: 14px;
    font-family: Archivo_700Bold;
    margin-right: 8px;

`;

export const FavoritedImage  = styled.Image`
`;
