import { Route, Routes, BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./Styles/GlobalStyle.style";
import Layout from "./Components/Layout";
import Suggest from "./Pages/Suggest";
import SuggestModify from "./Pages/Suggest/Modify";
import SuggestUpload from "./Pages/Suggest/Upload";
import MealTime from "./Components/MealTime/MealTime";
import BreakfastList from "./Components/MealList/BreakfastList";
import LunchList from "./Components/MealList/LunchList";
import DinnerList from "./Components/MealList/DinnerList";
import AllergyNotification from "./Components/AllergyNotification/AllergyNotification";
import NoAllergy from "./Components/AllergyNotification/NoAllergy";
import { PhotoVote } from "./Components/PhotoVote";
import TabBar from "./Components/TabNavigation/TabBar";
import DonutGraph from "./Components/DonutGraph";
import { CompletePhotoVote } from "./Components/CompletePhotoVote";
import { Header } from "./Components/Header";
import LoginPage from "./page/loginPage";
import VotePage from "./page/votePage";
import { NoticePage } from "./Pages/NoticePage";
import { MySuggestPage } from "./Pages/MySuggestPage";
import { Logout } from "./Components/Logout";

function router() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/suggest" element={<Suggest />} />
          <Route path="/suggestModify" element={<SuggestModify />} />
          <Route path="/suggestUpload" element={<SuggestUpload />} />
          <Route path="/notice" element={<NoticePage />} />
          <Route path="/mysuggest" element={<MySuggestPage />} />
        </Route>
        <Route path="/donut" element={<DonutGraph />} />
        <Route path="/photoVote" element={<PhotoVote />} />
        <Route path="/CompletePhotoVote" element={<CompletePhotoVote />} />
        <Route path="/MealTime" element={<MealTime />} />
        <Route path="/BreakfastList" element={<BreakfastList />} />
        <Route path="/LunchList" element={<LunchList />} />
        <Route path="/DinnerList" element={<DinnerList />} />
        <Route path="/AllergyNotification" element={<AllergyNotification />} />
        <Route path="/NoAllergy" element={<NoAllergy />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/tab" element={<TabBar />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<VotePage />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default router;
