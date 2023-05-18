import { BrowserRouter, Route, Routes } from "react-router-dom";
import { reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";

import HeaderLayout from "components/layout/HeaderLayout";
import MainPage from "pages/mainpage/MainPage";
import LoginPage from "pages/loginpage/LoginPage";

import ImportFonts from "utils/ImportFonts";

const GlobalStyle = createGlobalStyle`
    ${reset}

    *, *::before, *::after {
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`

function App() {
    ImportFonts();

    return (
        <>
            <GlobalStyle />
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route element={<HeaderLayout />}>
                        <Route path="/" element={<MainPage />} />
                        <Route path="/login" element={<LoginPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );


}
export default App;