// app/crm-solutions/page.tsx
import React from 'react';
import { Metadata } from 'next';
import CRMSolutions from '@/components/CRMSolutions';
import { getConnection } from '@/lib/db';

export async function generateMetadata(): Promise<Metadata> {
  try {
    const connection = await getConnection();
    const [seoData] = await connection.execute(
      'SELECT * FROM seo_settings WHERE page = ?',
      ['crm-solutions']
    );
    
    const seo = (seoData as any[])[0];
    
    return {
      title: seo?.title || 'CRM Solutions - Zoho, NetSuite, Salesforce Implementation | F24Tech',
      description: seo?.description || 'Professional CRM implementation and customization services for Zoho, NetSuite, Salesforce, and custom CRM development.',
      keywords: seo?.keywords || 'zoho crm, netsuite implementation, salesforce development, custom crm, crm consulting',
    };
  } catch (error) {
    return {
      title: 'CRM Solutions | F24Tech',
      description: 'Comprehensive CRM implementation and customization services',
    };
  }
}

const CRMSolutionsPage = () => {
  return (
    <div className="pt-16">
      <CRMSolutions />
    </div>
  );
};

export default CRMSolutionsPage;