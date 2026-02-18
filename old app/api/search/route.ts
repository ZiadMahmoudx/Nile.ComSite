import { NextResponse } from 'next/server';

// Corrected search data with only existing URLs
const searchData = [
  // Main pages
  {
    title: 'Home',
    description: 'Return to the homepage of NILE.COM',
    url: '/',
  },
  {
    title: 'About Our Company',
    description: 'Learn more about our company history, values, mission, and the team behind our success.',
    url: '/about',
  },
  {
    title: 'IT Solutions',
    description: 'Explore our comprehensive IT solutions including infrastructure, security, and cloud services.',
    url: '/solutions',
  },
  {
    title: 'IT Services',
    description: 'Discover our managed services, consulting, and technical support offerings.',
    url: '/services',
  },
  {
    title: 'Technology Partners',
    description: 'Learn about our partnerships with leading technology vendors.',
    url: '/partners',
  },
  {
    title: 'Contact Us',
    description: 'Get in touch with our team for sales inquiries, support requests, or general questions.',
    url: '/contact',
  },
  {
    title: 'Careers',
    description: 'Join our team of IT professionals and help us deliver innovative solutions to our clients.',
    url: '/careers',
  },
  {
    title: 'News & Events',
    description: 'Stay updated with our latest company news, industry insights, and upcoming events.',
    url: '/news',
  },
  {
    title: 'Case Studies',
    description: 'Read success stories and case studies of how we\'ve helped businesses transform.',
    url: '/case-studies',
  },
  
  // Additional content for better search coverage
  {
    title: 'Enterprise Software Solutions',
    description: 'Custom software development and enterprise application services for businesses.',
    url: '/services',
  },
  {
    title: 'Network Security',
    description: 'Comprehensive security solutions to protect your business from cyber threats.',
    url: '/solutions',
  },
  {
    title: 'Cloud Migration',
    description: 'Seamless migration of your applications and data to cloud platforms.',
    url: '/solutions',
  },
  {
    title: 'IT Support',
    description: '24/7 technical support and helpdesk services for your business.',
    url: '/services',
  },
  {
    title: 'IT Consulting',
    description: 'Expert advice to optimize your IT strategy and infrastructure.',
    url: '/services',
  },
  {
    title: 'Server Solutions',
    description: 'Optimize your server infrastructure with our virtualization solutions.',
    url: '/solutions',
  },
  {
    title: 'Network Infrastructure',
    description: 'Design and implementation of scalable, secure network architectures.',
    url: '/solutions',
  },
  {
    title: 'Business Continuity',
    description: 'Ensure your business can continue operating during disruptions.',
    url: '/solutions',
  },
  {
    title: 'IT Training',
    description: 'Professional training programs for your team to maximize technology value.',
    url: '/services',
  },
  {
    title: 'Microsoft Services',
    description: 'Expert services for Microsoft technologies including Azure and Office 365.',
    url: '/partners',
  },
  {
    title: 'AWS Cloud',
    description: 'Leverage Amazon Web Services with our certified experts.',
    url: '/partners',
  },
  {
    title: 'Documentation',
    description: 'Access our knowledge base, guides, and resources.',
    url: '/docs',
  },
  {
    title: 'Privacy Policy',
    description: 'Read our privacy policy and how we protect your data.',
    url: '/privacy',
  },
  {
    title: 'Terms of Service',
    description: 'Our terms and conditions for using our website and services.',
    url: '/terms',
  },
  {
    title: 'Cookie Policy',
    description: 'Information about how we use cookies on our website.',
    url: '/cookies',
  },
  {
    title: 'System Status',
    description: 'Check the current status of our services and infrastructure.',
    url: '/status',
  },
  {
    title: 'Support',
    description: 'Get technical support for our services and products.',
    url: '/support',
  },
  {
    title: 'Our Team',
    description: 'Meet the leadership team and professionals behind our success.',
    url: '/team',
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  if (!query) {
    return NextResponse.json([]);
  }

  // Filter results based on query
  const results = searchData.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
  );

  // Sort results by relevance (simple implementation)
  results.sort((a, b) => {
    const aTitleMatch = a.title.toLowerCase().includes(query.toLowerCase()) ? 1 : 0;
    const bTitleMatch = b.title.toLowerCase().includes(query.toLowerCase()) ? 1 : 0;
    
    // Prioritize exact matches in title
    const aExactTitle = a.title.toLowerCase() === query.toLowerCase() ? 1 : 0;
    const bExactTitle = b.title.toLowerCase() === query.toLowerCase() ? 1 : 0;
    
    if (aExactTitle !== bExactTitle) {
      return bExactTitle - aExactTitle;
    }
    
    // Prioritize title matches over description matches
    if (aTitleMatch !== bTitleMatch) {
      return bTitleMatch - aTitleMatch;
    }
    
    // Then sort by length (shorter titles might be more relevant)
    return a.title.length - b.title.length;
  });

  // Limit to top 10 results
  return NextResponse.json(results.slice(0, 10));
}