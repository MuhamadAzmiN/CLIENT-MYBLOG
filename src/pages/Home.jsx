
import { Tag } from "lucide-react";
import BreadcrumbNav from "@/layout/Breadcrumb";
import FormCreatePost from "@/components/FormCreatePost";
import { usePostStore } from "@/store/usePostStore";
import {  useEffect } from "react";




const Home = () => {
  const { posts, getPost } = usePostStore();
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
          <FormCreatePost />
          {posts.map((post, index) => (
            <article 
              key={index}
              className="border-b border-gray-800 pb-12 last:border-b-0"
            >
              <a href="/detail" className="block group">
                <h2 className="text-2xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-2">
                  <span>{post.timeAgo}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                {post.description && (
                  <p className="text-gray-400 mb-3">
                    {post.description}
                  </p>
                )}
                <div className="flex items-center text-sm text-gray-400">
                  <Tag className="h-4 w-4 mr-2" />
                  <span>{post.tagCount}</span>
                </div>
              </a>
            </article>
          ))}
        </div>
     
      </main>

    </div>
  );
};



export default Home;

