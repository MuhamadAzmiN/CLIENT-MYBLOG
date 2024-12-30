
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useAuthStore } from "@/store/useAuthStore";
import { useState } from "react";
import { toast } from "react-hot-toast";
import {Loader2} from "lucide-react";
import AuthImagePattern from "@/components/AuthImagePattern";


export default function RegisterPage() {
  const [formData, setFormData] = useState({
    email: '',
    rayon: '',
    username: '',
    password: '',
  });


  const { register, isSigningUp } = useAuthStore()

  const validateForm = () => {
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!formData.rayon.trim()) return toast.error("Rayon is required");
    if (!formData.username.trim()) return toast.error("Username is required");
    if (!/\S+@\S+\.\S+/.test(formData.email)) return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6) return toast.error("Password must be at least 6 characters");

    return true;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const success = validateForm();

    if (success === true) register(formData);
  };


  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
        
    <div className="flex min-h-svh flex-col items-center justify-center mr-10">

    <Card className="mx-auto max-w-sm ">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Register</CardTitle>
        <CardDescription>Enter your email and password to create to your account</CardDescription>
      </CardHeader>
      <CardContent>
          <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="m@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="rayon">Rayon</Label>
            <Input id="rayon" value={formData.rayon} onChange={(e) => setFormData({ ...formData, rayon: e.target.value })} type="rayon" placeholder="Cibedug 1" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" value={formData.username} onChange={(e) => setFormData({ ...formData, username: e.target.value })} type="username" placeholder="AzmiNazi_" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="••••••••" type="password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} required />
          </div>
          <Button type="submit" className="w-full">
          {isSigningUp ? (
                <>
                  <Loader2 className="size-5 animate-spin" color="black"/>
                  Loading...
                </>
              ) : (
                "Create Account"
              )}
          </Button>
        </div>
          </form>
      </CardContent>
      
    </Card>
    
    </div>
    <AuthImagePattern
        title="Join our community"
        subtitle="Connect with friends, share moments, and stay in touch with your loved ones."
      />
    </div>
    
    
  )
}