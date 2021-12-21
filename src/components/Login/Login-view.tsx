import React, { FunctionComponent } from 'react';
import './Login.css';

interface Props {
    usernameNotEmpty: boolean,
    passwordNotEmpty: boolean,
    onUsernameChange: (event: React.FormEvent<HTMLInputElement>) => void,
    onPasswordChange: (event: React.FormEvent<HTMLInputElement>) => void,
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

const Login: FunctionComponent<Props> = props => {
    console.log(props.usernameNotEmpty);
    return (
        <div className="login">
            <h1 className="login__heading">Login</h1>
            <form action="" onSubmit={props.onSubmit} className="login__form">
                <div className={props.usernameNotEmpty ? 'login__nonempty' : ''}>
                    <label htmlFor="username">Username</label>
                    <div className="login__field">
                        <input
                            type="text"
                            id="username"
                            placeholder="Type your username"
                            autoComplete="off"
                            onChange={props.onUsernameChange}
                        />
                        <span className="login__icon material-icons">person</span>
                    </div>
                </div>
                <div className={props.passwordNotEmpty ? 'login__nonempty' : ''}>
                    <label htmlFor="password">Password</label>
                    <div className="login__field">
                        <input
                            type="password"
                            id="password"
                            placeholder="Type your password"
                            autoComplete="off"
                            onChange={props.onPasswordChange}
                        />
                        <span className="login__icon material-icons">lock</span>
                    </div>
                </div>
                <a className="login__forgot" href="#">Forgot password?</a>
                <button type="submit">login</button>
            </form>
            <span>Or Sign Up Using</span>
            <div className="login__icons">
                <a className="login__oauth material-icons bg1" href="#">extension</a>
                <a className="login__oauth material-icons bg2" href="#">anchor</a>
                <a className="login__oauth material-icons bg3" href="#">stars</a>
            </div>
            <span>Or Sign Up Using</span>
            <a className="login__signup" href="#">Sign up</a>
        </div>
    )
}

export { Login as LoginView };