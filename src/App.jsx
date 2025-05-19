import { useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { supabase } from "/src/services/supabaseClient.js";
import HomePage from "/src/Pages/HomePage.jsx";
import DonationsPage from "/src/Pages/DonationsPage.jsx";
import SigninPage from "/src/Pages/SigninPage";
import CheckOutPage from "/src/Pages/CheckOutPage";
import AboutPage from "/src/Pages/AboutPage";
import WorkPage from "/src/Pages/WorkPage";

function ProtectedRoute({ session, children }) {
  if (!session) {
    return <Navigate to="/" replace />;
  }
  return children;
}

function App() {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSession() {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSession(session);
      setLoading(false);
    }
    fetchSession();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/donate", element: <DonationsPage /> },
    { path: "/signin", element: <SigninPage /> },
    {
      path: "/checkout",
      element: (
        <ProtectedRoute session={session}>
          <CheckOutPage />
        </ProtectedRoute>
      ),
    },
    { path: "/about", element: <AboutPage /> },
    { path: "/our-work", element: <WorkPage /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
