// lib/contexts/SettingsContext.tsx
'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface SiteSettings {
  general: {
    siteName: string;
    siteDescription: string;
    companyEmail: string;
    companyPhone: string;
    companyAddress: string;
    socialLinks: {
      facebook: string;
      twitter: string;
      linkedin: string;
      instagram: string;
      github: string;
    };
  };
  email: {
    smtpHost: string;
    smtpPort: string;
    smtpUser: string;
    smtpPassword: string;
    fromEmail: string;
    fromName: string;
  };
  maintenance: {
    maintenanceMode: boolean;
    maintenanceMessage: string;
    allowedUsers: string;
  };
}

const defaultSettings: SiteSettings = {
  general: {
    siteName: 'F24Tech',
    siteDescription: 'Leading provider of technology solutions',
    companyEmail: 'info@f24tech.com',
    companyPhone: '+1 (555) 123-4567',
    companyAddress: '123 Tech Street, Silicon Valley, CA 94000',
    socialLinks: {
      facebook: '',
      twitter: '',
      linkedin: '',
      instagram: '',
      github: '',
    },
  },
  email: {
    smtpHost: '',
    smtpPort: '587',
    smtpUser: '',
    smtpPassword: '',
    fromEmail: 'noreply@f24tech.com',
    fromName: 'F24Tech',
  },
  maintenance: {
    maintenanceMode: false,
    maintenanceMessage: 'We are currently performing scheduled maintenance. We\'ll be back soon!',
    allowedUsers: '',
  },
};

const SettingsContext = createContext<SiteSettings>(defaultSettings);

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettings must be used within SettingsProvider');
  }
  return context;
};

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<SiteSettings>(defaultSettings);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await fetch('/api/settings');
        if (res.ok) {
          const data = await res.json();
          setSettings(data);
        }
      } catch (error) {
        console.error('Error fetching settings:', error);
      }
    };

    fetchSettings();
  }, []);

  return (
    <SettingsContext.Provider value={settings}>
      {children}
    </SettingsContext.Provider>
  );
};