
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useAuthStore } from "@/store/useAuthStore";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import AuthImagePattern from "@/components/AuthImagePattern";



export default function LoginPage() {
  const [formData, setFormData] = useState({
    email : '',
    password : ''
  })
  
  const { login, isLoggingIn } = useAuthStore()
  const handleSubmit = async (e) => {
    e.preventDefault();
    login(formData)
  }
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">

      <div className="flex min-h-svh flex-col items-center justify-center">
  
      <Card className="mx-auto max-w-sm ">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>Enter your email and password to login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
  
          <div className="space-y-4">
    
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" value={formData.email} onChange={(e) => setFormData({...formData, email : e.target.value})} type="email" placeholder="m@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="••••••••" type="password" value={formData.password} onChange={(e) => setFormData({...formData, password : e.target.value})} />
            </div>
            <Button type="submit" className="w-full">
            {isLoggingIn ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Loading...
                  </>
                ) : (
                  "Sign in"
                )}  
            </Button>
          </div>
          </form>
        </CardContent>
      </Card>
      </div>

      <AuthImagePattern
        title={"Welcome back!"}
        subtitle={"Sign in to continue your conversations and catch up with your messages."}
      />
      
    </div>
  )
}