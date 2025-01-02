
import BreadcrumbNav from "@/layout/Breadcrumb";
import { usePostStore } from "@/store/usePostStore";
import {  useEffect } from "react";
import HomeSkeleton from "@/components/HomeSkeleton";
import { formatPostDate, formatPostTime} from "../lib/utils"


const Home = () => {
  const { posts, getPost, loading } = usePostStore();
  useEffect(() => {
    getPost();
  }, [getPost]);
  return (
    <div className="min-h-screen bg-dark text-white ">
      {/* Navigation */}
    {/* Blog Posts List */}
    <main className="max-w-2xl mx-auto px-4 mt-16">
        {/* Breadcrumbs */}
        <BreadcrumbNav />

        
        <div className="space-y-12">
        {loading && <HomeSkeleton />}

          {posts.map((post, index) => (
            <article 
              key={index}
              className="border-b border-gray-800 pb-12 last:border-b-0"
            >
              <a href={`/detail/${post.id}`} className="block group">
                <h2 className="text-2xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-2">
                  <span>{post.createdAt ? formatPostDate(post.createdAt) : "No Date"}</span>
                  <span>•</span>
                  <span>{post.createdAt ? formatPostTime(post.createdAt) : "No Time"}</span>
                </div>
                {post.description && (
                  <p className="text-gray-400 mb-3">
                    {post.description}
                  </p>
              )}
                <div className="flex items-center text-sm text-gray-400">
            
                  <span>{post.tagCount}</span>
                </div>
              </a>
            </article>
          ))}

          {posts.length === 0 && (
            <div className="text-gray-400 text-center mt-8">
              <p>No posts found</p>
            </div>
          )}
        </div>
     
      </main>

    </div>
  );
};





export default Home;


