import { useState } from 'react';
import { Edit, Trash2, Plus, Save, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

// interface WikiEntry {
//   id: number;
//   title: string;
//   content: string;
// }
const data = [
  {
    id: 1,
    title: 'Introduction',
    content:
      "In today's digital era, frontend development has evolved far beyond simple HTML and CSS. Modern web interfaces are expected to deliver seamless performance, accessibility, and design consistency across all platforms. This wiki aims to provide practical insights, tools, and techniques that help developers create scalable, maintainable, and visually appealing web applications.",
  },
  {
    id: 2,
    title: 'Understanding Web Performance',
    content:
      'Web performance refers to how quickly a website loads and responds to user interactions. Optimizing performance improves user satisfaction and SEO rankings. Common strategies include code-splitting, lazy loading of images, minimizing JavaScript bundles, and leveraging Content Delivery Networks (CDNs).',
  },
  {
    id: 3,
    title: 'What is a Frontend Cloud?',
    content:
      'A frontend cloud is a managed infrastructure that allows developers to build, deploy, and scale web applications without managing backend servers. It provides automatic builds, continuous deployment, caching, and global edge delivery. Popular examples include Vercel, Netlify, and Cloudflare Pages.',
  },
  {
    id: 4,
    title: 'Version Control Best Practices',
    content:
      'Version control systems like Git enable teams to collaborate efficiently. Best practices include writing clear commit messages, using feature branches, performing code reviews before merging, and tagging stable releases. Maintaining a clean Git history helps in project scalability and debugging.',
  },
  {
    id: 5,
    title: 'Responsive Design Principles',
    content:
      'Responsive design ensures that websites adapt to various screen sizes and devices. Developers achieve this using fluid grids, flexible images, and CSS media queries. Tools like Chrome DevTools and online testing platforms assist in validating responsiveness across different viewports.',
  },
  {
    id: 6,
    title: 'Accessibility in Web Design',
    content:
      'Accessibility ensures that people with disabilities can use web applications effectively. Developers should use semantic HTML, ARIA labels, and maintain sufficient color contrast. Testing with screen readers and following WCAG guidelines improves usability for all users.',
  },
  {
    id: 7,
    title: 'Introduction to Progressive Web Apps (PWAs)',
    content:
      'Progressive Web Apps combine the best of web and mobile experiences. They work offline, send push notifications, and can be installed on user devices. PWAs use service workers and manifest files to enhance reliability and engagement.',
  },
  {
    id: 8,
    title: 'State Management in React',
    content:
      'State management controls how data flows and updates across React components. Developers use tools like Context API, Redux, or Zustand for predictable state updates. Proper management improves performance and prevents inconsistent UI behavior.',
  },
  {
    id: 9,
    title: 'Introduction to APIs',
    content:
      'APIs allow different software systems to communicate. In frontend development, APIs provide data to render dynamic content. REST and GraphQL are the most common API styles, each offering unique advantages for data fetching and flexibility.',
  },
  {
    id: 10,
    title: 'Security in Frontend Applications',
    content:
      'Frontend security involves preventing attacks like XSS, CSRF, and clickjacking. Developers should sanitize user input, use HTTPS, and manage authentication tokens securely. Frameworks like Next.js offer built-in protections for many common vulnerabilities.',
  },
  {
    id: 11,
    title: 'Automated Testing Basics',
    content:
      'Testing ensures application reliability and prevents regressions. Unit, integration, and end-to-end tests validate different layers of functionality. Tools such as Jest, Mocha, and Cypress are popular for frontend testing automation.',
  },
  {
    id: 12,
    title: 'Using GitHub for Collaboration',
    content:
      'GitHub provides a collaborative environment for developers through pull requests, issues, and project boards. Teams can automate workflows using GitHub Actions, perform code reviews, and track project progress in real time.',
  },
  {
    id: 13,
    title: 'Continuous Integration and Deployment (CI/CD)',
    content:
      'CI/CD automates the process of testing, building, and deploying applications. Popular tools include GitHub Actions, Jenkins, and GitLab CI. Automation reduces human error and ensures consistent delivery of high-quality code.',
  },
  {
    id: 14,
    title: 'Caching Strategies for Web Apps',
    content:
      'Caching improves performance by storing frequently accessed resources locally. Techniques include browser caching, CDN caching, and service worker caching for offline use. Proper cache invalidation ensures users always receive the latest version.',
  },
  {
    id: 15,
    title: 'Optimizing Images for the Web',
    content:
      'Images can significantly impact page load time. Developers should compress images, use modern formats like WebP or AVIF, and serve appropriate resolutions using the `<picture>` element or responsive attributes like `srcset`.',
  },
  {
    id: 16,
    title: 'Conclusion',
    content:
      'Modern frontend development requires balancing performance, design, and accessibility. By leveraging cloud platforms, automation tools, and emerging web standards, developers can deliver exceptional user experiences at scale.',
  },
];


const Wiki = () => {
  const scrollToSection = (id: number) => {
    const element = document.getElementById(`section-${id}`);
    if (element) {
      const headerOffset = 120; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen pt-20 flex flex-col md:flex-row px-4 md:px-8" style={{width:'100%', maxWidth:'1200px', margin:'25px auto'}}>
      {/* Desktop sidebar */}
      <div className="sidebar hidden md:block md:sticky md:top-28 mb-6 md:mb-0 md:border-r border-gray-600"
       style={{width:"100%", maxWidth:"250px", paddingBottom:20 , height:"auto", maxHeight:"calc(100vh - 120px)", overflow:"auto"}}>
        <h4 className="px-2 pb-4 font-semibold">Contents</h4>
        {data.map((entry) => (
          <div key={entry.id} className="wiki-entry p-1">
            <a 
              className="mb-0 cursor-pointer transition-colors duration-200 block px-2 py-1 rounded" 
              style={{fontSize:14, color:'gray'}}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'white';  }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'gray';  }}
              onClick={() => scrollToSection(entry.id)}
            >
              {entry.title}
            </a>
          </div>
        ))}
      </div>
      
      <div className="content w-full md:pl-8">
        
        {data.map((entry) => (
          <div 
            key={entry.id} 
            id={`section-${entry.id}`}
            className="wiki-entry-content p-2" 
            style={{marginBottom:40, width:'100%', maxWidth:800}}
          >
            <h2 className="text-xl md:text-2xl pb-3">{entry.title}</h2>
            <p className="text-sm md:text-base">{entry.content}</p>
          </div>
        ))}
      </div>
      {/* <p>zakaaria</p> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Wiki;
