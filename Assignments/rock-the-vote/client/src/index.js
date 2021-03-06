import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import AppProvider from "./context/appContext.js"
import App from "./App.js"

ReactDOM.render(
    <BrowserRouter>
        <AppProvider>
            <App />
        </AppProvider>
    </BrowserRouter>,
    document.getElementById("root")
)