import styled from 'styled-components/native';


export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;


export const ProgressBar = styled.View`
    height: 80px;
    justify-content: center;
`;

export const Text = styled.Text`
    line-height: 19px;
    font-size: 16px;
    color: #fff;
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const DrawBlueBox = styled.Text`
    color: #0055A4;
`;

export const DrawRedBox = styled.Text`
    color: #EF4135;
`;

export const NewLine = styled.Text`
    color: #169E96;
`;

export const SectionStyles = styled.View`
    margin-left: 12px;
    margin-right: 12px;
    margin-bottom: 32px;
`;

export const Title = styled.Text`
    font-size: 32px;
    margin-bottom: 8px;
    color: #36B1BF;
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Description = styled.View`
    background-color: #1D2326;
    border-radius: 10px;
    padding: 15px;
`;

export const Bash = styled.View`

`;

export const Code = styled.View`
    background-color: #1D2326;
    min-height: 120px;
    border-radius: 8px;
    padding: 8px;
    margin-bottom: 16px;
`

export const Options = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`

export const OptionCode = styled.View`
    min-width: 120px;
    padding: 8px;
    margin: 4px;
    background-color: #1D2326;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
`
