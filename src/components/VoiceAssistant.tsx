import { useState } from 'react';
import { Mic, MicOff } from 'lucide-react';

const VoiceAssistant = () => {
  const [isListening, setIsListening] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleVoiceToggle = () => {
    setIsListening(!isListening);
    // Here you would integrate with Jesika voice assistant
    console.log('Voice assistant toggled:', !isListening);
  };

  return (
    <>
      <div
        className={`floating-voice-btn ${isHovered ? 'scale-110' : ''} ${
          isListening ? 'animate-pulse' : ''
        }`}
        onClick={handleVoiceToggle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isListening ? (
          <MicOff className="w-6 h-6" />
        ) : (
          <Mic className="w-6 h-6" />
        )}
      </div>

      {/* Tooltip */}
      {isHovered && (
        <div className="fixed bottom-20 right-6 bg-card border border-border rounded-lg px-4 py-2 shadow-luxury animate-fade-in z-40">
          <p className="text-sm font-medium">Hi! I'm Jesika</p>
          <p className="text-xs text-muted-foreground">
            {isListening ? 'Click to stop listening' : 'Click to talk about rooms & bookings'}
          </p>
        </div>
      )}
    </>
  );
};

export default VoiceAssistant;