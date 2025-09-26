// app/api/admin/settings/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { getConnection } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || (session.user as any).role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

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
      notifications: {
        emailNotifications: true,
        newContactAlert: true,
        newCommentAlert: true,
        weeklyReport: true,
      },
      security: {
        twoFactorAuth: false,
        sessionTimeout: 30,
        allowedIPs: '',
        maxLoginAttempts: 5,
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

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || (session.user as any).role !== 'admin') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const connection = await getConnection();

    // Flatten the nested settings object
    const flattenSettings = (obj: any, prefix = ''): any[] => {
      const result: any[] = [];
      
      for (const [key, value] of Object.entries(obj)) {
        const fullKey = prefix ? `${prefix}.${key}` : key;
        
        if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
          result.push(...flattenSettings(value, fullKey));
        } else {
          let settingType = 'text';
          let settingValue = value;
          
          if (typeof value === 'boolean') {
            settingType = 'boolean';
            settingValue = value ? 'true' : 'false';
          } else if (typeof value === 'object') {
            settingType = 'json';
            settingValue = JSON.stringify(value);
          }
          
          result.push({
            key: fullKey,
            value: settingValue,
            type: settingType,
          });
        }
      }
      
      return result;
    };

    const flatSettings = flattenSettings(body);

    // Update or insert settings
    for (const setting of flatSettings) {
      await connection.execute(
        `INSERT INTO site_settings (setting_key, setting_value, setting_type) 
         VALUES (?, ?, ?) 
         ON DUPLICATE KEY UPDATE setting_value = ?, setting_type = ?`,
        [setting.key, setting.value, setting.type, setting.value, setting.type]
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving settings:', error);
    return NextResponse.json({ error: 'Failed to save settings' }, { status: 500 });
  }
}