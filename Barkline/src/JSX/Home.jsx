function Home() {
    return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-64 border-r border-gray-200 p-4">
        <div className="flex items-center mb-8">
          <img src="/logo.png" alt="BarkLine Logo" className="w-8 h-8 mr-2" />
          <h1 className="text-2xl font-bold text-pink-700">BarkLine</h1>
        </div>

        <nav className="space-y-6">
          <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-pink-700">
            <img src="../assets/icons/home/home.png" alt="Home Icon" className="w-5 h-5" />
            <span>Home</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-pink-700">
            <img src="/icons/popular.png" alt="Popular Icon" className="w-5 h-5" />
            <span>Popular</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-pink-700">
            <img src="/icons/courses & topics.png" alt="Courses & Topics Icon" className="w-5 h-5" />
            <span>Courses & Topics</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-pink-700">
            <img src="/icons/ask question.png" alt="Ask Question Icon" className="w-5 h-5" />
            <span>Ask Question</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-pink-700">
            <img src="/icons/badges.png" alt="Badges Icon" className="w-5 h-5" />
            <span>Badges</span>
          </a>
          <a href="#" className="flex items-center space-x-3 text-gray-700 hover:text-pink-700">
            <img src="/icons/communities.png" alt="Communities Icon" className="w-5 h-5" />
            <span>Communities</span>
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Top Navbar */}
        <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6">
          <div className="flex items-center w-full max-w-lg">
            <input
              type="text"
              placeholder="SEARCH BARKLINE"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div className="flex items-center space-x-6 ml-6">
            <button>
              <img src="/icons/ask question.png" alt="Messages Icon" className="w-6 h-6" />
            </button>
            <button className="flex items-center space-x-1 text-gray-700">
              <span className="text-lg font-medium">+</span>
              <span>Create</span>
            </button>
            <button>
              <img src="/icons/notifications.png" alt="Notifications Icon" className="w-6 h-6" />
            </button>
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>

        <div className="text-gray-400 text-center mt-20">
          <p>Select a section from the sidebar to get started.</p>
        </div>
      </main>
    </div>
  );

}

export default Home