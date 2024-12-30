import BreadcrumbNav from "@/layout/Breadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
const About = () => {
  return (
    <div className="min-h-screen bg-dark">
      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 mt-16">
      <BreadcrumbNav />
        {/* Article Header */}
        <article className="space-y-8">
          <header className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              About Me
            </h1>
            
          </header>

          {/* Featured Image */}
      

          {/* Article Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed">
            Hello, I'm  Muhamad Azmi Naziyulloh, an experienced Senior Full Stack Developer based in Guadalajara, Mexico. I'm always ready to take on new challenges and explore new technologies.
            </p>
                   
            {/* Additional content would go here */}
          </div>
          <hr />
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-gray-300 text-lg leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro praesentium ipsam corporis magnam ullam necessitatibus qui, fuga facere, fugiat consectetur at! Itaque repellat earum fuga quo aspernatur quam, similique quasi maxime esse modi vero atque accusantium aliquid laboriosam eum corporis, est molestias? Voluptatum, ratione? Possimus iste, sed magni, corporis at accusantium autem voluptatem repellendus eaque quod unde architecto earum molestiae voluptate laborum minus sint amet ipsum? Ducimus est nostrum facilis accusantium libero eaque molestiae autem nam optio quod sit eveniet odit atque cumque laboriosam, itaque dolore tenetur laborum ipsam magnam voluptatum. Voluptate unde suscipit quo laboriosam qui nemo libero cupiditate!
            </p>
                   
            {/* Additional content would go here */}
          </div>
        </article>
        <hr className="my-8" />
        <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      </main>
    </div>
  );
};

export default About