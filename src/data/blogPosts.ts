export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: string;
  coverImage: string;
}

export const categories = [
  "All",
  "Web Development",
  "UI/UX Design",
  "Cybersecurity",
  "IoT",
  "Career Tips",
  "Tutorials",
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable React Applications: Best Practices for 2024",
    slug: "building-scalable-react-applications-2024",
    excerpt: "Learn the latest patterns and practices for building maintainable, performant React applications that scale.",
    content: `
# Building Scalable React Applications: Best Practices for 2024

React continues to evolve, and with it, our approaches to building scalable applications. In this comprehensive guide, we'll explore the essential patterns and practices that will help you build maintainable, performant React applications.

## 1. Component Architecture

The foundation of any scalable React application is a well-thought-out component architecture. Here are the key principles:

### Atomic Design Pattern
Break down your UI into atoms, molecules, organisms, templates, and pages. This systematic approach ensures reusability and maintainability.

### Single Responsibility Principle
Each component should do one thing and do it well. If a component is doing too much, it's time to break it down.

## 2. State Management

Choose the right state management solution based on your application's needs:

- **Local State**: Use useState and useReducer for component-specific state
- **Context API**: Perfect for theme, auth, and other app-wide state
- **External Libraries**: Consider Zustand, Redux, or Recoil for complex state logic

## 3. Performance Optimization

Performance is crucial for user experience. Key strategies include:

- Memoization with React.memo, useMemo, and useCallback
- Code splitting and lazy loading
- Virtual scrolling for large lists
- Image optimization and lazy loading

## 4. Type Safety with TypeScript

TypeScript is no longer optional for large applications. It provides:

- Better IDE support and autocomplete
- Catch errors at compile time
- Self-documenting code
- Easier refactoring

## Conclusion

Building scalable React applications requires discipline and attention to detail. By following these best practices, you'll create applications that are easier to maintain, perform better, and provide a superior user experience.
    `,
    author: {
      name: "Priya Sharma",
      avatar: "PS",
    },
    category: "Web Development",
    tags: ["React", "JavaScript", "Best Practices"],
    publishedAt: "2024-01-15",
    readTime: "8 min read",
    coverImage: "/placeholder.svg",
  },
  {
    id: "2",
    title: "The Ultimate Guide to Cybersecurity for Web Developers",
    slug: "ultimate-guide-cybersecurity-web-developers",
    excerpt: "Essential security practices every web developer must know to protect their applications and users.",
    content: `
# The Ultimate Guide to Cybersecurity for Web Developers

Security is not an afterthought—it's a fundamental requirement for any web application. This guide covers the essential security practices every developer must implement.

## Common Security Vulnerabilities

### 1. Cross-Site Scripting (XSS)
XSS attacks occur when malicious scripts are injected into trusted websites. Always sanitize user input and use Content Security Policy (CSP) headers.

### 2. SQL Injection
Never trust user input in database queries. Use parameterized queries and ORM tools to prevent SQL injection attacks.

### 3. Cross-Site Request Forgery (CSRF)
Implement CSRF tokens for state-changing operations and verify the origin of requests.

## Best Security Practices

### Authentication & Authorization
- Use industry-standard authentication protocols (OAuth 2.0, JWT)
- Implement proper session management
- Never store passwords in plain text—always hash with bcrypt or similar

### Data Protection
- Use HTTPS everywhere
- Encrypt sensitive data at rest and in transit
- Implement proper access controls

### Security Headers
Configure these essential security headers:
- Content-Security-Policy
- X-Frame-Options
- X-Content-Type-Options
- Strict-Transport-Security

## Conclusion

Security is an ongoing process, not a one-time implementation. Stay updated with the latest vulnerabilities and best practices, conduct regular security audits, and always prioritize user data protection.
    `,
    author: {
      name: "Rajesh Kumar",
      avatar: "RK",
    },
    category: "Cybersecurity",
    tags: ["Security", "Web Development", "Best Practices"],
    publishedAt: "2024-01-10",
    readTime: "12 min read",
    coverImage: "/placeholder.svg",
  },
  {
    id: "3",
    title: "Designing Intuitive User Interfaces: A Complete Guide",
    slug: "designing-intuitive-user-interfaces",
    excerpt: "Master the principles of creating user interfaces that are both beautiful and easy to use.",
    content: `
# Designing Intuitive User Interfaces: A Complete Guide

Great UI design is invisible—users shouldn't have to think about how to use your interface. Let's explore the principles that make interfaces intuitive and delightful.

## Core Principles of Intuitive Design

### 1. Consistency
Maintain consistent patterns throughout your application. Users should be able to predict how elements will behave based on their previous interactions.

### 2. Visual Hierarchy
Use size, color, contrast, and spacing to guide users' attention to the most important elements first.

### 3. Feedback
Every user action should have a visible reaction. Loading states, success messages, and error indicators are crucial.

## The Design Process

### Research Phase
- User interviews and surveys
- Competitor analysis
- User persona creation
- Journey mapping

### Design Phase
- Wireframing
- Prototyping
- Visual design
- Interaction design

### Testing Phase
- Usability testing
- A/B testing
- Accessibility testing
- Performance testing

## Design Systems

Create and maintain a design system to ensure consistency:
- Component library
- Color palette and typography
- Spacing and layout guidelines
- Animation and interaction patterns

## Accessibility Matters

Design for everyone:
- Use sufficient color contrast
- Provide text alternatives for images
- Ensure keyboard navigation works
- Test with screen readers

## Conclusion

Intuitive UI design combines art and science. By following these principles and continuously testing with real users, you'll create interfaces that users love.
    `,
    author: {
      name: "Ananya Patel",
      avatar: "AP",
    },
    category: "UI/UX Design",
    tags: ["UI/UX", "Design", "User Experience"],
    publishedAt: "2024-01-08",
    readTime: "10 min read",
    coverImage: "/placeholder.svg",
  },
  {
    id: "4",
    title: "Getting Started with IoT: From Concept to Prototype",
    slug: "getting-started-iot-concept-to-prototype",
    excerpt: "A beginner-friendly guide to building your first IoT project from scratch.",
    content: `
# Getting Started with IoT: From Concept to Prototype

The Internet of Things (IoT) is revolutionizing how we interact with the physical world. This guide will take you from concept to working prototype.

## What is IoT?

IoT connects physical devices to the internet, enabling them to collect, exchange, and act on data. From smart homes to industrial automation, IoT is everywhere.

## Essential Components

### Hardware
- Microcontrollers (Arduino, ESP32, Raspberry Pi)
- Sensors (temperature, motion, humidity)
- Actuators (motors, LEDs, relays)
- Communication modules (WiFi, Bluetooth, LoRa)

### Software
- Firmware for microcontrollers
- Cloud platforms (AWS IoT, Google Cloud IoT)
- Mobile or web applications
- Data analytics tools

## Building Your First IoT Project

### Step 1: Define Your Problem
What problem are you solving? Start with a clear use case.

### Step 2: Choose Your Hardware
Select components based on your requirements for power consumption, range, and cost.

### Step 3: Set Up Communication
Decide how your device will communicate—WiFi for local networks, LoRa for long-range, or cellular for mobile applications.

### Step 4: Develop the Firmware
Write code to read sensors, process data, and communicate with your cloud platform.

### Step 5: Create the Interface
Build a web or mobile app for users to interact with your device.

## Security Considerations

IoT security is critical:
- Encrypt all communications
- Implement secure boot
- Regular firmware updates
- Strong authentication

## Conclusion

IoT development is an exciting field with endless possibilities. Start small, learn continuously, and don't be afraid to experiment.
    `,
    author: {
      name: "Arjun Mehta",
      avatar: "AM",
    },
    category: "IoT",
    tags: ["IoT", "Hardware", "Tutorial"],
    publishedAt: "2024-01-05",
    readTime: "15 min read",
    coverImage: "/placeholder.svg",
  },
  {
    id: "5",
    title: "How to Land Your First Tech Internship: Insider Tips",
    slug: "land-first-tech-internship-insider-tips",
    excerpt: "Proven strategies and insider tips to help you secure your dream tech internship.",
    content: `
# How to Land Your First Tech Internship: Insider Tips

Landing your first tech internship can feel overwhelming, but with the right approach, you can stand out from the crowd. Here's what actually works.

## Building a Strong Foundation

### Technical Skills
Focus on fundamentals:
- Data structures and algorithms
- At least one programming language proficiently
- Version control (Git)
- Basic understanding of databases

### Projects Matter More Than Grades
Build real projects that solve real problems. Employers want to see what you can create.

## The Application Process

### Craft Your Resume
- Keep it to one page
- Highlight relevant projects and skills
- Use action verbs and quantify achievements
- Tailor it for each application

### Cover Letters That Work
- Research the company
- Explain why you're interested
- Show what you can contribute
- Keep it concise and genuine

## Networking Strategies

### Online Presence
- Maintain an active GitHub profile
- Share your learning journey on LinkedIn
- Contribute to open source projects
- Engage with tech communities

### Offline Networking
- Attend tech meetups and conferences
- Participate in hackathons
- Join campus tech clubs
- Reach out to alumni in tech

## Interview Preparation

### Technical Interviews
- Practice coding problems daily (LeetCode, HackerRank)
- Understand time and space complexity
- Learn to think out loud
- Review fundamental concepts

### Behavioral Interviews
- Prepare STAR format responses
- Research the company culture
- Prepare thoughtful questions
- Show enthusiasm and curiosity

## Common Mistakes to Avoid

1. Applying too late in the recruitment cycle
2. Not following up after interviews
3. Focusing only on big tech companies
4. Neglecting soft skills development
5. Not learning from rejections

## Conclusion

Getting your first internship takes persistence and preparation. Start early, stay consistent, and remember that every "no" brings you closer to a "yes."
    `,
    author: {
      name: "Sneha Reddy",
      avatar: "SR",
    },
    category: "Career Tips",
    tags: ["Career", "Internships", "Job Search"],
    publishedAt: "2024-01-03",
    readTime: "7 min read",
    coverImage: "/placeholder.svg",
  },
  {
    id: "6",
    title: "Modern CSS Techniques You Should Know in 2024",
    slug: "modern-css-techniques-2024",
    excerpt: "Discover the latest CSS features and techniques that will level up your front-end development skills.",
    content: `
# Modern CSS Techniques You Should Know in 2024

CSS has evolved dramatically. Modern CSS offers powerful features that make styling easier and more maintainable. Let's explore the techniques you need to know.

## Container Queries

Finally, we can style elements based on their container's size, not just the viewport:

\`\`\`css
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
\`\`\`

## CSS Grid and Subgrid

Grid has become essential for modern layouts:

\`\`\`css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
\`\`\`

## Custom Properties (CSS Variables)

Create dynamic, theme-able designs:

\`\`\`css
:root {
  --primary-color: #8B0E17;
  --spacing-unit: 8px;
}

.button {
  background: var(--primary-color);
  padding: calc(var(--spacing-unit) * 2);
}
\`\`\`

## Modern Animations

Use CSS for performant animations:

\`\`\`css
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.element {
  animation: fade-in 0.3s ease-out;
}
\`\`\`

## Logical Properties

Write CSS that works for all writing directions:

\`\`\`css
.element {
  margin-inline-start: 1rem; /* Works for both LTR and RTL */
  padding-block: 2rem;
}
\`\`\`

## Conclusion

Modern CSS is powerful and expressive. By mastering these techniques, you'll write cleaner, more maintainable stylesheets that work across all devices and languages.
    `,
    author: {
      name: "Vikram Singh",
      avatar: "VS",
    },
    category: "Web Development",
    tags: ["CSS", "Front-end", "Tutorial"],
    publishedAt: "2024-01-01",
    readTime: "9 min read",
    coverImage: "/placeholder.svg",
  },
];
