// app/api/settings/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getConnection } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const connection = await getConnection();
    const [rows] = await connection.execute(
      'SELECT setting_key, setting_value, setting_type FROM site_settings'
    ) as any;

    // Initialize default settings structure
    const settings = {
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

    // Override with database values
    rows.forEach((row: any) => {
      const keys = row.setting_key.split('.');
      let obj: any = settings;
      
      for (let i = 0; i < keys.length - 1; i++) {
        if (!obj[keys[i]]) obj[keys[i]] = {};
        obj = obj[keys[i]];
      }
      
      const lastKey = keys[keys.length - 1];
      
      if (row.setting_type === 'json') {
        try {
          obj[lastKey] = JSON.parse(row.setting_value);
        } catch {
          obj[lastKey] = row.setting_value;
        }
      } else if (row.setting_type === 'boolean') {
        obj[lastKey] = row.setting_value === 'true' || row.setting_value === '1';
      } else {
        obj[lastKey] = row.setting_value;
      }
    });

    return NextResponse.json(settings);
  } catch (error) {
    console.error('Error fetching settings:', error);
    return NextResponse.json({ error: 'Failed to fetch settings' }, { status: 500 });
  }
}