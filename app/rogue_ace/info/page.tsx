export default function InfoPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          The Rogue Ace
        </h1>
        <p className="text-xl text-gray-600">
          An original card game experience
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">About The Game</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The Rogue Ace is an original card game that can be played in the app "The Rogue Ace". 
          The app features unique characters with special abilities that can modify the game in 
          different ways, creating dynamic and engaging gameplay experiences.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Game Features</h3>
            <ul className="text-blue-800 space-y-2">
              <li>• Original card game mechanics</li>
              <li>• Unique character abilities</li>
              <li>• Strategic decision making</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-green-900 mb-3">Character System</h3>
            <ul className="text-green-800 space-y-2">
              <li>• Multiple selectable characters</li>
              <li>• Special abilities and ascended abilities</li>
              <li>• Strategic character selection and synergy</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Play</h2>
        <div className="text-gray-700 space-y-4">
          <p className="text-lg">
            The Rogue Ace combines traditional card game elements with innovative character-based 
            mechanics. Each character brings unique abilities to the table, allowing players to 
            adapt their strategy and approach based on their chosen character's strengths.
          </p>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <p className="text-yellow-800">
              Detailed game rules and mechanics are available within the app. 
              Download "The Rogue Ace" to start your card game adventure! 
              The game is free to play and has no in-app purchases or advertisements.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ownership & Support</h2>
        <div className="text-gray-700 space-y-4">
          <p className="text-lg">
            The Rogue Ace is owned and operated by Akolo Technologies. We're committed to 
            providing an engaging and enjoyable experience for all players.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Us</h3>
            <p className="text-gray-700 mb-3">
              Have questions or concerns? We're here to help!
            </p>
            <div className="space-y-2">
              <p className="text-gray-700">
                <strong>Email:</strong> 
                <a href="mailto:johnnychen762@gmail.com" className="text-blue-600 hover:text-blue-800 ml-2">
                  johnnychen762@gmail.com
                </a>
              </p>
              <p className="text-gray-700">
                <strong>Suggestions: </strong> 
                You can add suggestions through the appr
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}