import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Play } from "lucide-react";
import chubbyMain from "@/assets/chubby-main.png";
import chubbyCharacter from "@/assets/chubby-character.png";
import chubbyReading from "@/assets/chubby-reading.png";

const Stories = () => {
  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <img 
            src={chubbyCharacter} 
            alt="Chubby the cat" 
            className="w-48 h-48 mx-auto mb-6 object-contain"
          />
          <h1 className="text-5xl font-serif font-bold text-foreground mb-2">
            Chubby's Cozy Corner
          </h1>
          <p className="text-lg text-muted-foreground">
            Join Chubby on his daily adventures
          </p>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="comic" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12 bg-card rounded-xl p-2 h-14">
            <TabsTrigger value="comic" className="text-lg font-medium rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Comic</TabsTrigger>
            <TabsTrigger value="story" className="text-lg font-medium rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Short Story</TabsTrigger>
            <TabsTrigger value="voice" className="text-lg font-medium rounded-lg data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Voice</TabsTrigger>
          </TabsList>

          {/* Comic Tab */}
          <TabsContent value="comic" className="space-y-8">
            {/* Comic Panels Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { image: chubbyMain, alt: "Chubby stretching in the morning sun" },
                { image: chubbyCharacter, alt: "Chubby contemplating his breakfast" },
                { image: chubbyReading, alt: "Chubby reading his favorite book" },
                { image: chubbyMain, alt: "Chubby taking his afternoon nap" },
                { image: chubbyCharacter, alt: "Chubby playing with his favorite toy" },
                { image: chubbyReading, alt: "Chubby enjoying story time" }
              ].map((panel, index) => (
                <Card key={index} className="bg-card border border-border aspect-square rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0 h-full">
                    <img 
                      src={panel.image} 
                      alt={panel.alt} 
                      className="w-full h-full object-cover"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Interactive Poll */}
            <Card className="bg-card border border-border rounded-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-6 text-center">
                  What would Chubby do next?
                </h3>
                <RadioGroup defaultValue="option1" className="space-y-4">
                  <div className="flex items-center space-x-3 p-4 rounded-xl hover:bg-muted/50 transition-colors">
                    <RadioGroupItem value="option1" id="option1" />
                    <label 
                      htmlFor="option1" 
                      className="text-lg text-foreground font-medium cursor-pointer flex-1"
                    >
                      He'd pounce on that muffin!
                    </label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 rounded-xl hover:bg-muted/50 transition-colors">
                    <RadioGroupItem value="option2" id="option2" />
                    <label 
                      htmlFor="option2" 
                      className="text-lg text-foreground font-medium cursor-pointer flex-1"
                    >
                      He'd sniff it with suspicion
                    </label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 rounded-xl hover:bg-muted/50 transition-colors">
                    <RadioGroupItem value="option3" id="option3" />
                    <label 
                      htmlFor="option3" 
                      className="text-lg text-foreground font-medium cursor-pointer flex-1"
                    >
                      He'd find a sunny spot for a nap instead
                    </label>
                  </div>
                </RadioGroup>
                <Button className="w-full mt-6 h-12 text-lg rounded-xl">
                  Cast Your Vote
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Short Story Tab */}
          <TabsContent value="story" className="space-y-6">
            <Card className="bg-card border-2 border-border">
              <CardContent className="p-6">
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                  Today's Cozy Adventure
                </h3>
                <div className="prose prose-lg max-w-none">
                  <p className="text-foreground leading-relaxed mb-4">
                    Chubby stretched lazily in his favorite sunny spot by the window. 
                    The afternoon light cast warm shadows across his cream-colored fur 
                    as he contemplated the important decision of the day: should he 
                    move to the food bowl, or was this sunny spot too perfect to leave?
                  </p>
                  <p className="text-foreground leading-relaxed mb-4">
                    After careful consideration (approximately 30 seconds), Chubby 
                    decided that energy efficiency was key. Why walk to the food when 
                    he could simply meow loud enough for his human to bring it to him?
                  </p>
                </div>
                <Button className="mt-4">Continue Reading</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Voice Tab */}
          <TabsContent value="voice" className="space-y-6">
            <Card className="bg-card border-2 border-border">
              <CardContent className="p-6">
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                  Listen to Chubby's Adventures
                </h3>
                <div className="flex items-center space-x-4 mb-6">
                  <Button size="lg" className="rounded-full w-16 h-16">
                    <Play size={24} />
                  </Button>
                  <div className="flex-1">
                    <div className="h-2 bg-muted rounded-full">
                      <div className="h-2 bg-secondary rounded-full w-1/3"></div>
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground mt-1">
                      <span>1:25</span>
                      <span>4:30</span>
                    </div>
                  </div>
                </div>
                
                {/* Featured Comic Read-Aloud */}
                <Card className="bg-muted/30 border border-border mb-6">
                  <CardContent className="p-4">
                    <h4 className="font-serif font-bold text-primary mb-2">
                      Chubby's Comic Read-Aloud
                    </h4>
                    <div className="flex items-center space-x-4">
                      <img 
                        src={chubbyMain} 
                        alt="Comic narration" 
                        className="w-16 h-16 object-contain"
                      />
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground italic mb-2">
                          "I'm not lazy, I'm just energy-efficient."
                        </p>
                        <Button size="sm" className="rounded-full">
                          <Play size={16} />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        <section className="mt-16">
          <h3 className="text-3xl font-serif font-bold text-foreground mb-8 text-center">
            Take Chubby With You
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-peach/10 border border-border rounded-2xl hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-peach/20 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl">☕</span>
                </div>
                <h4 className="text-xl font-serif font-bold text-foreground mb-3">Mug Club</h4>
                <p className="text-muted-foreground mb-4">Join our cozy community of Chubby fans</p>
                <Button variant="outline" className="w-full h-12 text-lg rounded-xl">Join Now</Button>
              </CardContent>
            </Card>
            
            <Card className="bg-secondary/10 border border-border rounded-2xl hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-secondary/20 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl">📖</span>
                </div>
                <h4 className="text-xl font-serif font-bold text-foreground mb-3">A Cozy Nook</h4>
                <p className="text-muted-foreground mb-4">Listen to Chubby's stories anywhere</p>
                <Button className="w-full h-12 text-lg rounded-xl">
                  <Play className="mr-2" size={20} />
                  Listen Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Stories;