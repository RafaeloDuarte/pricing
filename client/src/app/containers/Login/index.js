import React from 'react';
import Titulo from '../../components/Texto/Titulo';
import Input from '../../components/Inputs/Simples';
import { Link } from 'react-router-dom';
import Checkbox from '../../components/Inputs/Checkbox';
import Button from '../../components/Button/Simples';
import * as actions from '../../store/actions'
import { connect } from 'react-redux'
import Alert from '../../components/Alert/Danger'

class Login extends React.Component {

    state = {
        email: "",
        senha: "",
        opcaoLembrar: true,
        erros: {}
    }

    handleLogin() {
        const { email, senha: password, opcaoLembrar } = this.state;
        if (!this.validate()) return;

        this.props.handleLogin({ email, password, opcaoLembrar }, (error) => {
            this.setState({ erros: { ...this.state.erros, form: error } });
        })
    }

    validate() {
        const { email, senha } = this.state;
        const erros = {};

        if (!email) erros.email = "Preencha aqui com o seu e-mail";
        if (!senha) erros.senha = "Preencha aqui com a sua senha";

        this.setState({ erros });
        return !(Object.keys(erros).length > 0);
    }

    onChangeInput = (field, ev) => this.setState({ [field]: ev.target.value })

    onChangeCheckbox = (field) => this.setState({ [field]: !this.state[field] });

    render() {
        const { email, senha, opcaoLembrar, erros } = this.state;
        return (
            <div className="Login flex flex-center">
                <div className="Card">

                    <div className="flex vertical flex-center">
                        <Titulo tipo="h1" titulo="LOJA IT" />
                        <p>Faça seu Login abaixo</p>
                    </div>
                    
                    <Alert error={erros.form}/>
                    <Input
                        label="E-mail"
                        value={email}
                        type="email"
                        error={erros.email}
                        onChange={(ev) => this.onChangeInput('email', ev)}
                    />
                    <Input
                        label="Senha"
                        value={senha}
                        type="password"
                        error={erros.senha}
                        onChange={(ev) => this.onChangeInput('senha', ev)}
                    />
                    <div>
                        <div>
                            <Checkbox
                                value={opcaoLembrar}
                                onChange={() => this.onChangeCheckbox("opcaoLembrar")}
                                label="Lembrar?" />
                        </div>
                        <div className="flex-q flex flex-end">
                            <Link to="/recuperar-senha">Esqueceu sua senha?</Link>
                        </div>

                        <div className="flex flex-center">
                            <Button type="success" label="ENTRAR" onClick={() => this.handleLogin()} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, actions)(Login)