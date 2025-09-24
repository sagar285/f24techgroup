'use client';

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import AdminLayout from '@/components/admin/AdminLayout';
import { 
  Users, 
  MessageSquare, 
  FileText, 
  TrendingUp, 
  Mail, 
  Calendar,
  BarChart3,
  Globe
} from 'lucide-react';

const AdminDashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [stats, setStats] = useState({
    totalContacts: 0,
    newContacts: 0,
    totalPosts: 0,
    publishedPosts: 0
  });
  const [recentContacts, setRecentContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'loading') return;
    
    if (!session || (session.user as any).role !== 'admin') {
      router.push('/admin/login');
      return;
    }

    fetchDashboardData();
  }, [session, status, router]);

  const fetchDashboardData = async () => {
    try {
      const [contactsRes, postsRes] = await Promise.all([
        fetch('/api/admin/contacts'),
        fetch('/api/admin/blog')
      ]);

      if (contactsRes.ok) {
        const contacts = await contactsRes.json();
        setRecentContacts(contacts.slice(0, 5));
        setStats(prev => ({
          ...prev,
          totalContacts: contacts.length,
          newContacts: contacts.filter((c: any) => c.status === 'new').length
        }));
      }

      if (postsRes.ok) {
        const posts = await postsRes.json();
        setStats(prev => ({
          ...prev,
          totalPosts: posts.length,
          publishedPosts: posts.filter((p: any) => p.status === 'published').length
        }));
      }
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
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
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome back, {session?.user?.name}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <MessageSquare className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Contacts</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalContacts}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <Mail className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">New Contacts</p>
                <p className="text-2xl font-bold text-gray-900">{stats.newContacts}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <FileText className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Posts</p>
                <p className="text-2xl font-bold text-gray-900">{stats.totalPosts}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-orange-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Published Posts</p>
                <p className="text-2xl font-bold text-gray-900">{stats.publishedPosts}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Recent Contacts</h3>
            </div>
            <div className="p-6">
              {recentContacts.length > 0 ? (
                <div className="space-y-4">
                  {recentContacts.map((contact: any) => (
                    <div key={contact.id} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">{contact.name}</p>
                        <p className="text-sm text-gray-600">{contact.email}</p>
                        <p className="text-xs text-gray-500">
                          {new Date(contact.created_at).toLocaleDateString()}
                        </p>
                      </div>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        contact.status === 'new' ? 'bg-green-100 text-green-800' :
                        contact.status === 'contacted' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {contact.status}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No contacts yet</p>
              )}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Quick Actions</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => router.push('/admin/blog/new')}
                  className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-center"
                >
                  <FileText className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">New Post</p>
                </button>
                
                <button
                  onClick={() => router.push('/admin/contacts')}
                  className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-center"
                >
                  <MessageSquare className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">View Contacts</p>
                </button>
                
                <button
                  onClick={() => router.push('/admin/seo')}
                  className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-center"
                >
                  <Globe className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">SEO Settings</p>
                </button>
                
                <button
                  onClick={() => router.push('/admin/analytics')}
                  className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 text-center"
                >
                  <BarChart3 className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">Analytics</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;