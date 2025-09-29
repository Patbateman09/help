import { useState } from "react";
import { Heart, Music, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingHearts = () => {
  return (
    <div className="floating-hearts">
      {[...Array(9)].map((_, i) => (
        <div key={i} className="heart">💕</div>
      ))}
    </div>
  );
};

const ForgivenessButton = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [response, setResponse] = useState<'yes' | 'not-yet' | null>(null);

  const handleQuestionClick = () => {
    setShowButtons(true);
  };

  const handleResponse = (answer: 'yes' | 'not-yet') => {
    setResponse(answer);
  };

  return (
    <div className="text-center">
      {!showButtons && !response ? (
        <Button
          onClick={handleQuestionClick}
          className="btn-romantic text-lg font-medium"
        >
          Manu, do you forgive me? 💬
        </Button>
      ) : !response ? (
        <div className="space-y-6">
          <p className="text-xl font-dancing text-primary mb-6">
            Manu, do you forgive me? 💬
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              onClick={() => handleResponse('yes')}
              className="btn-romantic bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700"
            >
              Yes 💕
            </Button>
            <Button
              onClick={() => handleResponse('not-yet')}
              className="btn-romantic bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700"
            >
              Not yet 💭
            </Button>
          </div>
        </div>
      ) : (
        <div className="romantic-card max-w-md mx-auto">
          {response === 'yes' ? (
            <div className="text-center">
              <div className="text-6xl mb-4 heart-pulse">💕</div>
              <p className="text-lg font-medium text-primary mb-2">
                Thank you, Manu! Your forgiveness means the world to me.
              </p>
              <p className="text-lg font-dancing text-2xl text-deep-rose">
                I love you! 💕
              </p>
            </div>
          ) : (
            <div className="text-center">
              <div className="text-4xl mb-4">🌅</div>
              <p className="text-lg font-medium text-primary mb-2">
                I understand if you need time.
              </p>
              <p className="text-lg text-muted-foreground">
                I'll keep trying to make it right because I love you so much.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const MusicToggle = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
    // In a real implementation, you would control audio playback here
  };

  return (
    <Button
      onClick={toggleMusic}
      variant="ghost"
      size="sm"
      className="fixed top-4 right-4 z-10 bg-card/80 backdrop-blur-sm hover:bg-card"
    >
      {isPlaying ? <Music className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
    </Button>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingHearts />
      <MusicToggle />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-16">
          
          {/* Header */}
          <div className="text-center fade-in">
            <h1 className="font-dancing text-6xl md:text-8xl font-bold text-primary mb-4">
              For My Manu 💖
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>

          {/* Greeting */}
          <div className="romantic-card fade-in fade-in-delay-1">
            <h2 className="font-dancing text-4xl text-primary mb-6">Dear Manu,</h2>
          </div>

          {/* Apology */}
          <div className="romantic-card fade-in fade-in-delay-2">
            <p className="text-lg leading-relaxed text-foreground">
              I'm deeply sorry for any hurt I've caused you. My actions were thoughtless, and I regret them from the bottom of my heart. Please know that it was never my intention to make you feel this way.
            </p>
          </div>

          {/* Love Message */}
          <div className="romantic-card fade-in fade-in-delay-3">
            <p className="text-lg leading-relaxed text-foreground">
              I love you more than words can capture. You are my everything—my joy, my light, and my reason to smile every day. Without you, the world feels incomplete.
            </p>
          </div>

          {/* Forgiveness Button */}
          <div className="fade-in fade-in-delay-4">
            <ForgivenessButton />
          </div>

          {/* Poem Section */}
          <div className="romantic-card fade-in fade-in-delay-5">
            <h3 className="font-dancing text-3xl text-primary mb-8 text-center">
              A Poem for You, My Manu:
            </h3>
            <div className="max-w-2xl mx-auto">
              <div className="text-lg leading-relaxed text-foreground space-y-4 text-center italic">
                <p>In the whisper of dawn, your presence arrives,<br />
                A magical aura that makes the heart thrive.<br />
                Like enchanted winds from a fairy-tale land,<br />
                You weave spells of wonder with a gentle hand.</p>
                
                <p>Your eyes, oh the stars in a midnight sky,<br />
                Deep pools of beauty where dreams never die.<br />
                They sparkle with secrets, so pure and so bright,<br />
                Guiding my soul through the darkest of night.</p>
                
                <p>Manu, my love, with your grace and your light,<br />
                You turn ordinary moments into pure delight.<br />
                Forever enchanted, in your magic I stay,<br />
                My heart beats your name, come what may.</p>
              </div>
            </div>
          </div>

          {/* Hindi Message */}
          <div className="fade-in fade-in-delay-6">
            <div className="hindi-box max-w-2xl mx-auto text-center">
              <p className="text-2xl font-bold text-primary mb-4">
                मुझे माफ कर दो मनु देवी।
              </p>
              <p className="text-lg text-muted-foreground italic">
                (Mujhe maaf kar do Manu Devi.)
              </p>
            </div>
          </div>

          {/* Closing */}
          <div className="romantic-card text-center fade-in fade-in-delay-7">
            <p className="text-xl font-dancing text-primary">
              With all my love,
            </p>
            <p className="text-2xl font-dancing font-bold text-deep-rose mt-2">
              Rishabh
            </p>
            <div className="flex justify-center items-center mt-6 space-x-2">
              <Heart className="h-6 w-6 text-heart-red fill-current" />
              <Heart className="h-4 w-4 text-heart-red fill-current" />
              <Heart className="h-6 w-6 text-heart-red fill-current" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Index;