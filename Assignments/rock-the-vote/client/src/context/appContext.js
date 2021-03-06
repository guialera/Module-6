import React, { useState } from "react"
import axios from "axios"

export const AppContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function AppProvider(props) {

    const initState = {
        user: JSON.parse(localStorage.getItem("user") || {}),
        token: localStorage.getItem("token") || ""
    }

    const [user, setUser] = useState(initState)
    const [allIssues, setAllIssues] = useState([])
    const [userIssues, setUserIssues] = useState([])

    React.useEffect(() => {
        getAllIssues()
        getIssuesByUser()
    }, [])

    function signUp(credentials) {
        axios.post("/auth/signup", credentials)
            .then(response => {
                const { user, token } = response.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                setUser(prevUser => ({
                    ...prevUser,
                    user,
                    token
                }))
            })
            .catch(error => console.log(error))
    }

    function login(credentials) {
        axios.post("/auth/login", credentials)
            .then(response => {
                const { user, token } = response.data
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                getAllIssues()
                getIssuesByUser()
                setUser(prevUser => ({
                    ...prevUser,
                    user,
                    token
                }))
            })
            .catch(error => console.log(error))
    }

    function getAllIssues() {
        userAxios.get("/api/issues/")
            .then(response => setAllIssues(response.data))
            .catch(error => console.log(error))
    }

    function getIssuesByUser() {
        userAxios.get("/api/issues/user")
            .then(response => setUserIssues(response.data))
            .catch(error => console.log(error))

    }

    return (
        <AppContext.Provider
            value={{ ...user, allIssues, userIssues, signUp, login }}
        >
            {props.children}
        </AppContext.Provider>
    )
}