import { axiosInstance } from "@/lib/axios";
import { create } from "zustand";
import toast from "react-hot-toast"


export const useAuthStore = create((set) => ({
    authUser: null,
    isSigningUp: false,
    isLoggingIn: false,
    isCheckingAuth: true,



    checkAuth : async () => {
        try {
          const res = await axiosInstance.get("/api/check-auth");
          set({ authUser: res.data });
        } catch (error) {
          console.log("Error in checkAuth:", error);
          set({ authUser: null });
        } finally {
          set({ isCheckingAuth: false });
        }
    },

    register : async (data) =>  {
        set({isSigningUp : true})
        try {
            const res = await axiosInstance.post("/api/register", data)
            console.log(res);
            set({authUser : res.data})
            toast.success("Account created successfully")
            console.log(`Berhasil`)
        }catch(e){
            toast.error(e.response.data.message)
        }finally{
            set({isSigningUp : false})
        }
    },


    login : async (data) =>  {
        set({isLoggingIn : true})
        try {
            const res = await axiosInstance.post("/api/login", data)
            console.log(res);
            set({authUser : res.data})
            toast.success("Login successfully")
            console.log(`Berhasil`)
        }catch(e){
            toast.error(e.response.data.message)
        }finally{
            set({isLoggingIn : false})
        }
    },  


    logout : async () =>  {
        try {
            const res = await axiosInstance.post("/api/logout")
            console.log(res);
            set({authUser : null})
            toast.success("Logout successfully")
            console.log(`Berhasil`)
        }catch(e){
            toast.error(e.response.data.message)
        }
    },
}))