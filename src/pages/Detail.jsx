import BreadcrumbNav from "@/layout/Breadcrumb";
const Detail = () => {
  return (
    <div className="min-h-screen bg-dark">
      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 mt-16">
      <BreadcrumbNav />
        {/* Article Header */}
        <article className="space-y-8">
          <header className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Stańczyk and the Paradox of the Sad Clown
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
              src="https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?cs=srgb&dl=pexels-christian-heitz-285904-842711.jpg&fm=jpg"
              alt="Stańczyk at a dance in the court of Queen Bona"
              className="w-full rounded-lg"
            />
            <figcaption className="text-sm text-gray-400 italic">
              <span className="text-xs uppercase mr-2">PL</span>
              Jan Matejko - Stańczyk at a dance in the court of Queen Bona after the loss of Smolensk (1862)
            </figcaption>
          </figure>

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed">
              Since some time ago, I have been immersed in contemplating a pictorial work by the
              master Jan Matejko, Stanczyk. Although I often select paintings and reflect on them
              in my writings, I do not claim to be an art analyst. However, I would harbor the desire
              to call myself that someday. What I often think and believe I am is a jester.
            </p>
            
            {/* Additional content would go here */}
          </div>
        </article>
      </main>
    </div>
  );
};

export default Detail;