export default function Loading() {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="h-8 bg-gray-200 w-1/3 mb-6 rounded animate-pulse"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <div className="bg-white shadow-md rounded-lg p-4 mb-6 animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
              <div className="h-10 bg-gray-200 rounded w-full mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
              <div className="h-10 bg-gray-200 rounded w-full mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
              <div className="h-10 bg-gray-200 rounded w-full mb-4"></div>
              <div className="h-10 bg-gray-200 rounded w-full"></div>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-white p-4 rounded-md shadow-sm h-64 animate-pulse">
                  <div className="bg-gray-200 h-36 w-full rounded-md"></div>
                  <div className="mt-4 bg-gray-200 h-4 w-3/4 rounded"></div>
                  <div className="mt-2 bg-gray-200 h-4 w-1/2 rounded"></div>
                  <div className="mt-2 bg-gray-200 h-4 w-1/4 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
  