import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import chubbyMain from "@/assets/chubby-main.png";

const About = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            About Chubby
          </h1>
        </div>

        {/* Chubby Character Section */}
        <Card className="mb-12 bg-card border-2 border-border">
          <CardContent className="p-8 text-center">
            <img 
              src={chubbyMain} 
              alt="Chubby the cat" 
              className="w-48 h-48 mx-auto mb-6 object-contain"
            />
            
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">
              The story of Chubby the cat
            </h2>
            
            <div className="max-w-3xl mx-auto text-lg leading-relaxed text-foreground space-y-4">
              <p>
                Chubby is a lovable, laid-back kitty who enjoys life's simple pleasures—like 
                snoozing, snacking, and sunbeams. With his relatable personality and chubby 
                charm, Chubby shows that it's okay to take it easy!
              </p>
              
              <p>
                Born from a desire to celebrate the art of relaxation and finding joy in 
                everyday moments, Chubby has become the internet's most relatable cat. 
                Whether he's contemplating the perfect nap spot or philosophizing about 
                the importance of snack time, Chubby reminds us all to slow down and 
                appreciate life's cozy moments.
              </p>
              
              <p>
                Through comics, stories, and voice content, Chubby shares his wisdom 
                about living authentically, embracing comfort, and never apologizing 
                for prioritizing rest and relaxation.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Meet the Creators */}
        <Card className="mb-12 bg-card border-2 border-border">
          <CardContent className="p-8">
            <h2 className="text-3xl font-serif font-bold text-primary text-center mb-8">
              Meet the Creators
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {/* Creator 1 */}
              <div className="text-center">
                <div className="w-32 h-32 bg-secondary/30 rounded-full mx-auto mb-4 flex items-center justify-center border-4 border-secondary">
                  <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center">
                    <span className="text-3xl">👩‍🎨</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Sarah</h3>
                <p className="text-muted-foreground">
                  Artist & Storyteller
                </p>
              </div>

              {/* Creator 2 */}
              <div className="text-center">
                <div className="w-32 h-32 bg-secondary/30 rounded-full mx-auto mb-4 flex items-center justify-center border-4 border-secondary">
                  <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center">
                    <span className="text-3xl">👨‍💻</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Mike</h3>
                <p className="text-muted-foreground">
                  Writer & Developer
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Character Creation Timeline */}
        <Card className="mb-12 bg-card border-2 border-border">
          <CardContent className="p-8">
            <h2 className="text-3xl font-serif font-bold text-primary text-center mb-8">
              Character creation
            </h2>
            
            <div className="max-w-md mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-8 bottom-0 w-0.5 bg-secondary"></div>
                
                {/* Timeline item */}
                <div className="relative flex items-center mb-8">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-lg border-4 border-background shadow-lg z-10">
                    2018
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold text-primary">The Beginning</h3>
                    <p className="text-muted-foreground">
                      Chubby was first sketched during a cozy afternoon, inspired by the universal 
                      desire to just relax and enjoy life's simple pleasures.
                    </p>
                  </div>
                </div>
                
                {/* More timeline items can be added */}
                <div className="relative flex items-center mb-8">
                  <div className="w-16 h-16 bg-peach rounded-full flex items-center justify-center text-white font-bold text-lg border-4 border-background shadow-lg z-10">
                    2019
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold text-primary">First Comics</h3>
                    <p className="text-muted-foreground">
                      The first Chubby comic strips were shared online, quickly resonating 
                      with people who appreciated his laid-back philosophy.
                    </p>
                  </div>
                </div>

                <div className="relative flex items-center">
                  <div className="w-16 h-16 bg-purple-light rounded-full flex items-center justify-center text-primary font-bold text-lg border-4 border-background shadow-lg z-10">
                    Now
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold text-primary">Growing Community</h3>
                    <p className="text-muted-foreground">
                      Chubby continues to inspire a growing community of fans who embrace 
                      the art of taking it easy and finding joy in everyday moments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Philosophy */}
        <Card className="bg-secondary/20 border-2 border-secondary">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">
              Chubby's Philosophy
            </h2>
            
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="bg-background/80 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Energy Efficiency</h3>
                <p className="text-foreground">
                  "Why use more energy than necessary? The perfect nap spot is worth the wait."
                </p>
              </div>
              
              <div className="bg-background/80 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Simple Pleasures</h3>
                <p className="text-foreground">
                  "Sunbeams, snacks, and soft blankets - life's greatest treasures are often the simplest."
                </p>
              </div>
              
              <div className="bg-background/80 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Authentic Living</h3>
                <p className="text-foreground">
                  "Be yourself, even if yourself happens to be wonderfully lazy and food-motivated."
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;