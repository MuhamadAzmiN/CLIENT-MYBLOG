import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useAuthStore } from "@/store/useAuthStore"
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
import { useEffect, useState } from "react"
import { Camera, Upload } from "lucide-react"
import toast from "react-hot-toast"
import ProfileSkeleton from "@/components/ProfileSleleton"

export default function Profile() {
    const { authUser, userPost , updateImageProfile, profile, loading} = useAuthStore()
    const [selectedImage, setSelectedImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    useEffect(() => {
        profile()
      }, [profile]);
       
    useEffect(() => {
        console.log(userPost);
      }, [userPost]);


  
    const handleImageSelect = async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        
         const reader = new FileReader();

        reader.readAsDataURL(file);
        setPreviewUrl(URL.createObjectURL(file));
        reader.onload = () => {
            const base64Image = reader.result;
            setSelectedImage(base64Image); // Set the selected image as Base64
        };
    };
  
    const handleSubmit = async() => {
        if (!selectedImage) {
            toast.error("Please select an image");
            return;
          }
          const loadingToast = toast.loading("Updating profile picture...");
          try {
            await updateImageProfile({ image: selectedImage });
            console.log("Profile picture updated successfully");
            toast.success("Profile picture updated successfully");
            toast.dismiss(loadingToast);
          } catch (error) {
            console.error("Error updating profile picture:", error);
          }
      };  


      useEffect(() => {
        selectedImage
      }, [selectedImage]);


    return (
        


        <div className="min-h-[100dvh] bg-dark">
            {loading && <ProfileSkeleton /> }
            <header className="pt-20 pb-12 px-4">
                <div className="max-w-5xl mx-auto text-center">
                <div className="relative mb-8">
                    {/* Profile Banner */}
                    <div className="relative w-full h-48 rounded-lg overflow-hidden">
                        <img
                        src="https://c4.wallpaperflare.com/wallpaper/158/774/427/anime-studio-ghibli-spirited-away-wallpaper-preview.jpg"
                        alt="Profile Banner"
                        className="object-cover w-full h-full"
                        />
                        {/* Optional gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r "></div>
                    </div>

                    {/* Profile Avatar */}
                    <div className="relative flex justify-center -mt-16">
                        <Avatar className="h-32 w-32 border-4 border-white dark:border-gray-800 shadow-lg rounded-full">
                        <AvatarImage
                            src={authUser?.image}
                            alt="@shadcn"
                            className="object-cover rounded-full"
                        />
                        <AvatarFallback className="text-2xl font-semibold text-gray-700 bg-gray-200">
                            {authUser?.username?.charAt(0)}
                        </AvatarFallback>
                        </Avatar>
                    </div>
                    </div>

                                        
                    <h1 className="text-3xl font-bold mb-2">{authUser?.username}</h1>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">{authUser?.profesi}</p>
                    
                    <div className="flex justify-center gap-4 mb-8">

                    <AlertDialog>
                            <AlertDialogTrigger>
                            <Button variant="outline" className="px-6">
                                <Camera className="w-4 h-4 mr-2" />
                                Edit Photo
                            </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent className="max-w-md">
                            <AlertDialogHeader>
                                <AlertDialogTitle className="flex items-center gap-2">
                                <Camera className="w-5 h-5" />
                                Change Profile Picture
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                Upload a new profile picture. The image should be square and at least 200x200 pixels.
                                </AlertDialogDescription>
                            </AlertDialogHeader>

                            <div className="flex flex-col items-center gap-6 py-4">
                                <div className="relative w-32 h-32 rounded-full overflow-hidden bg-gray-100">
                                {previewUrl ? (
                                    <img 
                                    src={previewUrl} 
                                    alt="Profile preview" 
                                    className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <img 
                                    src="/api/placeholder/200/200" 
                                    alt="Default profile" 
                                    className="w-full h-full object-cover"
                                    />
                                )}
                                </div>

                                <div className="flex flex-col items-center gap-2 mb-5">
                                <label htmlFor="image-upload" className="cursor-pointer">
                                    <div className="flex items-center gap-2 px-4 py-2 border rounded-md">
                                    <Upload className="w-4 h-4" />
                                    <span>Choose Image</span>
                                    </div>
                                    <input
                                    id="image-upload"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageSelect}
                                    className="hidden"
                                    />
                                </label>
                                {selectedImage && (
                                    <span className="text-sm text-gray-500">
                                    {selectedImage.name}
                                    </span>
                                )}
                                </div>
                            </div>

                            <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction type="submit" onClick={handleSubmit}>Save Changes</AlertDialogAction>
                            </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                        <Button className="px-6">Follow</Button>
                    </div>
                    
                    <div className="flex justify-center gap-12">
                        <div className="text-center">
                            <p className="text-2xl font-bold">{userPost?.length || 0}</p>
                            <p className="text-gray-600 dark:text-gray-400">Posts</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold">2.5K</p>
                            <p className="text-gray-600 dark:text-gray-400">Followers</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold">1.8K</p>
                            <p className="text-gray-600 dark:text-gray-400">Following</p>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-4 pb-12">
                <Tabs defaultValue="posts" className="w-full">
                  

                    <TabsContent value="posts">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {userPost.map((post) => (
                                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                                    <CardHeader>
                                        <CardTitle className="text-xl">{post.title}</CardTitle>
                                        <CardDescription className="line-clamp-2">{post.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <img
                                            src={post.content}
                                            alt="Blog post cover"
                                            className="rounded-lg object-cover w-full aspect-video hover:opacity-90 transition-opacity"
                                        />
                                    </CardContent>
                                    <CardFooter>
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <CalendarDaysIcon className="h-4 w-4" />
                                            <span>May 15, 2023</span>
                                        </div>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="followers">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {Array.from({ length: 6 }).map((_, index) => (
                                <Card key={index} className="hover:shadow-md transition-shadow">
                                    <CardContent className="flex items-center gap-4 p-6">
                                        <Avatar className="h-16 w-16">
                                            <AvatarImage src="/placeholder-user.jpg" alt="User" />
                                            <AvatarFallback>US</AvatarFallback>
                                        </Avatar>
                                        <div className="flex-1">
                                            <h4 className="text-lg font-medium mb-1">User Name</h4>
                                            <p className="text-gray-500 dark:text-gray-400">Professional Title</p>
                                        </div>
                                        <Button variant="outline" size="sm">
                                            Follow
                                        </Button>
                                    </CardContent>
                                </Card>
                                
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="following">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {Array.from({ length: 6 }).map((_, index) => (
                                <Card key={index} className="hover:shadow-md transition-shadow">
                                    <CardContent className="flex items-center gap-4 p-6">
                                        <Avatar className="h-16 w-16">
                                            <AvatarImage src="/placeholder-user.jpg" alt="User" />
                                            <AvatarFallback>US</AvatarFallback>
                                        </Avatar>
                                        <div className="flex-1">
                                            <h4 className="text-lg font-medium mb-1">User Name</h4>
                                            <p className="text-gray-500 dark:text-gray-400">Professional Title</p>
                                        </div>
                                        <Button variant="outline" size="sm">
                                            Unfollow
                                        </Button>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </main>
        </div>
    )
}

function CalendarDaysIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M8 2v4" />
            <path d="M16 2v4" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M3 10h18" />
            <path d="M8 14h.01" />
            <path d="M12 14h.01" />
            <path d="M16 14h.01" />
            <path d="M8 18h.01" />
            <path d="M12 18h.01" />
            <path d="M16 18h.01" />
        </svg>
    )
}