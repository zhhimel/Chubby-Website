import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart } from "lucide-react";
import chubbyCharacter from "@/assets/chubby-character.png";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Mug Club",
      category: "Kitchenware",
      description: "Smile. Repeat.",
      price: 18,
      image: "☕",
      bgColor: "bg-purple-light",
      stock: "In Stock"
    },
    {
      id: 2,
      name: "Sticker Packs",
      category: "Printed Goods",
      description: "Chubby expressions for every mood",
      price: 12,
      image: "🏷️",
      bgColor: "bg-peach/30",
      stock: "Limited"
    },
    {
      id: 3,
      name: "Apparel",
      category: "Clothing",
      description: "Cozy Chubby clothing",
      price: 28,
      image: "👕",
      bgColor: "bg-muted",
      stock: "In Stock"
    },
    {
      id: 4,
      name: "Chubby's Monthly Box",
      category: "Subscription",
      description: "Monthly surprise box of Chubby goodies",
      price: 24.99,
      image: "📦",
      bgColor: "bg-purple-light",
      stock: "Subscribe",
      isSubscription: true
    }
  ];

  const featuredProduct = {
    name: "Chubby's Cozy Fall Bundle",
    price: 35,
    image: chubbyCharacter,
    description: "Complete fall collection with mug, stickers, and more!"
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <img 
            src={chubbyCharacter} 
            alt="Chubby shopping" 
            className="w-32 h-32 mx-auto mb-4 object-contain"
          />
          <h1 className="text-4xl font-serif font-bold text-primary mb-2">
            Chubby's Shop
          </h1>
          <p className="text-xl text-muted-foreground">
            Bring Chubby's cozy vibes home
          </p>
        </div>

        {/* Featured Product */}
        <Card className="mb-12 bg-gradient-to-r from-peach/20 to-secondary/20 border-2 border-border">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src={featuredProduct.image} 
                  alt={featuredProduct.name} 
                  className="w-full max-w-sm mx-auto object-contain"
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-serif font-bold text-primary mb-4">
                  {featuredProduct.name}
                </h2>
                <p className="text-lg text-foreground mb-4">
                  {featuredProduct.description}
                </p>
                <div className="flex items-center justify-center md:justify-start space-x-4 mb-6">
                  <span className="text-2xl font-bold text-primary">
                    ${featuredProduct.price}
                  </span>
                  <Badge variant="secondary">Featured</Badge>
                </div>
                <Button size="lg" className="bg-peach hover:bg-peach/80 text-peach-foreground">
                  <ShoppingCart className="mr-2" size={20} />
                  Shop Now
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Product Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {products.map((product) => (
            <Card key={product.id} className={`${product.bgColor} border-2 border-border hover:shadow-lg transition-shadow`}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <Badge variant="outline">{product.category}</Badge>
                  <Badge variant={product.stock === "Limited" ? "destructive" : "secondary"}>
                    {product.stock}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-center mb-4">
                  <div className="w-20 h-20 bg-background/50 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                    {product.image}
                  </div>
                  <CardTitle className="text-xl font-serif text-primary mb-2">
                    {product.name}
                  </CardTitle>
                  <p className="text-foreground mb-4">{product.description}</p>
                  <div className="flex items-center justify-center space-x-2 mb-4">
                    <span className="text-xl font-bold text-primary">
                      ${product.price}{product.isSubscription && "/month"}
                    </span>
                  </div>
                  <Button 
                    className={product.isSubscription ? "bg-peach hover:bg-peach/80" : ""}
                    variant={product.isSubscription ? "default" : "outline"}
                  >
                    {product.isSubscription ? "Subscribe" : "Add to Cart"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Subscription Highlight */}
        <Card className="bg-secondary/20 border-2 border-secondary">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">
              Subhby's Monthly Delights
            </h3>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <img 
                src={chubbyCharacter} 
                alt="Monthly subscription" 
                className="w-16 h-16 object-contain"
              />
              <div className="w-16 h-16 bg-background rounded-lg flex items-center justify-center">
                <span className="text-2xl">📦</span>
              </div>
            </div>
            <p className="text-foreground mb-6 max-w-2xl mx-auto">
              Get a curated box of Chubby merchandise, exclusive content, and surprises delivered monthly. 
              Perfect for true Chubby fans!
            </p>
            <Button size="lg" className="bg-peach hover:bg-peach/80 text-peach-foreground">
              Subscribe Now
            </Button>
          </CardContent>
        </Card>

        {/* Customer Reviews */}
        <section className="mt-12 text-center">
          <div className="flex justify-center space-x-1 mb-4">
            {[...Array(4)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-peach text-peach" />
            ))}
          </div>
          <p className="text-muted-foreground">
            Loved by thousands of Chubby fans worldwide
          </p>
        </section>

        {/* Notice for Backend Features */}
        <Card className="mt-12 bg-muted/30 border border-muted-foreground/20">
          <CardContent className="p-6 text-center">
            <h4 className="font-semibold text-primary mb-2">Ready for E-commerce?</h4>
            <p className="text-sm text-muted-foreground">
              To enable shopping cart, payments, and inventory management, connect to Supabase for backend functionality.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Shop;