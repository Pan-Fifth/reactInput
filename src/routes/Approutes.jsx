import { Route, Routes } from "react-router";
import Shopping from "../pages/Shopping";
import Form from "../pages/Form";
import LocalUserSearch from "../pages/Search";
import Toggle from "../pages/Toggle";
import ImageSlide from "../pages/ImageSlide";
import Layout from "../components/Layout";

const AppRouter = () => {
    return (

        <Routes>
            <Route path="/" element={<Layout/>}>

                <Route index element={<Form />} />
                <Route path="/cart" element={<Shopping />} />
                <Route path="/search" element={<LocalUserSearch />} />
                <Route path="/image" element={<ImageSlide />} />
                <Route path="/toggle" element={<Toggle />} />

            </Route>
        </Routes>

    )
}

export default AppRouter;
