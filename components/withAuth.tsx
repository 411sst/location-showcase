'use client';
import { useSession } from 'next-auth/react';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';

export function withAuth<T extends object>(WrappedComponent: React.ComponentType<T>) {
  return function AuthComponent(props: T) {
    const { data: session, status } = useSession();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
      if (status === "loading") return;
      
      if (!session) {
        const returnUrl = encodeURIComponent(pathname);
        router.push(`/login?callbackUrl=${returnUrl}`);
      }
    }, [session, status, router, pathname]);

    if (status === "loading") {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
        </div>
      );
    }

    if (!session) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
}