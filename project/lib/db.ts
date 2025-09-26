// lib/db.ts
import mysql from 'mysql2/promise';

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: parseInt(process.env.DB_PORT || '3306'),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

let pool: mysql.Pool;

export const getConnection = async () => {
  if (!pool) {
    pool = mysql.createPool(dbConfig);
  }
  return pool;
};

export const initDatabase = async () => {
  const connection = await getConnection();
  
  // Create tables if they don't exist
  const tables = [
    // Users table
    `CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      name VARCHAR(255) NOT NULL,
      role ENUM('admin', 'user') DEFAULT 'user',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      INDEX idx_email (email),
      INDEX idx_role (role)
    )`,
    
    // Services table
    `CREATE TABLE IF NOT EXISTS services (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      slug VARCHAR(255) UNIQUE NOT NULL,
      description TEXT,
      content LONGTEXT,
      image VARCHAR(255),
      technologies JSON,
      featured BOOLEAN DEFAULT FALSE,
      meta_title VARCHAR(255),
      meta_description TEXT,
      meta_keywords TEXT,
      status ENUM('active', 'inactive') DEFAULT 'active',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      INDEX idx_slug (slug),
      INDEX idx_status (status),
      INDEX idx_featured (featured)
    )`,
    
    // Blog posts table
    `CREATE TABLE IF NOT EXISTS blog_posts (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      slug VARCHAR(255) UNIQUE NOT NULL,
      excerpt TEXT,
      content LONGTEXT,
      image VARCHAR(255),
      author VARCHAR(255),
      category VARCHAR(100),
      tags JSON,
      featured BOOLEAN DEFAULT FALSE,
      meta_title VARCHAR(255),
      meta_description TEXT,
      meta_keywords TEXT,
      status ENUM('published', 'draft') DEFAULT 'draft',
      published_at TIMESTAMP NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      INDEX idx_slug (slug),
      INDEX idx_status (status),
      INDEX idx_category (category),
      INDEX idx_published_at (published_at),
      INDEX idx_featured (featured)
    )`,
    
    // Testimonials table
    `CREATE TABLE IF NOT EXISTS testimonials (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      company VARCHAR(255),
      role VARCHAR(255),
      content TEXT NOT NULL,
      image VARCHAR(255),
      rating INT DEFAULT 5,
      featured BOOLEAN DEFAULT FALSE,
      status ENUM('active', 'inactive') DEFAULT 'active',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      INDEX idx_status (status),
      INDEX idx_featured (featured),
      INDEX idx_rating (rating)
    )`,
    
    // Contacts table
    `CREATE TABLE IF NOT EXISTS contacts (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      company VARCHAR(255),
      service VARCHAR(255),
      message TEXT NOT NULL,
      status ENUM('new', 'contacted', 'closed') DEFAULT 'new',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      INDEX idx_email (email),
      INDEX idx_status (status),
      INDEX idx_created_at (created_at)
    )`,
    
    // SEO settings table
    `CREATE TABLE IF NOT EXISTS seo_settings (
      id INT AUTO_INCREMENT PRIMARY KEY,
      page VARCHAR(255) UNIQUE NOT NULL,
      title VARCHAR(255),
      description TEXT,
      keywords TEXT,
      og_title VARCHAR(255),
      og_description TEXT,
      og_image VARCHAR(255),
      schema_markup JSON,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      INDEX idx_page (page)
    )`,
    
    // Site settings table
    `CREATE TABLE IF NOT EXISTS site_settings (
      id INT AUTO_INCREMENT PRIMARY KEY,
      setting_key VARCHAR(255) UNIQUE NOT NULL,
      setting_value TEXT,
      setting_type ENUM('text', 'textarea', 'json', 'boolean') DEFAULT 'text',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      INDEX idx_setting_key (setting_key)
    )`,

    // Analytics tracking table (optional - for future use)
    `CREATE TABLE IF NOT EXISTS page_views (
      id INT AUTO_INCREMENT PRIMARY KEY,
      page_path VARCHAR(255) NOT NULL,
      user_agent TEXT,
      ip_address VARCHAR(45),
      referrer VARCHAR(255),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      INDEX idx_page_path (page_path),
      INDEX idx_created_at (created_at)
    )`
  ];

  console.log('Creating database tables...');
  
  for (const table of tables) {
    try {
      await connection.execute(table);
    } catch (error) {
      console.error('Error creating table:', error);
    }
  }

  // Insert default admin user if not exists
  try {
    const [adminExists] = await connection.execute(
      'SELECT id FROM users WHERE email = ?',
      [process.env.ADMIN_EMAIL || 'admin@f24tech.com']
    );

    if ((adminExists as any[]).length === 0) {
      const bcrypt = require('bcryptjs');
      const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD || 'admin123', 12);
      
      await connection.execute(
        'INSERT INTO users (email, password, name, role) VALUES (?, ?, ?, ?)',
        [process.env.ADMIN_EMAIL || 'admin@f24tech.com', hashedPassword, 'Admin', 'admin']
      );
      console.log('Default admin user created');
    }
  } catch (error) {
    console.error('Error creating admin user:', error);
  }

  // Insert default SEO settings
  const defaultSeoPages = [
    {
      page: 'home',
      title: 'F24Tech - Leading Technology Solutions Provider | Java, Python, PHP, CRM Development',
      description: 'F24Tech provides comprehensive technology solutions including Java frameworks, JavaScript, Python, PHP development, Zoho, NetSuite implementation, and custom CRM software development in India.',
      keywords: 'f24tech, f24tech softwares, f24tech india, java frameworks, javascript development, python programming, php development, crm software, zoho implementation, netsuite consulting',
      og_title: 'F24Tech - Leading Technology Solutions Provider',
      og_description: 'Expert technology solutions including Java, Python, PHP development and CRM implementation services.',
    },
    {
      page: 'services',
      title: 'Technology Services - Java, Python, PHP, JavaScript Development | F24Tech',
      description: 'Expert technology services including Java Spring Boot, React.js, Angular, Python Django, PHP Laravel development and comprehensive CRM solutions.',
      keywords: 'software development services, java spring boot, react development, python django, php laravel, crm solutions',
      og_title: 'Technology Development Services | F24Tech',
      og_description: 'Comprehensive software development services using cutting-edge technologies.',
    },
    {
      page: 'crm-solutions',
      title: 'CRM Solutions - Zoho, NetSuite, Salesforce Implementation | F24Tech',
      description: 'Professional CRM implementation and customization services including Zoho CRM, NetSuite, Salesforce, HubSpot, and custom CRM development.',
      keywords: 'crm implementation, zoho crm, netsuite, salesforce, hubspot, custom crm development',
      og_title: 'CRM Solutions & Implementation Services | F24Tech',
      og_description: 'Expert CRM implementation services for Zoho, NetSuite, Salesforce and more.',
    },
    {
      page: 'about',
      title: 'About F24Tech - Technology Solutions Company | Our Story',
      description: 'Learn about F24Tech, a leading technology solutions provider specializing in custom software development and CRM implementation services.',
      keywords: 'about f24tech, technology company, software development company, crm consultancy',
      og_title: 'About F24Tech - Your Technology Partner',
      og_description: 'Discover our expertise in delivering cutting-edge technology solutions.',
    },
    {
      page: 'contact',
      title: 'Contact F24Tech - Get in Touch for Technology Solutions',
      description: 'Contact F24Tech for expert technology solutions, software development, and CRM implementation services. Get a free consultation today.',
      keywords: 'contact f24tech, technology consultation, software development inquiry',
      og_title: 'Contact F24Tech - Get Started Today',
      og_description: 'Reach out to discuss your technology needs and get expert solutions.',
    },
    {
      page: 'blog',
      title: 'Technology Blog - Java, Python, PHP, CRM Insights | F24Tech',
      description: 'Stay updated with latest technology trends, development frameworks, CRM solutions, and industry insights from F24Tech experts.',
      keywords: 'technology blog, java tutorials, python tips, php guides, crm insights, software development blog',
      og_title: 'F24Tech Technology Blog',
      og_description: 'Expert insights on software development and CRM solutions.',
    }
  ];

  try {
    for (const seo of defaultSeoPages) {
      const [exists] = await connection.execute(
        'SELECT id FROM seo_settings WHERE page = ?',
        [seo.page]
      );

      if ((exists as any[]).length === 0) {
        await connection.execute(
          `INSERT INTO seo_settings (page, title, description, keywords, og_title, og_description) 
           VALUES (?, ?, ?, ?, ?, ?)`,
          [seo.page, seo.title, seo.description, seo.keywords, seo.og_title, seo.og_description]
        );
      }
    }
    console.log('Default SEO settings created');
  } catch (error) {
    console.error('Error creating SEO settings:', error);
  }

  // Insert default site settings
  const defaultSettings = [
    { key: 'general.siteName', value: 'F24Tech', type: 'text' },
    { key: 'general.siteDescription', value: 'Leading provider of technology solutions', type: 'text' },
    { key: 'general.companyEmail', value: 'info@f24tech.com', type: 'text' },
    { key: 'general.companyPhone', value: '+1 (555) 123-4567', type: 'text' },
    { key: 'general.companyAddress', value: '123 Tech Street, Silicon Valley, CA 94000', type: 'text' },
    { key: 'general.socialLinks', value: JSON.stringify({ facebook: '', twitter: '', linkedin: '', instagram: '', github: '' }), type: 'json' },
    { key: 'notifications.emailNotifications', value: 'true', type: 'boolean' },
    { key: 'notifications.newContactAlert', value: 'true', type: 'boolean' },
    { key: 'notifications.newCommentAlert', value: 'true', type: 'boolean' },
    { key: 'notifications.weeklyReport', value: 'true', type: 'boolean' },
    { key: 'security.twoFactorAuth', value: 'false', type: 'boolean' },
    { key: 'security.sessionTimeout', value: '30', type: 'text' },
    { key: 'security.maxLoginAttempts', value: '5', type: 'text' },
    { key: 'maintenance.maintenanceMode', value: 'false', type: 'boolean' },
    { key: 'maintenance.maintenanceMessage', value: 'We are currently performing scheduled maintenance. We\'ll be back soon!', type: 'text' },
  ];

  try {
    for (const setting of defaultSettings) {
      const [exists] = await connection.execute(
        'SELECT id FROM site_settings WHERE setting_key = ?',
        [setting.key]
      );

      if ((exists as any[]).length === 0) {
        await connection.execute(
          'INSERT INTO site_settings (setting_key, setting_value, setting_type) VALUES (?, ?, ?)',
          [setting.key, setting.value, setting.type]
        );
      }
    }
    console.log('Default site settings created');
  } catch (error) {
    console.error('Error creating site settings:', error);
  }

  // Insert sample testimonials if none exist
  try {
    const [testimonialCount] = await connection.execute(
      'SELECT COUNT(*) as count FROM testimonials'
    ) as any;

    if (testimonialCount[0].count === 0) {
      const sampleTestimonials = [
        {
          name: 'Sarah Johnson',
          company: 'TechStart Solutions',
          role: 'CEO',
          content: 'F24Tech delivered an exceptional Java Spring Boot application for our business. Their expertise in Java frameworks and attention to detail exceeded our expectations.',
          image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
          rating: 5,
          featured: true,
          status: 'active'
        },
        {
          name: 'Michael Chen',
          company: 'DataFlow Inc',
          role: 'CTO',
          content: 'The Zoho CRM implementation by F24Tech transformed our sales process. Their team understood our requirements perfectly and delivered a solution that boosted our productivity by 40%.',
          image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
          rating: 5,
          featured: true,
          status: 'active'
        },
        {
          name: 'Emily Rodriguez',
          company: 'GrowthMart',
          role: 'Operations Manager',
          content: 'F24Tech developed a custom Python Django application that streamlined our inventory management. The solution is robust, scalable, and exactly what we needed.',
          image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150',
          rating: 5,
          featured: true,
          status: 'active'
        }
      ];

      for (const testimonial of sampleTestimonials) {
        await connection.execute(
          `INSERT INTO testimonials (name, company, role, content, image, rating, featured, status) 
           VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
          [testimonial.name, testimonial.company, testimonial.role, testimonial.content, testimonial.image, testimonial.rating, testimonial.featured, testimonial.status]
        );
      }
      console.log('Sample testimonials created');
    }
  } catch (error) {
    console.error('Error creating sample testimonials:', error);
  }

  console.log('Database initialization completed successfully!');
};

// Helper function to execute queries with error handling
export const executeQuery = async (query: string, params: any[] = []) => {
  try {
    const connection = await getConnection();
    const [results] = await connection.execute(query, params);
    return results;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
};

// Helper function for transactions
export const executeTransaction = async (queries: Array<{ query: string; params: any[] }>) => {
  const connection = await getConnection();
  const conn = await connection.getConnection();
  
  try {
    await conn.beginTransaction();
    
    const results = [];
    for (const { query, params } of queries) {
      const [result] = await conn.execute(query, params);
      results.push(result);
    }
    
    await conn.commit();
    return results;
  } catch (error) {
    await conn.rollback();
    console.error('Transaction error:', error);
    throw error;
  } finally {
    conn.release();
  }
};

export default { getConnection, initDatabase, executeQuery, executeTransaction };