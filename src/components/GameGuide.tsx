import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const GameGuides = () => {
    const articles = [
        {
            id: 'how-to-play-111-patti',
            title: 'How to Play 111 Patti for Beginners - Complete Rules Explained',
            excerpt: '111 Patti (also known as Teen Patti) is a popular card game that\'s easy to learn and fun to play...',
            image: 'https://www.barlarlardown.online/images/post-img-2.jpg'
        },
        {
            id: 'flying-chess-vs-ludo',
            title: 'Flying Chess vs. Ludo vs. Snakes & Ladders - Which is Best for Game Night?',
            excerpt: 'When it comes to family game nights or friendly get-togethers, nothing beats the charm of classic board games...',
            image: 'https://www.barlarlardown.online/images/post-img-4.jpg'
        }
    ];

    return (
        <div className="bg-amber-50 min-h-screen flex flex-col">
            <Header />

            <main className="py-12 flex-grow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-12">
                        Game Guides
                    </h1>

                    <div className="space-y-16 sm:space-y-20">
=======
                    <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Game Guides</h1>

                    <div className="space-y-20">
>>>>>>> c48ca709e4d16c2a27da9d9642d76f74a2598f49
                        {articles.map((article) => (
                            <article
                                key={article.id}
                                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-shadow"
                            >
<<<<<<< HEAD
                                <div className="w-full flex justify-center p-4 sm:p-6 lg:p-8">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full max-w-4xl h-60 sm:h-96 lg:h-[36rem] object-cover rounded-xl"
                                    />
                                </div>

                                <div className="px-6 sm:px-8 lg:px-10 pb-10 sm:pb-12">
                                    <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6 hover:text-red-600 transition-colors">
=======
                                <div className="w-full flex justify-center p-8">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full max-w-6xl h-[36rem] object-cover rounded-xl"
                                    />
                                </div>

                                <div className="px-10 pb-12">
                                    <h2 className="text-4xl font-bold text-gray-800 mb-6 hover:text-red-600 transition-colors">
>>>>>>> c48ca709e4d16c2a27da9d9642d76f74a2598f49
                                        <Link to={`/guides/${article.id}`}>
                                            {article.title}
                                        </Link>
                                    </h2>

<<<<<<< HEAD
                                    <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
=======
                                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
>>>>>>> c48ca709e4d16c2a27da9d9642d76f74a2598f49
                                        {article.excerpt}
                                    </p>

                                    <Link
                                        to={`/guides/${article.id}`}
<<<<<<< HEAD
                                        className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold transition-colors text-base sm:text-lg"
=======
                                        className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold transition-colors text-lg"
>>>>>>> c48ca709e4d16c2a27da9d9642d76f74a2598f49
                                    >
                                        Read More →
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

<<<<<<< HEAD
export default GameGuides;
=======
export default GameGuides;
>>>>>>> c48ca709e4d16c2a27da9d9642d76f74a2598f49
