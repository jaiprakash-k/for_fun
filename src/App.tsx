import React, { useState, useEffect } from 'react';
import './index.css';

// Import all photos
import photo1 from './assets/1.jpg';
import photo2 from './assets/2.JPG';
import photo3 from './assets/3.JPG';
import photo4 from './assets/4.JPG';
import photo5 from './assets/5.JPG';
import photo6 from './assets/6.JPG';
import photo7 from './assets/7.jpg';
import photo8 from './assets/8.jpg';
import mainPhoto from './assets/main.JPG';

type Stage = 'mailbox' | 'letter' | 'dashboard';

const App: React.FC = () => {
  const [stage, setStage] = useState<Stage>('mailbox');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleStageTransition = (nextStage: Stage) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setStage(nextStage);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-radial from-pink-soft to-white overflow-hidden">
      {stage === 'mailbox' && (
        <MailboxComponent 
          onOpenLetter={() => handleStageTransition('letter')}
          isTransitioning={isTransitioning}
        />
      )}
      {stage === 'letter' && (
        <LetterModal 
          onClose={() => handleStageTransition('dashboard')}
        />
      )}
      {stage === 'dashboard' && (
        <ContentDashboard />
      )}
    </div>
  );
};

// Stage 1: Mailbox Component
interface MailboxComponentProps {
  onOpenLetter: () => void;
  isTransitioning: boolean;
}

const MailboxComponent: React.FC<MailboxComponentProps> = ({ onOpenLetter, isTransitioning }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className={`transform transition-all duration-500 ${
        isTransitioning ? 'scale-75 opacity-0' : 'scale-100 opacity-100'
      }`}>
        {/* Envelope Container */}
        <div className="relative animate-float">
          {/* Hello Kitty Placeholder */}
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-20">
            <div className="w-24 h-24 bg-pink-200 rounded-full flex items-center justify-center shadow-soft">
              <span className="text-3xl">🎀</span>
            </div>
          </div>
          
          {/* Envelope Body */}
          <div className="relative w-80 h-56 bg-white rounded-lg shadow-soft animate-pulse-soft">
            {/* Envelope Flap */}
            <div className="absolute -top-4 left-0 right-0">
              <div className="w-full h-16 bg-gradient-to-br from-pink-300 to-pink-400 transform -skew-y-1 rounded-t-lg relative">
                {/* Heart Clasp */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="w-6 h-6 bg-red-400 rounded-full relative">
                    <span className="absolute inset-0 flex items-center justify-center text-white text-xs">💝</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Envelope Content Area */}
            <div className="p-8 pt-12 flex flex-col items-center justify-center h-full">
              <div className="text-pink-400 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </div>
              <p className="text-pink-300 text-sm text-center font-medium">
                A special message awaits...
              </p>
            </div>
          </div>
        </div>
        
        {/* Open Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={onOpenLetter}
            className="px-8 py-4 bg-gradient-to-r from-pink-300 to-purple-300 text-white font-semibold rounded-full shadow-soft hover:shadow-soft-hover hover:scale-105 transform transition-all duration-300 text-lg"
          >
            ✨ Click to open ✨
          </button>
        </div>
      </div>
    </div>
  );
};

// Stage 2: Letter Modal
interface LetterModalProps {
  onClose: () => void;
}

const LetterModal: React.FC<LetterModalProps> = ({ onClose }) => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 300);
  }, []);

  const letterContent = `My Dearest Bala Bangaram😘,

On this beautiful National Princess Day, I just wanted to remind you of something simple—you are my princess, not just today, but every single day.

Every moment with you feels magical. Your smile brightens my entire world, your voice calms my heart, and your presence makes everything feel right. Being with you is the happiest part of my life.

I wanted to create this little love note for you—just to tell you how special you are to me. You bring beauty, joy, and love into my life in ways I never imagined.

Thank you for being you—sweet, caring, adorable, and absolutely precious to me.
You’re my sunshine, my peace, my happiness… and my forever princess.

With all my love and endless hugs,`;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-3xl shadow-purple-soft max-w-2xl w-full max-h-[80vh] overflow-y-auto animate-scale-in">
        {/* Header */}
        <div className="p-6 border-b border-pink-100 flex items-center justify-between">
          <div className="bg-gradient-to-r from-pink-300 to-purple-300 text-white px-6 py-2 rounded-full font-semibold">
            💜 Dear Bala Bangaram 💜
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors"
          >
            ✕
          </button>
        </div>
        
        {/* Letter Content */}
        <div className="p-8">
          {showContent && (
            <div className="space-y-4 animate-fade-in">
              {letterContent.split('\n\n').map((paragraph, index) => (
                <p
                  key={index}
                  className="text-gray-700 leading-relaxed"
                  style={{
                    animationDelay: `${index * 0.3}s`,
                    animationFillMode: 'both'
                  }}
                >
                  {paragraph}
                </p>
              ))}
              
              {/* Signature */}
              <div className="text-right mt-8 animate-fade-in" style={{ animationDelay: '1.5s', animationFillMode: 'both' }}>
                <p className="text-purple-600 font-semibold text-lg">Your loving partner 💕</p>
              </div>
            </div>
          )}
        </div>
        
        {/* Footer */}
        <div className="p-6 bg-pink-50 rounded-b-3xl text-center">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gradient-to-r from-pink-300 to-purple-300 text-white rounded-full hover:shadow-soft-hover transition-all duration-300"
          >
            Continue to Dashboard ✨
          </button>
        </div>
      </div>
    </div>
  );
};

