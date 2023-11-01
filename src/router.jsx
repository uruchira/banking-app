import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import App from "./App";
import HomePage from "./pages/HomePage";
import GoalPage from "./pages/GoalPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<HomePage />} index={true} />
      <Route path="/goals" element={<GoalPage />} />
    </Route>
  )
);

export default router;
