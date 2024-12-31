import BreadcrumbNav from "@/layout/Breadcrumb";
import { useEffect } from "react";
import { usePostStore } from "@/store/usePostStore";
import { useParams } from "react-router-dom";
const Detail = () => {
  const { id } = useParams();
  const { posts, detailPost, loading } = usePostStore();

  useEffect(() => {
    detailPost(id);
  }, [id, detailPost]);
  




  return (
    <div className="min-h-screen bg-dark">
      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 mt-16">
      <BreadcrumbNav />
        {/* Article Header */}
        <article className="space-y-8">
          <header className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {posts.title}
            </h1>
            
            <div className="flex items-center space-x-3 text-gray-400">
              <span>1 year ago</span>
              <span>•</span>
              <span>10 min read</span>
            </div>
          </header>

          {/* Featured Image */}
          <figure className="space-y-4">
            <img
              src={posts.content}
              className="w-full rounded-lg"
            />
            <figcaption className="text-sm text-gray-400 italic">
              <span className="text-xs uppercase mr-2">PL</span>
             {posts.author?.username}
            </figcaption>
          </figure>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed">
              {posts.description}
            </p>
            
            {/* Additional content would go here */}
          </div>
        </article>
      </main>
    </div>
  );
};

export default Detail;