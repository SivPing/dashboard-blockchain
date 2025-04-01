// app/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-900 flex flex-col items-center justify-center px-4 text-white">
      <div className="max-w-2xl w-full text-center space-y-8 relative">
        {/* Cambodian-inspired decorative elements */}
        <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 opacity-10">
          <svg className="w-64 h-64" viewBox="0 0 100 100" fill="currentColor">
            <path d="M50 0L60 35H95L67 57L77 90L50 70L23 90L33 57L5 35H40L50 0Z" />
          </svg>
        </div>
        
        {/* Error code with blockchain styling */}
        <div className="relative z-10">
          <h1 className="text-8xl font-bold tracking-tighter">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-yellow-300 to-amber-500">404</span>
          </h1>
          <div className="mt-2 flex justify-center space-x-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div 
                key={i} 
                className="w-6 h-6 bg-blue-800 border border-blue-500 rounded flex items-center justify-center"
              >
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Angkor-inspired divider */}
        <div className="relative py-4">
          <div className="h-px w-full bg-blue-500"></div>
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4">
            <div className="w-16 h-4 bg-blue-800 border border-blue-500 rounded-lg flex items-center justify-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
        
        {/* Error message with Khmer styling */}
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold tracking-wide text-yellow-300">ទំព័រមិនត្រូវបានរកឃើញ</h2>
          <h3 className="text-2xl font-medium">Page Not Found</h3>
          <p className="text-blue-100">The blockchain transaction could not be validated. This ledger entry does not exist.</p>
        </div>
        
        {/* Blockchain-themed details */}
        <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-600 text-sm text-left">
          <div className="grid grid-cols-2 gap-2 text-blue-200">
            <span>Block Hash:</span>
            <span className="font-mono truncate">0x404...not_found</span>
            <span>Previous Hash:</span>
            <span className="font-mono truncate">0x3fa...8d2e71</span>
            <span>Timestamp:</span>
            <span className="font-mono">{new Date().toISOString()}</span>
          </div>
        </div>
        
        {/* Back to home button with Cambodian gold styling */}
        <div className="pt-6">
          <Link 
            href="/" 
            className="inline-flex items-center justify-center px-6 py-3 border border-yellow-500 text-base font-medium rounded-md text-yellow-300 bg-transparent hover:bg-yellow-900/20 transition duration-150 ease-in-out"
          >
            Return to Main Ledger
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="ml-2 h-5 w-5" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}