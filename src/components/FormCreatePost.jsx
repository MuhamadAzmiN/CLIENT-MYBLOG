
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useCategoryStore } from "@/store/useCategoryStore";
import { usePostStore } from "@/store/usePostStore";
import {  useEffect, useState } from "react";
import { toast } from "react-hot-toast";


const FormCreatePost = () => {
    const { categories, getCategory } = useCategoryStore();

    const [formData, setFormData] = useState({
        title : '',
        content : '',
        description : '',
        category : ''
     })

    
  const { createPost } = usePostStore();

  const validateForm = () => {
    if (!formData.title.trim()) return toast.error("Title is required");
    if (!formData.content) return toast.error("Content (file) is required");
    if (!formData.category) return toast.error("Category is required");
  
    return true;
  };
    
    useEffect(() => {
        getCategory();
    },[getCategory])
    
    useEffect(() => {
        console.log(categories)
    },[categories])
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = validateForm();
        await createPost(formData); // Menunggu hasil dari createPost
        toast("Creating Post...");
        if (success === true) {
          toast.success("Post created successfully");
          setFormData({
            title : '',
            content : '',
            description : '',
            category : ''
          })
        }

    

    }
  return (
    <div>
           <AlertDialog>
                  <AlertDialogTrigger asChild>
                   <a className="cursor-pointer" > Create Post</a>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Create a new Blog</AlertDialogTitle>
                      <AlertDialogDescription>
                      <div className="mb-4">
        
                      <form onSubmit={handleSubmit}>
                          <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                              <Label htmlFor="name">Name</Label>
                              <Input value={formData.title} onChange={(e) => setFormData({...formData, title : e.target.value})} id="name" placeholder="Name of your project" />
                            </div>
                      
                            <Label htmlFor="description">Description</Label>
                            <Textarea value={formData.description} onChange={(e) => setFormData({...formData, description : e.target.value})} id="description" placeholder="Description of your blog" />
                            <div className="grid w-full max-w-sm items-center gap-1.5">
                              <Label htmlFor="picture">Picture</Label>
                              <Input
                                id="content"
                                type="file"
                                onChange={(e) => {
                                  const file = e.target.files[0];
                                  const reader = new FileReader();
        
                                  reader.onloadend = () => {
                                    setFormData({ ...formData, content: reader.result }); // reader.result adalah base64
                                  };
        
                                  if (file) {
                                    reader.readAsDataURL(file);
                                  }
                                }}
                              />
        
                            </div>
        
        
                            <div className="flex flex-col space-y-1.5">
                              <Label htmlFor="category">Catergory</Label>
                              <Select value={formData.category || undefined} onValueChange={(e) => setFormData({...formData, category: e})}>
                              <SelectTrigger id="categoryId">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent position="popper">
                                {categories.map((category) => (
                                  <SelectItem key={category.id} value={category.name}>
                                    {category.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
        
                            </div>
                          </div>
                    <AlertDialogFooter className="mt-5">
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction type="submit" >Continue</AlertDialogAction>
                    </AlertDialogFooter>
                        </form>
                      </div>
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                  </AlertDialogContent>
                </AlertDialog>
    </div>
  )
}

export default FormCreatePost
