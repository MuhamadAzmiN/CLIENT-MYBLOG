import { axiosInstance } from "@/lib/axios";
import { create } from "zustand";


export const useCategoryStore = create((set) => ({
    categories : [],


    getCategory : async () =>  {
        try {
            const res = await axiosInstance.get("/api/categories")
            console.log(res.data)
            set({categories : res.data})
        
        }catch(e){
            
            console.log(e)
        }
        
    },
}))