import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { Title, Form, FormTitle, Container, Header, ContentContainer, ContainerChangeScreen, ChangeScreen } from './styles';
import { Input } from '../../components/Form/Input';
import { useTheme } from 'styled-components';
import { Button } from '../../components/Form/Button';
import { StatusBar } from 'react-native';

export function SignUp() {
    const theme = useTheme();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [user, setUser] = useState('');

    function handleSignUp() {

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
                        onChangeText={setUser}
                        value={user}
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