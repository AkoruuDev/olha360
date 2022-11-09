// tools
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/globalStyle";

// components
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

// pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contacts from "./components/pages/Contact";

export default function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Header />
                <Routes>
                    <Main>
                        <Route path={'/'} element={<Home />} />
                        <Route path={'/about'} element={<About />} />
                        <Route path={'/contact'} element={<Contacts />} />
                    </Main>
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}