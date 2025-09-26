'use client';
export const dynamic = 'force-dynamic';
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import AdminLayout from '@/components/admin/AdminLayout';
import { Globe, Save, Plus } from 'lucide-react';

const SEOSettings = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [seoSettings, setSeoSettings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editingPage, setEditingPage] = useState<any>(null);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    if (status === 'loading') return;
    
    if (!session || (session.user as any).role !== 'admin') {
      router.push('/admin/login');
      return;
    }

    fetchSEOSettings();
  }, [session, status, router]);

  const fetchSEOSettings = async () => {
    try {
      const response = await fetch('/api/admin/seo');
      if (response.ok) {
        const data = await response.json();
        setSeoSettings(data);
      }
    } catch (error) {
      console.error('Error fetching SEO settings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (pageData: any) => {
    setSaving(true);
    try {
      const response = await fetch('/api/admin/seo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pageData),
      });

      if (response.ok) {
        await fetchSEOSettings();
        setEditingPage(null);
        setShowAddForm(false);
      }
    } catch (error) {
      console.error('Error saving SEO settings:', error);
    } finally {
      setSaving(false);
    }
  };

  const SEOForm = ({ page, onSave, onCancel }: any) => {
    const [formData, setFormData] = useState({
      page: page?.page || '',
      title: page?.title || '',
      description: page?.description || '',
      keywords: page?.keywords || '',
      og_title: page?.og_title || '',
      og_description: page?.og_description || '',
      og_image: page?.og_image || '',
      schema_markup: page?.schema_markup || {}
    });

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onSave(formData);
    };

    return (
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Page</label>
          <input
            type="text"
            value={formData.page}
            onChange={(e) => setFormData({ ...formData, page: e.target.value })}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g., home, services, about"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Meta Title</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="SEO optimized title"
          />
          <p className="text-xs text-gray-500 mt-1">Recommended: 50-60 characters</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Meta Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={3}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="SEO optimized description"
          />
          <p className="text-xs text-gray-500 mt-1">Recommended: 150-160 characters</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Keywords</label>
          <textarea
            value={formData.keywords}
            onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
            rows={2}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="keyword1, keyword2, keyword3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Open Graph Title</label>
          <input
            type="text"
            value={formData.og_title}
            onChange={(e) => setFormData({ ...formData, og_title: e.target.value })}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Title for social media sharing"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Open Graph Description</label>
          <textarea
            value={formData.og_description}
            onChange={(e) => setFormData({ ...formData, og_description: e.target.value })}
            rows={2}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Description for social media sharing"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Open Graph Image URL</label>
          <input
            type="url"
            value={formData.og_image}
            onChange={(e) => setFormData({ ...formData, og_image: e.target.value })}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={saving}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 flex items-center"
          >
            <Save className="h-4 w-4 mr-2" />
            {saving ? 'Saving...' : 'Save'}
          </button>
        </div>
      </form>
    );
  };

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">SEO Settings</h1>
            <p className="text-gray-600">Manage SEO settings for all pages</p>
          </div>
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Page
          </button>
        </div>

        {showAddForm && (
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Add New Page SEO Settings</h3>
            <SEOForm
              onSave={handleSave}
              onCancel={() => setShowAddForm(false)}
            />
          </div>
        )}

        <div className="grid gap-6">
          {seoSettings.map((page: any) => (
            <div key={page.id} className="bg-white rounded-lg shadow">
              {editingPage?.id === page.id ? (
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Edit SEO Settings for "{page.page}"
                  </h3>
                  <SEOForm
                    page={page}
                    onSave={handleSave}
                    onCancel={() => setEditingPage(null)}
                  />
                </div>
              ) : (
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <Globe className="h-5 w-5 text-blue-600 mr-2" />
                        <h3 className="text-lg font-medium text-gray-900 capitalize">
                          {page.page}
                        </h3>
                      </div>
                      
                      <div className="space-y-2">
                        <div>
                          <span className="text-sm font-medium text-gray-500">Title:</span>
                          <p className="text-sm text-gray-900">{page.title || 'Not set'}</p>
                        </div>
                        
                        <div>
                          <span className="text-sm font-medium text-gray-500">Description:</span>
                          <p className="text-sm text-gray-900">{page.description || 'Not set'}</p>
                        </div>
                        
                        <div>
                          <span className="text-sm font-medium text-gray-500">Keywords:</span>
                          <p className="text-sm text-gray-900">{page.keywords || 'Not set'}</p>
                        </div>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => setEditingPage(page)}
                      className="ml-4 text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {seoSettings.length === 0 && !showAddForm && (
          <div className="text-center py-12">
            <Globe className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No SEO settings found</h3>
            <p className="text-gray-600 mb-4">Start by adding SEO settings for your pages</p>
            <button
              onClick={() => setShowAddForm(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Add First Page
            </button>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default SEOSettings;