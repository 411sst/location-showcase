'use client';
import { useSession } from 'next-auth/react';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function withAuth<T extends object>(WrappedComponent: React.ComponentType<T>) {
  return function AuthComponent(props: T) {
    const { data: session, status } = useSession();
    const router = useRouter();
    const pathname = usePathname();
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
      if (status === "loading") return;
      
      if (!session) {
        const returnUrl = encodeURIComponent(pathname);
        router.push(`/login?callbackUrl=${returnUrl}`);
      } else {
        // Add a small delay to ensure styles and images load
        setTimeout(() => {
          setIsReady(true);
        }, 100);
      }
    }, [session, status, router, pathname]);

    // Show loading state while checking auth
    if (status === "loading" || !isReady) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white mx-auto mb-4"></div>
            <p className="text-white text-xl">Loading location...</p>
          </div>
        </div>
      );
    }

    if (!session) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
}
