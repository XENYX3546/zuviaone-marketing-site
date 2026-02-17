import Link from 'next/link';

export default function ProfileNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <div className="text-center px-4">
        <p className="text-7xl font-bold text-neutral-200 mb-6">404</p>
        <h1 className="text-2xl font-semibold text-neutral-900 mb-2">
          Business Not Found
        </h1>
        <p className="text-neutral-600 mb-8 max-w-md">
          This business profile doesn&apos;t exist or is no longer available.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Go to ZuviaOne
        </Link>
      </div>
    </div>
  );
}
