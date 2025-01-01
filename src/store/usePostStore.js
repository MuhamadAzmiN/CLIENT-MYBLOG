import { create } from "zustand";
import { axiosInstance } from "@/lib/axios";
import toast from "react-hot-toast";
export const usePostStore = create((set) => ({
    posts: [],
    loading : false,
    error: null,

    // Mengambil data post dari API
    getPost: async () => {
        set({ loading: true });
        try {
            // await new Promise((resolve) => setTimeout(resolve, 1000)); // testing  skeleton
            const res = await axiosInstance.get("/api/posts");
            console.log(res.data);
            set({ posts: res.data, loading: false });
            console.log(`Berhasil mengambil data posts`);
        } catch (e) {
            set({ error: e, loading: false });
            console.log(e);
        }
    },


    detailPost : async (id) =>  {
        set({ loading: true });
        try {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            const res = await axiosInstance.get(`/api/posts/${id}`)
            console.log(res.data);
            set({ posts : res.data, loading: false });
            console.log(`Berhasil mengambil data posts`);
            
        }catch(e){
            set({ error: e, loading: false });
            console.log(e);
        }
    },

    // Membuat post baru dan memperbarui posts
    createPost: async (post) => {
        try {
            console.log(post);
            const res = await axiosInstance.post("/api/posts", post);
            
            // Jika berhasil, perbarui posts dan panggil getPost untuk mengambil data terbaru
            set((state) => ({ posts: [...state.posts, res.data] }));
            
            // Ambil ulang data terbaru setelah menambah post baru
            await usePostStore.getState().getPost();  // Memanggil getPost untuk mengambil data terbaru
            console.log(`Post berhasil dibuat`);
        } catch (e) {
            toast.error(e.response.data.message);
        }
    },
    


   
}));


