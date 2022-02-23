import styled, {css} from 'styled-components/native'

export const Container = styled.View`
${({theme}) => css`
    flex: 1;
    background: ${theme.colors.primary};
    justify-content: center
    align-items: center;
`}`;

export const Title = styled.Text`
${({theme}) => css`
    color: ${theme.colors.textColor};
    font-size: 25px;
`}
`;

export const Button = styled.TouchableOpacity`
margin-top: 20px;
padding: 12px;
border-radius: 5px;
background: #000
` 
export const TextButton = styled.Text`
font-size: 20px
color: #eee`