// Circular Photo Gallery Component
interface Photo {
  id: number;
  imagePath: string;
  title: string;
  description: string;
}

interface CircularPhotoGalleryProps {
  photos: Photo[];
  cardsLoaded: boolean;
}

const CircularPhotoGallery: React.FC<CircularPhotoGalleryProps> = ({ photos, cardsLoaded }) => {
  const [rotation, setRotation] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const handleNext = () => {
    setRotation(prev => prev - (360 / photos.length));
  };

  const handlePrev = () => {
    setRotation(prev => prev + (360 / photos.length));
  };

  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  return (
    <div className="relative">
      {/* Circular Gallery Container */}
      <div className="relative w-80 h-80 mx-auto mb-8">
        {/* Center Circle - Main Photo */}
        <div 
          className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full shadow-soft overflow-hidden cursor-pointer hover:shadow-soft-hover hover:scale-110 transition-all duration-300 z-10"
          onClick={() => handlePhotoClick({ id: 0, imagePath: mainPhoto, title: "Golden Pic🥰", description: "The best photo ever seen😍" })}
        >
          <img 
            src={mainPhoto} 
            alt="Main Memory"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Photo Circle */}
        <div 
          className="relative w-full h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {photos.map((photo, index) => {
            const angle = (360 / photos.length) * index;
            const x = Math.cos((angle - 90) * (Math.PI / 180)) * 130;
            const y = Math.sin((angle - 90) * (Math.PI / 180)) * 130;
            
            return (
              <div
                key={photo.id}
                className={`absolute w-16 h-16 rounded-full shadow-soft hover:shadow-soft-hover cursor-pointer transform hover:scale-110 transition-all duration-300 overflow-hidden ${
                  cardsLoaded ? 'animate-stagger-fade' : 'opacity-0'
                }`}
                style={{
                  left: `calc(50% + ${x}px - 2rem)`,
                  top: `calc(50% + ${y}px - 2rem)`,
                  transform: `rotate(${-rotation}deg)`,
                  animationDelay: `${0.6 + index * 0.1}s`,
                  animationFillMode: 'both'
                }}
                onClick={() => handlePhotoClick(photo)}
              >
                <img 
                  src={photo.imagePath} 
                  alt={photo.title}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Control Buttons */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={handlePrev}
          className="w-12 h-12 bg-gradient-to-r from-pink-300 to-purple-300 text-white rounded-full hover:shadow-soft-hover hover:scale-105 transform transition-all duration-300 flex items-center justify-center"
        >
          ←
        </button>
        <button
          onClick={handleNext}
          className="w-12 h-12 bg-gradient-to-r from-pink-300 to-purple-300 text-white rounded-full hover:shadow-soft-hover hover:scale-105 transform transition-all duration-300 flex items-center justify-center"
        >
          →
        </button>
      </div>

      {/* Selected Photo Info */}
      {selectedPhoto && (
        <div className="bg-white rounded-2xl shadow-soft p-6 max-w-md mx-auto animate-scale-in">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 rounded-xl overflow-hidden shadow-soft">
              <img 
                src={selectedPhoto.imagePath} 
                alt={selectedPhoto.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{selectedPhoto.title}</h3>
            <p className="text-gray-600">{selectedPhoto.description}</p>
            <button
              onClick={() => setSelectedPhoto(null)}
              className="mt-4 px-4 py-2 bg-gradient-to-r from-pink-300 to-purple-300 text-white rounded-full hover:shadow-soft-hover transition-all duration-300 text-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Stage 3: Content Dashboard
const ContentDashboard: React.FC = () => {
  const [cardsLoaded, setCardsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setCardsLoaded(true), 200);
  }, []);

  const notes = [
    { id: 1, color: 'bg-yellow-200', text: "You make my heart skip a beat 💛", delay: '0s' },
    { id: 2, color: 'bg-purple-200', text: "Every day with you is magical ✨", delay: '0.2s' },
    { id: 3, color: 'bg-blue-200', text: "You're my favorite person 💙", delay: '0.4s' },
  ];

  const photos = [
    { id: 1, imagePath: photo1, title: "Beautiful Moment", description: "My heart's favorite storybook" },
    { id: 2, imagePath: photo2, title: "Artistic shadow", description: "Even her shadow steals my heart" },
    { id: 3, imagePath: photo3, title: "Natural look", description: "Just her, and that's everything" },
    { id: 4, imagePath: photo4, title: "Selfie in Saree", description: "Her smile is my favorite filter❤️" },
    { id: 5, imagePath: photo5, title: "Kukka Pilla", description: "my whole world 🐶" },
    { id: 6, imagePath: photo6, title: "Clg Kukka Pilla", description: "Clg dress lo Baguntadi sirrr" },
    { id: 7, imagePath: photo7, title: "Full-length dress lo kekka anthe nuvu", description: "Always a mesmerizing sight😍" },
    { id: 8, imagePath: photo8, title: "t-shirt Bale untav telusaa", description: "Home is wherever she is comfy" },
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-purple-600 mb-2">Heyy, Bala😘💋!</h1>
          <p className="text-purple-400 text-lg">Your personal love dashboard ✨</p>
        </div>

        {/* Notes Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-purple-600 mb-6">Sweet Notes 📝</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {notes.map((note) => (
              <div
                key={note.id}
                className={`${note.color} p-6 rounded-3xl shadow-soft hover:shadow-soft-hover hover:scale-105 transform transition-all duration-300 cursor-pointer ${
                  cardsLoaded ? 'animate-stagger-fade' : 'opacity-0'
                }`}
                style={{ animationDelay: note.delay, animationFillMode: 'both' }}
              >
                <p className="text-gray-700 font-medium text-center">{note.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Photos Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-purple-600 mb-8 text-center">Our Beautiful Memories 📸</h2>
          <CircularPhotoGallery photos={photos} cardsLoaded={cardsLoaded} />
        </div>

        {/* Footer */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '1.5s', animationFillMode: 'both' }}>
          <p className="text-purple-400 text-lg">Made with 💜 just for you</p>
        </div>
      </div>
    </div>
  );
};

export default App;