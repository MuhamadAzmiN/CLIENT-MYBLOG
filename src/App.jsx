// src/App.js
import { Routes, Route, Navigate } from 'react-router-dom'; // Import Routes dan Route
import Home from './pages/Home'; // Import halaman
import About from './pages/About'; // Import halaman
import Navbar from './layout/Navbar';
import Detail from './pages/Detail';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegiterPage';
import { Toaster } from "react-hot-toast"
import { useAuthStore } from "./store/useAuthStore";
import { useEffect } from 'react';
import { Loader } from "lucide-react"
import Profile from './pages/Profile';



export default function App() {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore();
  
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  console.log(authUser)
  if(isCheckingAuth && !authUser) return (
    <div className="flex justify-center items-center h-screen">
        <Loader className="size-10 animate-spin"></Loader>
    </div>
)
  return (

    <div>  
      <Navbar />
      {/* <BreadcrumbNav /> */}
      
      <Routes>
        
        <Route path="/" element={authUser ? <Home /> : <LoginPage />} />
      <Route path="/about" element={authUser ? <About /> : <LoginPage />} />
        <Route path="/detail/:id" element={authUser ? <Detail /> : <LoginPage />} />
        <Route path='/login' element={!authUser ? <LoginPage /> : <Navigate to="/" />}></Route>
        <Route path='/register' element={!authUser ? <RegisterPage /> : <Navigate to="/" />}></Route>
        <Route path='/profile' element={authUser ? <Profile /> : <LoginPage />}></Route>
      </Routes>
      <Toaster theme="dark"
        toastOptions={{
          style: {
            background: '#333', // Warna gelap
            color: '#fff',      // Warna teks putih
          },
        }} />
    </div>
  );
}

