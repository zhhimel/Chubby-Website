import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, Package, User, CreditCard } from "lucide-react";
import chubbyMain from "@/assets/chubby-main.png";

const Account = () => {
  const orders = [
    {
      id: 1,
      title: "Sip. Smile. Repeat",
      category: "Mug",
      price: 18.00,
      status: "Delivered",
      image: "☕"
    },
    {
      id: 2,
      title: "Charging...",
      category: "Apparel",
      price: 24.00,
      status: "Processing",
      image: "👕"
    }
  ];

  const subscriptions = [
    {
      id: 1,
      name: "Chubby's Monthly Box",
      status: "Active",
      renewDate: "May 20, 2024",
      price: 24.99
    }
  ];

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center space-x-6 mb-8">
          <img 
            src={chubbyMain} 
            alt="Chubby the cat" 
            className="w-24 h-24 object-contain"
          />
          <div>
            <h1 className="text-4xl font-serif font-bold text-primary mb-2">
              Account Dashboard
            </h1>
            <p className="text-muted-foreground">
              Manage your Chubby Stories experience
            </p>
          </div>
        </div>

        {/* Account Tabs */}
        <Tabs defaultValue="orders" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="orders" className="flex items-center space-x-2">
              <Package size={16} />
              <span>Orders</span>
            </TabsTrigger>
            <TabsTrigger value="subscriptions" className="flex items-center space-x-2">
              <CreditCard size={16} />
              <span>Subscriptions</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center space-x-2">
              <User size={16} />
              <span>Profile</span>
            </TabsTrigger>
          </TabsList>

          {/* Orders Tab */}
          <TabsContent value="orders" className="space-y-6">
            <Card className="bg-card border-2 border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-primary">Orders</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {orders.map((order) => (
                  <Card key={order.id} className="bg-muted/30 border border-muted">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-background rounded-lg flex items-center justify-center text-2xl">
                            {order.image}
                          </div>
                          <div>
                            <h3 className="font-semibold text-primary">{order.title}</h3>
                            <p className="text-sm text-muted-foreground">{order.category}</p>
                            <p className="text-sm font-medium">${order.price.toFixed(2)}</p>
                          </div>
                        </div>
                        <div className="text-right space-y-2">
                          <Badge 
                            variant={order.status === "Delivered" ? "default" : "secondary"}
                            className={order.status === "Delivered" ? "bg-success" : ""}
                          >
                            {order.status === "Delivered" && <CheckCircle size={14} className="mr-1" />}
                            {order.status}
                          </Badge>
                          <div>
                            <p className="text-lg font-bold text-primary">${order.price.toFixed(2)}</p>
                            <Button variant="outline" size="sm">View Order</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Empty State for Demo */}
                <Card className="bg-muted/20 border border-dashed border-muted">
                  <CardContent className="p-8 text-center">
                    <Package size={48} className="mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-semibold text-primary mb-2">No more orders</h3>
                    <p className="text-muted-foreground mb-4">
                      Ready to add some Chubby magic to your life?
                    </p>
                    <Button asChild>
                      <a href="/shop">Browse Shop</a>
                    </Button>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Subscriptions Tab */}
          <TabsContent value="subscriptions" className="space-y-6">
            <Card className="bg-card border-2 border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-primary">Subscriptions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {subscriptions.map((subscription) => (
                  <Card key={subscription.id} className="bg-success/10 border border-success/30">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center">
                            <CheckCircle size={24} className="text-success" />
                          </div>
                          <div>
                            <h3 className="text-xl font-serif font-bold text-primary">
                              {subscription.name}
                            </h3>
                            <div className="flex items-center space-x-2 mt-1">
                              <Badge variant="default" className="bg-success">
                                <CheckCircle size={12} className="mr-1" />
                                {subscription.status}
                              </Badge>
                              <span className="text-sm text-muted-foreground">
                                Renews {subscription.renewDate}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-primary">
                            ${subscription.price}/month
                          </p>
                          <div className="space-x-2 mt-2">
                            <Button variant="outline" size="sm">Manage</Button>
                            <Button variant="ghost" size="sm" className="text-destructive">
                              Cancel
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Subscription CTA */}
                <Card className="bg-purple-light border-2 border-border">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-serif font-bold text-primary mb-4">
                      Discover More Subscriptions
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Explore other ways to get your regular dose of Chubby content
                    </p>
                    <Button variant="outline" asChild>
                      <a href="/shop">Browse Subscriptions</a>
                    </Button>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card className="bg-card border-2 border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-serif text-primary">Profile</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="name@example.com"
                    defaultValue="name@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Subscription Preferences</Label>
                  <Card className="bg-muted/30 border border-muted">
                    <CardContent className="p-4">
                      <div className="space-y-3">
                        <label className="flex items-center space-x-3">
                          <input type="checkbox" defaultChecked className="rounded" />
                          <span className="text-sm">New comic releases</span>
                        </label>
                        <label className="flex items-center space-x-3">
                          <input type="checkbox" defaultChecked className="rounded" />
                          <span className="text-sm">Voice content updates</span>
                        </label>
                        <label className="flex items-center space-x-3">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">Shop promotions</span>
                        </label>
                        <label className="flex items-center space-x-3">
                          <input type="checkbox" defaultChecked className="rounded" />
                          <span className="text-sm">Monthly newsletter</span>
                        </label>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex space-x-4">
                  <Button>Save Changes</Button>
                  <Button variant="outline">Cancel</Button>
                </div>
              </CardContent>
            </Card>

            {/* Account Settings */}
            <Card className="bg-card border-2 border-border">
              <CardHeader>
                <CardTitle className="text-xl font-serif text-primary">Account Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  Change Password
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  Download My Data
                </Button>
                <Button variant="outline" className="w-full justify-start text-destructive hover:bg-destructive/10">
                  Delete Account
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Authentication Notice */}
        <Card className="mt-8 bg-muted/30 border border-muted-foreground/20">
          <CardContent className="p-6 text-center">
            <h4 className="font-semibold text-primary mb-2">Account Features Ready</h4>
            <p className="text-sm text-muted-foreground">
              Connect to Supabase to enable user authentication, order history, and subscription management.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Account;