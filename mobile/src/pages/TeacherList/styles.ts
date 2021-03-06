import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';


export const Container = styled.View`
  flex: 1;
  background: #f0f0f7;

`;
export const ScrollView = styled.ScrollView`
    margin-top: -40px;
`;


export const SearchForm  = styled.View`
    margin-bottom: 24px;
`;
export const SubjectLabelText  = styled.Text`
    color: #d4c2ff;
    font-family: Poppins_400Regular;
`;
export const Input  = styled.TextInput`
    height: 54px;
    background: #fff;
    border-radius: 8px;
    justify-content: center;
    padding: 0 16px;
    margin-top: 4px;
    margin-bottom: 16px;
`;
export const InputBlock  = styled.View`
    width: 49%;
`;
export const InputGroup = styled.View`
    flex-direction: row;
    justify-content: space-between;

`;

export const SubmitButton = styled(RectButton)`
    background: #04d361;
    flex-direction: row;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    height: 56px;

`;
export const SubmitButtonText = styled.Text`
    color: #fff;
    font-family: Archivo_700Bold;
    font-size: 16px;
    margin-left: 16px;

`;


export const EmptyTeacherList = styled.View`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 16px;
    margin: auto 20px;

    background: ${props => props.theme.colors.background}
`;


export const EmptyText = styled.Text`
    color: ${props => props.theme.colors.color}
    font-size: 14px;
    font-family: Archivo_700Bold;
    margin-right: 8px;
`;
