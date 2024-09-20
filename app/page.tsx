export default function Home() {
  return (
    <div
      className="h-screen"
      style={{
        backgroundImage: 'url(/albi.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="h-full bg-black bg-opacity-90 flex flex-col items-center justify-center px-4 sm:px-8">
        <h1 className="text-white text-3xl sm:text-4xl font-serif mb-6 sm:mb-8 text-center">
          Welcome to my world of creativity
        </h1>
        <button className="relative px-6 sm:px-8 py-3 font-bold text-white rounded-lg overflow-hidden group bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500">
          <span className="absolute inset-0 w-full h-full transition duration-500 ease-out transform translate-x-0 translate-y-0 bg-white opacity-0 group-hover:opacity-20 group-hover:translate-x-12"></span>
          <span className="absolute inset-0 w-full h-full border-4 border-indigo-500 rounded-lg opacity-0 group-hover:opacity-100 transition duration-500 ease-out animate-pulse"></span>
          <span className="relative">EXPLORE NOW</span>
        </button>
      </div>
    </div>
  );
}
