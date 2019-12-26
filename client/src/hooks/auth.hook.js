import {useState, useCallback, useEffect} from 'react'

const userData = 'userData';

export const useAuth = () => {
  const [ready, setReady] = useState(false)
  const [token, setToken] = useState(null)
  const [userId, setUserId] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = useCallback( (jwtToken, id) => {
    setToken(jwtToken)
    setUserId(id)
    setIsAuthenticated(true)

    localStorage.setItem(userData, JSON.stringify({token: jwtToken, userId: id}));
  }, [])

  const logout = useCallback( () => {
    setToken(null)
    setUserId(null)
    setIsAuthenticated(false)

    localStorage.removeItem(userData)
  }, [])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(userData))

    if (data && data.token) {
      login(data.token, data.userId)
    }

    setReady(true)
  }, [login])

  return { login, logout, token, userId, isAuthenticated, ready };
}