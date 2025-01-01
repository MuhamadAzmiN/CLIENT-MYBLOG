
const DetailSkeleton = () => {
  return (
    <article className="space-y-8 animate-pulse">
  <header className="space-y-6">
    <div className="h-10 bg-gray-800 rounded w-3/4"></div>
    <div className="flex items-center space-x-3 text-gray-400">
      <div className="h-4 bg-gray-800 rounded w-16"></div>
      <span>•</span>
      <div className="h-4 bg-gray-800 rounded w-16"></div>
    </div>
  </header>

  {/* Featured Image */}
  <figure className="space-y-4">
    <div className="w-full h-64 bg-gray-800 rounded-lg"></div>
    <figcaption className="flex items-center space-x-2 text-sm text-gray-400 italic">
      <div className="h-4 bg-gray-800 rounded w-6"></div>
      <div className="h-4 bg-gray-800 rounded w-24"></div>
    </figcaption>
  </figure>

  {/* Article Content */}
  <div className="prose prose-invert prose-lg max-w-none space-y-4">
    <div className="h-6 bg-gray-800 rounded w-5/6"></div>
    <div className="h-6 bg-gray-800 rounded w-4/5"></div>
    <div className="h-6 bg-gray-800 rounded w-3/4"></div>
  </div>
</article>

  )
}

export default DetailSkeleton
