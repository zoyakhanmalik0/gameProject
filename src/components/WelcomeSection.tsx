import React from 'react';

const WelcomeSection = () => {
  return (
    <div className="bg-white w-full rounded-none shadow-lg overflow-hidden mb-12">
<<<<<<< HEAD
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-4 sm:px-8 md:px-16 py-8 md:py-12">
        {/* Left Text Section */}
        <div className="py-2 sm:py-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Your Gaming Blog for Skill, Fun & Strategy
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Welcome to Game Collector Site
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
            Looking for a gaming blog that keeps things smart, fun, and totally entertaining?
            <span className="font-bold"> gamecollector.site</span> is your go-to source for informative game articles,
=======
      <div className="grid md:grid-cols-2 gap-12 px-8 md:px-16 py-12">
        <div className="py-4"> {/* Added padding to better align with the image */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Your Gaming Blog for Skill, Fun & Strategy
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Welcome to Bar larlardown Guide
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Looking for a gaming blog that keeps things smart, fun, and totally entertaining?
            <span className="font-bold"> 111PattiGuidexyz</span> is your go-to source for informative game articles,
>>>>>>> c48ca709e4d16c2a27da9d9642d76f74a2598f49
            how-to guides, strategy tips, and game reviews — all focused on skill-based and casual games
            that you can enjoy with friends or solo. Whether you enjoy board games, card games, or the
            latest skill-based app titles, our blog is here to guide you, educate you, and keep you in
            the loop with trending game content.
          </p>

          <div className="space-y-6">
<<<<<<< HEAD
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
              What You'll Find on <span className="text-yellow-600">gamecollector.site</span>
            </h3>
            <ul className="space-y-4 text-gray-700 text-sm sm:text-base md:text-lg">
              {[
                {
                  title: 'Informative Game Guides:',
                  content:
                    'From classic board games to modern app-based games, we break down the rules and teach you how to play — no confusion, just fun.',
                },
                {
                  title: 'Gaming Tips & Smart Play Strategies:',
                  content:
                    'Learn how to play better with tips that improve your focus, memory, and gameplay — perfect for casual players and curious minds.',
                },
                {
                  title: 'Reviews & Game Highlights:',
                  content:
                    'Find out which games are worth playing. We cover mobile, card, and board games that are entertaining, safe, and skill-based.',
                },
                {
                  title: 'News & Updates:',
                  content:
                    'Stay current with the latest game updates, new features, and trending titles in the gaming world.',
                },
                {
                  title: 'Trusted Download Links:',
                  content:
                    'We only guide you toward safe and verified download sources — no shady apps, just clean fun.',
                },
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-green-500 mt-1 text-xl">•</span>
                  <span>
                    <strong>{item.title}</strong> {item.content}
                  </span>
                </li>
              ))}
=======
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800">
              What You'll Find on <span className="text-yellow-600">barlarlardown.online</span>
            </h3>
            <ul className="space-y-4 text-gray-700 text-base md:text-lg">
              <li className="flex items-start space-x-3">
                <span className="text-green-500 mt-1 text-xl">•</span>
                <span><strong>Informative Game Guides:</strong> From classic board games to modern app-based games, we break down the rules and teach you how to play — no confusion, just fun.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-green-500 mt-1 text-xl">•</span>
                <span><strong>Gaming Tips & Smart Play Strategies:</strong> Learn how to play better with tips that improve your focus, memory, and gameplay — perfect for casual players and curious minds.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-green-500 mt-1 text-xl">•</span>
                <span><strong>Reviews & Game Highlights:</strong> Find out which games are worth playing. We cover mobile, card, and board games that are entertaining, safe, and skill-based.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-green-500 mt-1 text-xl">•</span>
                <span><strong>News & Updates:</strong> Stay current with the latest game updates, new features, and trending titles in the gaming world.</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-green-500 mt-1 text-xl">•</span>
                <span><strong>Trusted Download Links:</strong> We only guide you toward safe and verified download sources — no shady apps, just clean fun.</span>
              </li>
>>>>>>> c48ca709e4d16c2a27da9d9642d76f74a2598f49
            </ul>
          </div>
        </div>

<<<<<<< HEAD
       {/* Right Image Section */}
<div className="flex items-center justify-center h-full">
  <img
    src="https://d2al04l58v9bun.cloudfront.net/blog/wp-content/uploads/2022/12/12113509/tarot-cards-1.jpg"
    alt="Gaming Content"
    className="rounded-lg shadow-xl object-cover w-full h-full"
    style={{ minHeight: '100%', maxHeight: '100%' }}
  />
</div>

=======
        <div className="flex items-stretch"> {/* Changed to stretch to full height */}
          <img
            src="https://www.barlarlardown.online/images/4.png"
            alt="Gaming Content"
            className="rounded-lg shadow-xl object-cover w-full h-full min-h-[500px]"
          />
        </div>
>>>>>>> c48ca709e4d16c2a27da9d9642d76f74a2598f49
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default WelcomeSection;
=======
export default WelcomeSection;
>>>>>>> c48ca709e4d16c2a27da9d9642d76f74a2598f49
