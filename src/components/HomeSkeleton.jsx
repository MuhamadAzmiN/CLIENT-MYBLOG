import { Skeleton } from "@/components/ui/skeleton";

const HomeSkeleton = () => {
  return (
    <div className=" bg-dark text-white">
      <main className="mx-automt-16">
        <div className="space-y-12">
          {[1, 2, 3].map((index) => (
            <article key={index} className="border-b border-gray-800 pb-12 last:border-b-0">
              <div>
                <Skeleton className="h-8 w-3/4 mb-3 bg-gray-800" />
                
                <div className="flex items-center space-x-4 mb-2">
                  <Skeleton className="h-4 w-20 bg-gray-800" />
                  <span>•</span>
                  <Skeleton className="h-4 w-24 bg-gray-800" />
                </div>
                
                <Skeleton className="h-16 w-full mb-3 bg-gray-800" />
                
              
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default HomeSkeleton;