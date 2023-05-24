import { BrowserRouter, Route, Routes } from "react-router-dom";

import HeaderLayout from "components/layout/HeaderLayout";
import MainPage from "pages/mainpage/MainPage";
// import UserInfoPage from "pages/userpage/userinfopage/UserInfoPage";
import LoginPage from "pages/userpage/loginpage/LoginPage";
import RegisterPage from "pages/userpage/registerpage/RegisterPage";
import BoardPage from "pages/boardpage/BoardPage";
import AttractionPage from "pages/attractionpage/AttractionPage";

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
                        
                        {/* <Route path="/user/info" element={<UserInfoPage />} /> */}
                        <Route path="/user/login" element={<LoginPage />} />
                        <Route path="/user/register" element={<RegisterPage />} />
                    </Route>

                    <Route path="/attraction" element={<AttractionPage />} />

                    <Route path="/board" element={<BoardPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;