interface NextSignUpProps {
    user: {
        name: string,
        email: string,
        userName: string,
    }
}



export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            Home: undefined;
            Activity: undefined;
            Achievements: undefined;
            Perfil: undefined;
            Nada: undefined;
            SignIn: undefined;
            SignUp: undefined;
            NextSignUp: NextSignUpProps;
            FinishSignUp: undefined;
        }
    }
}