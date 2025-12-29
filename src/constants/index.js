import ecommerceImg from "../assets/microservice.png";

export const HERO_CONTENT = 'Java Spring Boot Developer with 1+ years of experience building scalable microservices, event-driven systems, and secure backend APIs. Skilled in Java, Spring Boot, Kafka, Elasticsearch, Docker, MySQL/MongoDB, OAuth2, JWT, and GCP deployment. Passionate about designing robust architectures and delivering high-performance solutions.';

export const ABOUT_TEXT = "I am a dedicated Java Spring Boot Developer with expertise in building production-grade microservices using Spring Cloud, Eureka, and API Gateway. I have hands-on experience implementing authentication systems with JWT + OAuth2, Kafka-based event-driven architectures for OTP, notifications & order workflows, and Elasticsearch for high-performance search engines (<50ms query times). I've designed scalable MySQL schemas using JPA + Hibernate and deployed complete systems on GCP VMs using Docker containers. I thrive in collaborative environments and am passionate about creating efficient, scalable backend solutions.";

export const TECHNOLOGIES = [
  {
    name: "Java",
    icon: "FaJava",
    color: "text-orange-600",
    bgGlow: "rgba(234, 88, 12, 0.3)",
    rating: 10,
    expertise: "Expert",
    description: "Core programming language for enterprise applications",
    whyUse: "Used for building robust, scalable backend systems with strong type safety and excellent performance."
  },
  {
    name: "Spring Boot",
    icon: "SiSpringboot",
    color: "text-green-500",
    bgGlow: "rgba(34, 197, 94, 0.3)",
    rating: 10,
    expertise: "Expert",
    description: "Enterprise-grade Java framework for microservices",
    whyUse: "Rapid development of production-ready microservices with built-in security, monitoring, and cloud support."
  },
  {
    name: "Kafka",
    icon: "SiApachekafka",
    color: "text-white",
    bgGlow: "rgba(255, 255, 255, 0.2)",
    rating: 10,
    expertise: "Expert",
    description: "Distributed event streaming platform",
    whyUse: "Building real-time event-driven architectures for OTP, notifications, and order processing workflows."
  },
  {
    name: "MySQL",
    icon: "SiMysql",
    color: "text-blue-500",
    bgGlow: "rgba(59, 130, 246, 0.3)",
    rating: 9,
    expertise: "Advanced",
    description: "Relational database management system",
    whyUse: "Designing scalable database schemas with JPA/Hibernate for complex e-commerce data relationships."
  },
  {
    name: "Flutter",
    icon: "SiFlutter",
    color: "text-cyan-400",
    bgGlow: "rgba(34, 211, 238, 0.3)",
    rating: 10,
    expertise: "Expert",
    description: "Cross-platform mobile development framework",
    whyUse: "Building beautiful, natively compiled mobile applications for iOS and Android from a single codebase."
  },
  {
    name: "Elasticsearch",
    icon: "SiElasticsearch",
    color: "text-yellow-400",
    bgGlow: "rgba(250, 204, 21, 0.3)",
    rating: 8,
    expertise: "Advanced",
    description: "Distributed search and analytics engine",
    whyUse: "Implementing lightning-fast product search with <50ms query performance for e-commerce platforms."
  },
  {
    name: "Docker",
    icon: "SiDocker",
    color: "text-blue-400",
    bgGlow: "rgba(96, 165, 250, 0.3)",
    rating: 8,
    expertise: "Advanced",
    description: "Container platform for deployment",
    whyUse: "Containerizing microservices for consistent deployment across development, staging, and production."
  },
  {
    name: "React",
    icon: "RiReactjsLine",
    color: "text-cyan-400",
    bgGlow: "rgba(34, 211, 238, 0.3)",
    rating: 7,
    expertise: "Intermediate",
    description: "JavaScript library for building UIs",
    whyUse: "Creating responsive, interactive user interfaces for admin panels and customer storefronts."
  },
  {
    name: "Microservices",
    icon: "FaMicroservices",
    color: "text-purple-500",
    bgGlow: "rgba(168, 85, 247, 0.3)",
    rating: 10,
    expertise: "Expert",
    description: "Distributed architecture pattern",
    whyUse: "Designing scalable, maintainable systems with independent services using Spring Cloud & Eureka."
  }
];

export const PROJECTS = [
  {
    title: "E-Commerce Microservices Platform",
    image: ecommerceImg,
    description: "A production-grade e-commerce platform built with Spring Boot microservices architecture deployed on GCP. Features include Elasticsearch for fast product search, Kafka for OTP, notifications & order events, Circuit Breakers for resilient inter-service communication, Admin panel for product/inventory/category management, and User storefront with cart, checkout & order tracking.",
    technologies: ["Spring Boot", "Kafka", "Elasticsearch", "MySQL", "Docker", "GCP", "React.js"],
    liveLinks: {
      frontend: "http://34.58.229.119:5173",
      swagger: "http://34.58.229.119:8080/swagger-ui/index.html",
      eureka: "http://34.58.229.119:8761",
      kafkaUI: "http://34.58.229.119:8085",
      github: "https://github.com/freaknu/ecommerce"
    }
  },
];

export const EXPERIENCE = [
  {
    role: "Java Developer",
    company: "Optinfocom Pvt. Ltd.",
    location: "Gurugram, Haryana",
    duration: "Sep 2024 – Present",
    responsibilities: [
      "Developed production-grade microservices using Spring Boot, Spring Cloud, Eureka, Gateway",
      "Created full authentication system using JWT + OAuth2",
      "Implemented Kafka producers/consumers for OTP, notifications & order workflow",
      "Built Elasticsearch search engine, improving query performance to <50ms",
      "Integrated Cloudinary for product image uploads",
      "Designed scalable MySQL schemas using JPA + Hibernate",
      "Deployed complete system on GCP VM using Docker containers"
    ]
  }
];

export const CONTACT = {
  address: "Gurugram, Haryana",
  phoneNo: "+91 6205356670",
  email: "pk2239.29.jnv@gmail.com",
};
