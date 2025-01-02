
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";

const ProfileSkeleton = () => {
  return (
    <div className="min-h-[100dvh] bg-dark animate-pulse">
      <header className="pt-20 pb-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Banner Skeleton */}
          <div className="relative mb-8">
            <div className="relative w-full h-48 rounded-lg bg-gray-200 dark:bg-gray-800" />
            
            {/* Avatar Skeleton */}
            <div className="relative flex justify-center -mt-16">
              <div className="h-32 w-32 rounded-full bg-gray-300 dark:bg-gray-700 border-4 border-white dark:border-gray-800" />
            </div>
          </div>
          
          {/* Name and Title Skeletons */}
          <div className="space-y-3">
            <div className="h-8 w-48 bg-gray-200 dark:bg-gray-800 rounded mx-auto" />
            <div className="h-4 w-32 bg-gray-200 dark:bg-gray-800 rounded mx-auto" />
          </div>
          
          {/* Action Buttons Skeleton */}
          <div className="flex justify-center gap-4 my-8">
            <div className="h-10 w-32 bg-gray-200 dark:bg-gray-800 rounded" />
            <div className="h-10 w-24 bg-gray-200 dark:bg-gray-800 rounded" />
          </div>
          
          {/* Stats Skeleton */}
          <div className="flex justify-center gap-12">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="text-center space-y-2">
                <div className="h-8 w-16 bg-gray-200 dark:bg-gray-800 rounded mx-auto" />
                <div className="h-4 w-20 bg-gray-200 dark:bg-gray-800 rounded mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Content Skeleton */}
      <main className="max-w-6xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <Card key={i} className="overflow-hidden">
              <CardHeader>
                <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-800 rounded mb-2" />
                <div className="h-4 w-full bg-gray-200 dark:bg-gray-800 rounded" />
              </CardHeader>
              <CardContent>
                <div className="w-full aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg" />
              </CardContent>
              <CardFooter>
                <div className="h-4 w-32 bg-gray-200 dark:bg-gray-800 rounded" />
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProfileSkeleton;