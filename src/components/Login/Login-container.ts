import React, { Component } from 'react';

import { LoginView } from './Login-view';

interface State {
    username: string,
    password: string
}

export default class Login extends Component<{}, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };
    }

    public handleUsernameChange = (event: React.FormEvent<HTMLInputElement>) => {
        console.log("hello there");
        this.setState({
            username: (event.target as HTMLInputElement).value
        });
    }

    public handlePasswordChange = (event: React.FormEvent<HTMLInputElement>) => {
        this.setState({
            password: (event.target as HTMLInputElement).value
        });
    }

    public handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log("Stub for form submittion");
    }

    render() {
        const props = {
            usernameNotEmpty: !!this.state.username,
            passwordNotEmpty: !!this.state.password,
            onUsernameChange: this.handleUsernameChange,
            onPasswordChange: this.handlePasswordChange,
            onSubmit: this.handleSubmit
        };

        return LoginView(props);
    }
}
