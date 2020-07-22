import axios from "axios"
import {
    LOGIN_USER, LOGOUT_USER
} from './types'
import uri, { version } from '../../config/apiClient'
import errorHandling from './errorHandling'
import { saveToken, cleanToken, getHeaders} from './localStorage'

export const initApp = () => {
    const opcaoLembrar = localStorage.getItem("opcaoLembrar");
    if (opcaoLembrar === "false") cleanToken();
}

export const getUser = () => {
    return function (dispatch) {
        axios.get(`${uri}/${version}/uri/usuarios/`, getHeaders())
            .then((response) => {
                saveToken(response.data.usuario, true);
                dispatch({ type: LOGIN_USER, payload: response.data });
            })
            .catch((error) => console.log(error));
    }
}

export const handleLogin = ({ email, password, opcaoLembrar }, callback) => {
    return function (dispatch) {
        axios.post(`${uri}/${version}/uri/usuarios/login`, { email, password })
            .then((response) => {
                saveToken(response.data.usuario, opcaoLembrar)
                dispatch({ type: LOGIN_USER, payload: response.data })
            })
            .catch((e) => callback(errorHandling(e)))
    }
}

export const formatMoney = (valor) => {
    return `R$ ${valor.toFixed(2).split(".").join(",")}`
}

export const handleLogout = () => {
    cleanToken()
    return { type: LOGOUT_USER }
}