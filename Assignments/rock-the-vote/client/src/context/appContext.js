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
    const [allComments, setAllComments] = useState([])

    React.useEffect(() => {
        getAllIssues()
        getIssuesByUser()
        getAllComments()
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
                getAllComments()
                setUser(prevUser => ({
                    ...prevUser,
                    user,
                    token
                }))
            })
            .catch(error => console.log(error))
    }

    function logout() {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        setUser({
            user: {},
            token: ""
        })
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

    function postIssue(newIssue) {
        userAxios.post("/api/issues/", newIssue)
            .then(response => {
                setAllIssues(prevAllIssues => ([...prevAllIssues, response.data]))
                getIssuesByUser()
            })
            .catch(error => console.log(error))
    }

    function deleteIssue(issueId) {
        userAxios.delete(`/api/issues/${issueId}`)
            .then(response => {
                setAllIssues(prevAllIssues => (prevAllIssues.filter(each => each._id !== issueId)))
                getIssuesByUser()
            })
            .catch(error => console.log(error))
    }

    function getAllComments() {
        userAxios.get("/api/comments/")
            .then(response => setAllComments(response.data))
            .catch(error => console.log(error))
    }

    function postCommentToIssue(newComment, issueId) {
        userAxios.post(`/api/comments/${issueId}`, newComment)
            .then(response => {
                setAllComments(prevAllComments => ([...prevAllComments, response.data]))
                getAllComments()
            })
            .catch(error => console.log(error))
    }

    return (
        <AppContext.Provider
            value={{
                ...user,
                allIssues,
                userIssues,
                allComments,
                signUp,
                login,
                logout,
                postIssue,
                deleteIssue,
                getAllComments,
                postCommentToIssue
            }}
        >
            {props.children}
        </AppContext.Provider>
    )
}