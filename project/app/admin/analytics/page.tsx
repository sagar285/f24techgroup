'use client';

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import AdminLayout from '@/components/admin/AdminLayout';
import { 
  TrendingUp, 
  Users, 
  FileText, 
  MessageSquare,
  Eye,
  Clock,
  Calendar,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

// TypeScript interfaces
interface OverviewStats {
  totalViews: number;
  totalContacts: number;
  totalPosts: number;
  activeUsers: number;
  viewsChange: number;
  contactsChange: number;
  postsChange: number;
  usersChange: number;
}

interface TopPage {
  path: string;
  views: number;
}

interface ContactSource {
  source: string;
  count: number;
}

interface PostPerformance {
  id: number;
  title: string;
  views: number;
  avgTime: string;
  publishedAt: string;
}

interface RecentActivity {
  type: 'contact' | 'post' | 'view';
  title: string;
  description: string;
  timestamp: string;
}

interface AnalyticsData {
  overview: OverviewStats;
  topPages: TopPage[];
  recentActivity: RecentActivity[];
  contactSources: ContactSource[];
  postPerformance: PostPerformance[];
}

const AdminAnalytics = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('7days');
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    overview: {
      totalViews: 0,
      totalContacts: 0,
      totalPosts: 0,
      activeUsers: 0,
      viewsChange: 0,
      contactsChange: 0,
      postsChange: 0,
      usersChange: 0,
    },
    topPages: [],
    recentActivity: [],
    contactSources: [],
    postPerformance: [],
  });

  useEffect(() => {
    if (status === 'loading') return;
    
    if (!session || (session.user as any).role !== 'admin') {
      router.push('/admin/login');
      return;
    }

    fetchAnalytics();
  }, [session, status, router, timeRange]);

  const fetchAnalytics = async () => {
    try {
      const res = await fetch(`/api/admin/analytics?range=${timeRange}`);
      if (res.ok) {
        const data: AnalyticsData = await res.json();
        setAnalytics(data);
      }
    } catch (error) {
      console.error('Error fetching analytics:', error);
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

  const StatCard = ({ 
    title, 
    value, 
    change, 
    icon: Icon, 
    color 
  }: { 
    title: string; 
    value: string | number; 
    change?: number; 
    icon: React.ElementType; 
    color: string;
  }) => (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
          {change !== undefined && (
            <div className={`flex items-center mt-2 text-sm ${
              change >= 0 ? 'text-green-600' : 'text-red-600'
            }`}>
              {change >= 0 ? <ArrowUp className="h-4 w-4 mr-1" /> : <ArrowDown className="h-4 w-4 mr-1" />}
              {Math.abs(change)}% from last period
            </div>
          )}
        </div>
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon className="h-8 w-8 text-white" />
        </div>
      </div>
    </div>
  );

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
            <p className="text-gray-600">Track your website performance and user engagement</p>
          </div>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="24hours">Last 24 Hours</option>
            <option value="7days">Last 7 Days</option>
            <option value="30days">Last 30 Days</option>
            <option value="90days">Last 90 Days</option>
          </select>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Total Views"
            value={analytics.overview.totalViews.toLocaleString()}
            change={analytics.overview.viewsChange}
            icon={Eye}
            color="bg-blue-500"
          />
          <StatCard
            title="Contacts"
            value={analytics.overview.totalContacts}
            change={analytics.overview.contactsChange}
            icon={MessageSquare}
            color="bg-green-500"
          />
          <StatCard
            title="Blog Posts"
            value={analytics.overview.totalPosts}
            change={analytics.overview.postsChange}
            icon={FileText}
            color="bg-purple-500"
          />
          <StatCard
            title="Active Users"
            value={analytics.overview.activeUsers}
            change={analytics.overview.usersChange}
            icon={Users}
            color="bg-orange-500"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Pages */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Top Pages</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {analytics.topPages.length > 0 ? (
                  analytics.topPages.map((page, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{page.path}</p>
                        <p className="text-sm text-gray-500">{page.views} views</p>
                      </div>
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full"
                          style={{ 
                            width: `${analytics.topPages[0] ? (page.views / analytics.topPages[0].views) * 100 : 0}%` 
                          }}
                        />
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-center py-4">No page data available</p>
                )}
              </div>
            </div>
          </div>

          {/* Contact Sources */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Contact Sources</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {analytics.contactSources.length > 0 ? (
                  analytics.contactSources.map((source, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">{source.source}</p>
                        <p className="text-sm text-gray-500">{source.count} contacts</p>
                      </div>
                      <span className="text-2xl font-bold text-gray-900">
                        {analytics.overview.totalContacts > 0 
                          ? Math.round((source.count / analytics.overview.totalContacts) * 100)
                          : 0}%
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-center py-4">No contact data available</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Post Performance */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Top Performing Blog Posts</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Views</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Avg. Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Published</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {analytics.postPerformance.length > 0 ? (
                  analytics.postPerformance.map((post, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{post.title}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center text-sm text-gray-900">
                          <Eye className="h-4 w-4 mr-2 text-gray-400" />
                          {post.views}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center text-sm text-gray-900">
                          <Clock className="h-4 w-4 mr-2 text-gray-400" />
                          {post.avgTime}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-2" />
                          {new Date(post.publishedAt).toLocaleDateString()}
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                      No post performance data available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {analytics.recentActivity.length > 0 ? (
                analytics.recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`p-2 rounded-lg ${
                      activity.type === 'contact' ? 'bg-green-100' :
                      activity.type === 'post' ? 'bg-blue-100' :
                      'bg-purple-100'
                    }`}>
                      {activity.type === 'contact' ? <MessageSquare className="h-5 w-5 text-green-600" /> :
                       activity.type === 'post' ? <FileText className="h-5 w-5 text-blue-600" /> :
                       <Eye className="h-5 w-5 text-purple-600" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                      <p className="text-sm text-gray-500">{activity.description}</p>
                      <p className="text-xs text-gray-400 mt-1">{activity.timestamp}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center py-4">No recent activity</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminAnalytics;