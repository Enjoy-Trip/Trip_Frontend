import { BrowserRouter, Route, Routes } from "react-router-dom";
import { reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";

import MainPage from "pages/mainpage/MainPage";
import LoginPage from "pages/loginpage/LoginPage";

const GlobalStyle = createGlobalStyle`
    ${reset}

    *, *::before, *::after {
        box-sizing: border-box;
    }
`

function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );


}
export default App;