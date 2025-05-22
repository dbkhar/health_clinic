import React from 'react';
import { blogPosts } from '../data';
import { Calendar } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-4">
            Health Tips & News
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Latest From Our Blog
          </h2>
          <p className="text-gray-600">
            Stay informed with the latest health tips, medical advancements, and wellness advice
            from our expert physicians.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div 
              key={post.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-teal-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                  Health
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  {post.date}
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                
                <a 
                  href="#" 
                  className="inline-flex items-center text-teal-600 font-medium hover:text-teal-800 transition-colors"
                >
                  Read More
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-block px-6 py-3 border border-teal-600 text-teal-600 font-medium rounded-md hover:bg-teal-600 hover:text-white transition-colors"
          >
            View All Articles
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;