import { BrowserRouter, Route, Routes } from "react-router-dom";

import HeaderLayout from "components/layout/HeaderLayout";
import MainPage from "pages/mainpage/MainPage";
import LoginPage from "pages/loginpage/LoginPage";

import ImportFonts from "utils/ImportFonts";
import GlobalStyle from "styles/GlobalStyle";

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