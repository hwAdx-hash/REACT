import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="max-w-md w-full text-center p-8 bg-white rounded-2xl shadow-xl border border-gray-100">
                {/* Ikon Peringatan */}
                <div className="mb-6 flex justify-center">
                    <div className="bg-amber-100 p-4 rounded-full">
                        <svg 
                        className="w-12 h-12 text-amber-600" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                </div>

                <h1 className="text-4xl font-extrabold text-gray-900 mb-2 tracking-tight">
                Kela kedeng!
                </h1>

                <p className="text-lg text-gray-600 mb-6 italic">
                "Hampura, aya nu salah.. wajar jelema."
                </p>

                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8 rounded-r-lg">
                    <p className="text-sm font-mono text-red-700 break-words">
                        {error.statusText || error.message || "Error teu kanyahoan"}
                    </p>
                </div>

                {/* Tombol Navigasi */}
                <div className="space-y-3">
                    <button 
                        onClick={() => window.location.reload()}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-200 ease-in-out transform hover:scale-[1.02]"
                    >
                        Coba Deui (Refresh)
                    </button>
                    
                    <a 
                        href="/" 
                        className="block text-sm text-gray-500 hover:text-indigo-600 font-medium transition duration-200"
                    >
                        Balik deui ka Beranda
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ErrorPage;