import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900">
      <div className="text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Welcome to Location Showcase
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Discover premium destinations with world-class amenities and breathtaking views
        </p>
        <div className="space-y-4">
          <p className="text-lg">Access our exclusive locations:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            <Link 
              href="/location/sunset-villa"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg p-4 transition-colors"
            >
              Sunset Villa Resort
            </Link>
            <Link 
              href="/location/mountain-peak"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg p-4 transition-colors"
            >
              Mountain Peak Lodge
            </Link>
            <Link 
              href="/location/urban-downtown"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg p-4 transition-colors"
            >
              Urban Downtown Hotel
            </Link>
            <Link 
              href="/location/coastal-paradise"
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg p-4 transition-colors"
            >
              Coastal Paradise Resort
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}