import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';

import {
    Alert,
    StatusBar,
    TouchableOpacity,
} from 'react-native';

import { useTheme } from 'styled-components';

import LogoPng from '../../assets/BlueLogo.png';
import { Button } from '../../components/Form/Button';

import { Input } from '../../components/Form/Input';
import { PasswordInput } from '../../components/Form/PasswordInput';



import {
    Container,
    Logo,
    Title,
    SubTitle,
    Form,
    SignUp,
    SignUpText,
} from './styles';





export function SignIn() {

    const theme = useTheme();
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSignIn() {

        try {
            const schema = Yup.object().shape({
                email: Yup.string()
                    .required('E-mail é obrigatório')
                    .email('Digite um e-mail válido'),
                password: Yup.string()
                    .required('Senha é obrigatória')
                    .min(6, 'A senha deve ter no mínimo 6 caracteres'),
            });

            await schema.validate({ email, password });
        } catch (error) {
            if (error instanceof Yup.ValidationError) {
                Alert.alert('Erro na validação', error.message);
            }
        }

    }

    return (

        <Container >
            <StatusBar backgroundColor={theme.colors.title} barStyle='dark-content' />
            <Logo source={LogoPng} />

            <Title>
                Faça seu login ou{'\n'}
                cadastre-se
            </Title>

            <SubTitle>
                Faça seu login para começar{'\n'}
                uma experiência incrível.
            </SubTitle>

            <Form>
                <Input
                    iconName='mail'
                    placeholder='E-mail'
                    keyboardType='email-address'
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={setEmail}
                    value={email}
                />

                <PasswordInput
                    iconName='lock'
                    placeholder='Senha'
                    onChangeText={setPassword}
                    value={password}
                />

            </Form>

            <Button
                title='Login'
                bgColor={theme.colors.blue}
                textColor={theme.colors.white}
                onPress={handleSignIn}
            />


            <SignUp>
                <TouchableOpacity>
                    <SignUpText>Criar conta gratuita</SignUpText>
                </TouchableOpacity>
            </SignUp>

        </Container>

    );
}