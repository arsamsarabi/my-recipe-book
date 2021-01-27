import {loginCredentialsType, postLogin} from "../api";
import { useState as hookUseState, createState} from '@hookstate/core';
import jwt_decode, {JwtPayload} from "jwt-decode";

const tokenStore = createState<string|undefined>(undefined);
const postLoginInFlight = createState<boolean>(false);
const isAuthenticatedStore = createState<boolean>(false)

const checkBearerToken = (token = '') =>{
	const current_time = new Date().getTime() / 1000
	const decoded: JwtPayload = jwt_decode(token )
	return decoded.exp ? current_time < decoded?.exp : false
}

export const useAuth = () =>{
	const token = hookUseState(tokenStore);
	const inFlight =hookUseState(postLoginInFlight)
	const isAuthenticated = hookUseState(isAuthenticatedStore)


	const login = async({email, password}:loginCredentialsType) =>{
		if(inFlight.get()){
			return
		}
		inFlight.set(true)
		const response = await postLogin({email, password})
		inFlight.set(false)
		token.set(response?.data?.data)
		isAuthenticated.set(checkBearerToken(response?.data?.data))
	}

	const handleLogout = () =>{
		token.set(undefined)
		isAuthenticated.set(false)
	}

	return {
		login,
		logout: handleLogout,
		inFlight: inFlight.get(),
		isAuthenticated: isAuthenticated.get()
	}
}