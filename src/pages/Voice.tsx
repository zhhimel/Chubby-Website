import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { useState } from "react";
import chubbyVoice from "@/assets/chubby-voice.png";

const Voice = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const episodes = [
    {
      id: 1,
      title: "Episode 12",
      duration: "6:02",
      description: "Chubby discovers the art of the perfect nap",
      image: chubbyVoice
    },
    {
      id: 2,
      title: "Bedtime Story",
      duration: "4:22",
      description: "A cozy tale for peaceful dreams",
      image: chubbyVoice
    },
    {
      id: 3,
      title: "Episode 11",
      duration: "5:10",
      description: "The great treat hunt adventure",
      image: chubbyVoice
    },
    {
      id: 4,
      title: "Short 7",
      duration: "3:18",
      description: "Quick wisdom from our favorite cat",
      image: chubbyVoice
    }
  ];

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Hear Chubby Speak!
          </h1>
        </div>

        {/* Featured Audio Player */}
        <Card className="mb-12 bg-gradient-to-br from-secondary/20 to-peach/20 border-2 border-border">
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                Now Playing: Chubby's Cozy Corner
              </h2>
            </div>

            {/* Audio Player Controls */}
            <div className="bg-background/80 rounded-lg p-6 mb-6">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <Button variant="ghost" size="sm">
                  <SkipBack size={20} />
                </Button>
                <Button 
                  size="lg" 
                  className="rounded-full w-16 h-16 bg-primary hover:bg-primary/90"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                </Button>
                <Button variant="ghost" size="sm">
                  <SkipForward size={20} />
                </Button>
              </div>
              
              {/* Progress Bar */}
              <div className="mb-4">
                <div className="h-2 bg-muted rounded-full">
                  <div className="h-2 bg-secondary rounded-full w-1/3 transition-all duration-300"></div>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground mt-2">
                  <span>1:25</span>
                  <span>4:30</span>
                </div>
              </div>

              {/* Volume Control */}
              <div className="flex items-center justify-center space-x-2">
                <Volume2 size={16} className="text-muted-foreground" />
                <div className="h-1 bg-muted rounded-full w-24">
                  <div className="h-1 bg-secondary rounded-full w-3/4"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Featured Comic Read-Aloud */}
        <Card className="mb-12 bg-card border-2 border-border">
          <CardContent className="p-6">
            <h3 className="text-2xl font-serif font-bold text-primary mb-6">
              Chubby's Comic Read-Aloud
            </h3>
            
            <Card className="bg-muted/30 border border-muted">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="text-center">
                    <img 
                      src={chubbyVoice} 
                      alt="Chubby speaking" 
                      className="w-32 h-32 mx-auto mb-4 object-contain"
                    />
                    <div className="bg-background rounded-lg p-4 relative">
                      <p className="text-foreground italic">
                        "I'm not lazy, I'm just energy-efficient."
                      </p>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-background"></div>
                    </div>
                  </div>
                  <div className="text-center md:text-left">
                    <h4 className="text-xl font-serif font-bold text-primary mb-4">
                      Today's Featured Reading
                    </h4>
                    <p className="text-muted-foreground mb-4">
                      Listen as Chubby narrates his latest comic adventure with his signature laid-back charm.
                    </p>
                    <Button className="bg-primary hover:bg-primary/90">
                      <Play className="mr-2" size={16} />
                      Play Reading
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        {/* Playlist */}
        <Card className="bg-card border-2 border-border">
          <CardHeader>
            <CardTitle className="text-2xl font-serif font-bold text-primary text-center">
              Playlist
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {episodes.map((episode) => (
                <Card key={episode.id} className="bg-muted/30 border border-muted hover:bg-muted/50 transition-colors cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <img 
                        src={episode.image} 
                        alt={episode.title} 
                        className="w-16 h-16 object-contain rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-primary">{episode.title}</h4>
                        <p className="text-sm text-muted-foreground mb-1">{episode.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">{episode.duration}</span>
                          <Button size="sm" variant="ghost" className="rounded-full p-2">
                            <Play size={16} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card className="mt-12 bg-secondary/20 border-2 border-secondary">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">
              Love Chubby's Voice?
            </h3>
            <p className="text-foreground mb-6 max-w-2xl mx-auto">
              Get early access to new episodes, behind-the-scenes content, and exclusive voice recordings 
              by joining our premium community.
            </p>
            <Button size="lg" className="bg-peach hover:bg-peach/80 text-peach-foreground">
              Join Premium
            </Button>
          </CardContent>
        </Card>

        {/* Notice for Audio Features */}
        <Card className="mt-8 bg-muted/30 border border-muted-foreground/20">
          <CardContent className="p-6 text-center">
            <h4 className="font-semibold text-primary mb-2">Audio Streaming Ready</h4>
            <p className="text-sm text-muted-foreground">
              Connect to Supabase to enable real audio streaming, playlist management, and user progress tracking.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Voice;