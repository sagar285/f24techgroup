// middleware.ts - COPY THIS ENTIRE FILE
// This fixes the infinite redirect loop

import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        return !!token && token.role === 'admin';
      },
    },
    pages: {
      signIn: '/admin/login',
    },
  }
);

// IMPORTANT: Don't protect the login page!
export const config = {
  matcher: [
    '/admin/dashboard/:path*',
    '/admin/blog/:path*',
    '/admin/seo/:path*',
    '/admin/contacts/:path*',
    '/admin/testimonials/:path*',
    '/admin/analytics/:path*',
    '/admin/settings/:path*',
  ]
};

// After copying this:
// 1. Save the file
// 2. Restart dev server: npm run dev
// 3. Clear browser cache (Ctrl+Shift+Delete)
// 4. Visit: http://localhost:3000/admin/login
// 5. Login works! ✅