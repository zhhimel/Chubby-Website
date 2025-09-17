import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Star } from "lucide-react";
import { Link } from "react-router-dom";
import chubbyHero from "@/assets/chubby-hero.png";
import chubbyReading from "@/assets/chubby-reading.png";
import chubbyVoice from "@/assets/chubby-voice.png";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <img 
              src={chubbyHero} 
              alt="Chubby the cat - Your adorable reading companion" 
              className="w-full max-w-md mx-auto mb-8 object-contain"
            />
          </div>
          
          <h1 className="text-6xl md:text-7xl font-serif font-bold text-foreground mb-8 leading-tight">
            Read Chubby's<br />Latest Adventures!
          </h1>
          
          <p className="text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-medium">
            Meet Chubby, the internet's most relatable cat!
          </p>
          
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 h-auto">
            <Play className="mr-3" size={24} />
            Start Reading
          </Button>
        </div>
      </section>

      {/* Content Categories */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Comics */}
            <Card className="bg-card border-2 border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <img 
                    src={chubbyReading} 
                    alt="Read comic stories with Chubby" 
                    className="w-36 h-36 mx-auto object-contain"
                  />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-3">Read the Comic</h3>
                <p className="text-muted-foreground mb-6 text-lg">See More Comics</p>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/stories">Explore Comics</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Short Stories */}
            <Card className="bg-card border-2 border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <img 
                    src={chubbyHero} 
                    alt="Short stories featuring Chubby" 
                    className="w-36 h-36 mx-auto object-contain"
                  />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-3">Short Story</h3>
                <p className="text-muted-foreground mb-3 text-lg font-medium">Only 500 left!</p>
                <Button className="mb-4 w-full">Notify Me</Button>
              </CardContent>
            </Card>

            {/* Voice Stories */}
            <Card className="bg-card border-2 border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <img 
                    src={chubbyVoice} 
                    alt="Voice stories and audio content" 
                    className="w-36 h-36 mx-auto object-contain"
                  />
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-3">Voice Story</h3>
                <p className="text-muted-foreground mb-6 text-lg">Sticker Packs</p>
                <Button variant="outline" asChild className="w-full">
                  <Link to="/voice">Listen Now</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Fan Community */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Fan Club */}
            <Card className="bg-purple/10 border-2 border-purple/20 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Join Chubby Fan Club!</h3>
                <div className="flex justify-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-secondary/30 rounded-full"></div>
                  <div className="w-10 h-10 bg-secondary/30 rounded-full"></div>
                  <div className="w-10 h-10 bg-secondary/30 rounded-full"></div>
                </div>
                <Button asChild className="w-full">
                  <Link to="/shop">Join Community</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Fan Content */}
            <Card className="bg-card border-2 border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Fan Content Hub</h3>
                <div className="flex justify-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-muted rounded-full"></div>
                  <div className="w-10 h-10 bg-muted rounded-full"></div>
                  <div className="w-10 h-10 bg-muted rounded-full"></div>
                </div>
                <p className="text-muted-foreground mb-6 text-lg">Submit Content</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 px-4 text-center bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <blockquote className="text-3xl md:text-4xl font-serif italic text-foreground leading-relaxed">
            "Life's an adventure. Sometimes I nap through it."
          </blockquote>
        </div>
      </section>

      {/* Rating Stars */}
      <section className="py-12 px-4 text-center bg-background">
        <div className="flex justify-center space-x-2">
          {[...Array(4)].map((_, i) => (
            <Star key={i} className="w-10 h-10 fill-peach text-peach" />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;