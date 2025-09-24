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
    `CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      name VARCHAR(255) NOT NULL,
      role ENUM('admin', 'user') DEFAULT 'user',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )`,
    
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
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )`,
    
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
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )`,
    
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
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )`,
    
    `CREATE TABLE IF NOT EXISTS contacts (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      company VARCHAR(255),
      service VARCHAR(255),
      message TEXT NOT NULL,
      status ENUM('new', 'contacted', 'closed') DEFAULT 'new',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )`,
    
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
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )`,
    
    `CREATE TABLE IF NOT EXISTS site_settings (
      id INT AUTO_INCREMENT PRIMARY KEY,
      setting_key VARCHAR(255) UNIQUE NOT NULL,
      setting_value TEXT,
      setting_type ENUM('text', 'textarea', 'json', 'boolean') DEFAULT 'text',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )`
  ];

  for (const table of tables) {
    await connection.execute(table);
  }

  // Insert default admin user if not exists
  const [adminExists] = await connection.execute(
    'SELECT id FROM users WHERE email = ?',
    [process.env.ADMIN_EMAIL]
  );

  if ((adminExists as any[]).length === 0) {
    const bcrypt = require('bcryptjs');
    const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 12);
    
    await connection.execute(
      'INSERT INTO users (email, password, name, role) VALUES (?, ?, ?, ?)',
      [process.env.ADMIN_EMAIL, hashedPassword, 'Admin', 'admin']
    );
  }

  // Insert default SEO settings
  const defaultSeoPages = [
    {
      page: 'home',
      title: 'F24Tech - Leading Technology Solutions Provider | Java, Python, PHP, CRM Development',
      description: 'F24Tech provides comprehensive technology solutions including Java frameworks, JavaScript, Python, PHP development, Zoho, NetSuite implementation, and custom CRM software development in India.',
      keywords: 'f24tech, f24tech softwares, f24tech india, f24tech group, java frameworks, javascript development, python programming, php development, crm software, zoho implementation, netsuite consulting'
    },
    {
      page: 'services',
      title: 'Technology Services - Java, Python, PHP, JavaScript Development | F24Tech',
      description: 'Expert technology services including Java Spring Boot, React.js, Angular, Python Django, PHP Laravel development and comprehensive CRM solutions.',
      keywords: 'java spring boot, react js, angular, python django, php laravel, javascript frameworks, web development services'
    },
    {
      page: 'crm-solutions',
      title: 'CRM Solutions - Zoho, NetSuite, Salesforce Implementation | F24Tech',
      description: 'Professional CRM implementation and customization services for Zoho, NetSuite, Salesforce, and custom CRM development.',
      keywords: 'zoho crm, netsuite implementation, salesforce development, custom crm, crm consulting, crm integration'
    }
  ];

  for (const seo of defaultSeoPages) {
    const [exists] = await connection.execute(
      'SELECT id FROM seo_settings WHERE page = ?',
      [seo.page]
    );

    if ((exists as any[]).length === 0) {
      await connection.execute(
        'INSERT INTO seo_settings (page, title, description, keywords) VALUES (?, ?, ?, ?)',
        [seo.page, seo.title, seo.description, seo.keywords]
      );
    }
  }

  console.log('Database initialized successfully');
};

export default pool;