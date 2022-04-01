import React, { useState } from 'react';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import {
    Title,
    Form,
    FormTitle,
    Container,
    Header,
    ContentContainer,
    ContainerChangeScreen,
    ChangeScreen
} from './styles';
import { Input } from '../../components/Form/Input';
import { useTheme } from 'styled-components';
import { Button } from '../../components/Form/Button';
import { Alert, StatusBar } from 'react-native';

export function SignUp() {

    const theme = useTheme();
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');

    async function handleSignUp() {

        try {
            const schema = Yup.object().shape({
                userName: Yup.string().required('Usuário é obrigatório'),
                email: Yup.string().required('E-mail é obrigatório').email('Digite um e-mail válido'),
                name: Yup.string().required('Nome é obrigatório'),
            });

            const data = await schema.validate({ name, email, userName });
            {/* navigation.navigate('NextSignUp', user:data);*/ }


            {/* const route = useRoute(); */ }
            {/* const { user } = route */ }

        } catch (error) {
            if (error instanceof Yup.ValidationError) {
                Alert.alert('Erro na validação', error.message);
            }
        }

    }

    return (
        <Container>
            <StatusBar backgroundColor={theme.colors.title} barStyle='dark-content' />
            <Header>
                <Feather name="arrow-left" size={21} color="#47474D" />
                <ContainerChangeScreen>
                    <ChangeScreen isActive={true} />
                    <ChangeScreen isActive={false} />
                </ContainerChangeScreen>
            </Header>
            <ContentContainer>
                <Title>cadastre-se{'\n'}abaixo</Title>
                <FormTitle>1. Dados</FormTitle>
                <Form>
                    <Input
                        iconName="user"
                        placeholder="Nome"
                        keyboardType="default"
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={setName}
                        value={name}
                    />
                    <Input
                        iconName='mail'
                        placeholder='E-mail'
                        keyboardType='email-address'
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={setEmail}
                        value={email}
                    />
                    <Input
                        iconName='users'
                        placeholder='Usuário'
                        keyboardType='default'
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={setUserName}
                        value={userName}
                    />
                </Form>

                <Button
                    title="Próximo"
                    bgColor={theme.colors.blue}
                    textColor={theme.colors.white}
                    onPress={handleSignUp}
                />
            </ContentContainer>
        </Container>
    )
}