import { useState, useEffect, createContext } from 'react';
import jwtDecode from 'jwt-decode';
import { jwt, Auth } from '../api'

//This is the context for maintaining and managing the user's session.
const authController = new Auth();

export const AuthContext = createContext({
    auth: undefined,
    accessToken: null,
    refreshToken: null,
    login: () => null,
    logout: () => null,
});

export function AuthProvider({ children }) {
    const [auth, setAuth] = useState(undefined);
    const [accessToken, setAccessToken] = useState(null);
    const [refreshToken, setRefreshToken] = useState(null);


    useEffect(() => {
        (async () => {
            const response = await jwt.getToken()
            const accessExpired = jwt.hashExpired(response.access)
            //refresh token
            if (accessExpired) {
                const refreshExpired = jwt.hashExpired(response.refresh)

                if (refreshExpired) {
                    logout()
                } else {
                    try {
                        //refresh access token
                        const result = await authController.refreshToken(response.refresh)
                        //Save in local storage
                        jwt.saveToken(result.access, response.refresh)
                        login({
                            access: result.access,
                            refresh: response.refresh
                        })
                    } catch (error) {
                        console.error(error)
                        logout()
                    }

                }
            } else {
                login(response)
            }
        })()
    }, [])



    const logout = () => {
        setAuth(null);
        setAccessToken(null);
        setRefreshToken(null);
        jwt.removeToken()
    }

    const login = (tokens) => {
        if (tokens.access && tokens.refresh) {
            const decodeToken = jwtDecode(tokens.access);
            setAuth(decodeToken);
            setAccessToken(tokens.access);
            setRefreshToken(tokens.refresh);
            jwt.saveToken(tokens.access, tokens.refresh)

        } else {
            logout()
        }
    }
    const data = {
        auth,
        accessToken,
        refreshToken,
        logout,
        login
    }

    if (auth === undefined) return null

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}