import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Upload, Settings, Palette, Type } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useCategories, useSiteSettings } from "@/hooks/useSupabase";
import { toast } from "sonner";
import { saveAndApplyTheme, loadSavedTheme, type ThemeColors } from "@/lib/theme";

const Admin = () => {
  const [activeSection, setActiveSection] = useState("products");
  const [products, setProducts] = useState<any[]>([]);
  const [productForm, setProductForm] = useState({
    name: '',
    price: '',
    category_id: '',
    description: '',
    quantity: ''
  });
  // Local state for color inputs (not applied until user clicks Apply)
  const [pendingColors, setPendingColors] = useState<ThemeColors>({
    primary: '#2C3E50',
    secondary: '#5D9CEC', 
    accent: '#F39C7A',
    background: '#FFFEF7'
  });
  
  // Current applied theme colors
  const [appliedColors, setAppliedColors] = useState<ThemeColors>({
    primary: '#2C3E50',
    secondary: '#5D9CEC', 
    accent: '#F39C7A',
    background: '#FFFEF7'
  });
  
  const { categories } = useCategories();
  const { settings, updateSetting } = useSiteSettings();

  useEffect(() => {
    fetchProducts();
    // Load saved theme on component mount
    const savedColors = loadSavedTheme();
    setPendingColors(savedColors);
    setAppliedColors(savedColors);
  }, []);

  const fetchProducts = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select(`
          *,
          product_categories (name)
        `)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
      toast.error('Failed to fetch products');
    }
  };

  const handleProductSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const slug = productForm.name.toLowerCase().replace(/\s+/g, '-');
      const { error } = await supabase
        .from('products')
        .insert({
          name: productForm.name,
          slug,
          price: parseFloat(productForm.price),
          category_id: productForm.category_id,
          description: productForm.description,
          quantity: parseInt(productForm.quantity),
          status: 'active'
        });
      
      if (error) throw error;
      
      toast.success('Product created successfully!');
      setProductForm({ name: '', price: '', category_id: '', description: '', quantity: '' });
      fetchProducts();
    } catch (error) {
      console.error('Error creating product:', error);
      toast.error('Failed to create product');
    }
  };

  const handleColorChange = (colorKey: string, color: string) => {
    // Update local state only - don't apply immediately
    setPendingColors(prev => ({ ...prev, [colorKey]: color }));
  };

  const handleApplyColors = async () => {
    try {
      // Save to localStorage and apply CSS variables
      saveAndApplyTheme(pendingColors);
      
      // Update applied colors state
      setAppliedColors(pendingColors);
      
      // Also save to Supabase settings
      await updateSetting('theme_colors', pendingColors);
      
      toast.success('Theme colors applied successfully!');
    } catch (error) {
      console.error('Error applying theme colors:', error);
      toast.error('Failed to apply theme colors');
    }
  };

  const hasUnappliedChanges = JSON.stringify(pendingColors) !== JSON.stringify(appliedColors);

  return (
    <div className="min-h-screen bg-background">
      {/* Admin Header */}
      <div className="bg-primary text-primary-foreground px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-serif font-bold">Chubby Stories Admin</h1>
          <div className="flex items-center space-x-4">
            <Button variant="secondary" size="sm">
              <Settings size={16} className="mr-2" />
              Settings
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="/">View Site</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="theme">Theme</TabsTrigger>
          </TabsList>

          {/* Products Management */}
          <TabsContent value="products" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-serif font-bold text-primary">Product Management</h2>
              <Button>
                <Plus size={16} className="mr-2" />
                Add Product
              </Button>
            </div>

            {/* Add Product Form */}
            <Card className="bg-card border-2 border-border">
              <CardHeader>
                <CardTitle>Add New Product</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleProductSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="productName">Product Name</Label>
                      <Input 
                        id="productName" 
                        placeholder="Enter product name"
                        value={productForm.name}
                        onChange={(e) => setProductForm({...productForm, name: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="price">Price ($)</Label>
                      <Input 
                        id="price" 
                        type="number" 
                        step="0.01"
                        placeholder="0.00"
                        value={productForm.price}
                        onChange={(e) => setProductForm({...productForm, price: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select 
                        value={productForm.category_id} 
                        onValueChange={(value) => setProductForm({...productForm, category_id: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category.id} value={category.id}>
                              {category.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="stock">Stock Quantity</Label>
                      <Input 
                        id="stock" 
                        type="number" 
                        placeholder="0"
                        value={productForm.quantity}
                        onChange={(e) => setProductForm({...productForm, quantity: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Enter product description"
                      value={productForm.description}
                      onChange={(e) => setProductForm({...productForm, description: e.target.value})}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="images">Product Images</Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                      <Upload size={48} className="mx-auto text-muted-foreground mb-4" />
                      <p className="text-muted-foreground mb-2">Drag & drop images here or click to upload</p>
                      <Button type="button" variant="outline">Choose Files</Button>
                    </div>
                  </div>

                  <Button type="submit" className="w-full">Create Product</Button>
                </form>
              </CardContent>
            </Card>

            {/* Products List */}
            <Card className="bg-card border-2 border-border">
              <CardHeader>
                <CardTitle>Existing Products</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {products.map((product) => (
                    <Card key={product.id} className="bg-muted/30 border border-muted">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 bg-background rounded-lg flex items-center justify-center">
                              <span className="text-2xl">📦</span>
                            </div>
                            <div>
                              <h3 className="font-semibold text-primary">{product.name}</h3>
                              <p className="text-sm text-muted-foreground">{product.product_categories?.name}</p>
                              <div className="flex items-center space-x-2 mt-1">
                                <Badge variant="outline">${product.price}</Badge>
                                <Badge variant="secondary">{product.quantity} in stock</Badge>
                                <Badge variant="default">{product.status}</Badge>
                              </div>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Edit size={16} />
                            </Button>
                            <Button variant="outline" size="sm" className="text-destructive">
                              <Trash2 size={16} />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  {products.length === 0 && (
                    <div className="text-center py-8 text-muted-foreground">
                      No products found. Create your first product above!
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Content Management */}
          <TabsContent value="content" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-serif font-bold text-primary">Content Management</h2>
              <Button>
                <Plus size={16} className="mr-2" />
                Add Content
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card border-2 border-border">
                <CardHeader>
                  <CardTitle>Comics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Manage comic episodes and panels</p>
                  <Button variant="outline" className="w-full">Manage Comics</Button>
                </CardContent>
              </Card>

              <Card className="bg-card border-2 border-border">
                <CardHeader>
                  <CardTitle>Stories</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Create and edit short stories</p>
                  <Button variant="outline" className="w-full">Manage Stories</Button>
                </CardContent>
              </Card>

              <Card className="bg-card border-2 border-border">
                <CardHeader>
                  <CardTitle>Voice Content</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">Upload and manage audio content</p>
                  <Button variant="outline" className="w-full">Manage Audio</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Orders Management */}
          <TabsContent value="orders" className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-primary">Order Management</h2>
            
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <Card className="bg-card border-2 border-border text-center p-4">
                <h3 className="text-2xl font-bold text-primary">24</h3>
                <p className="text-muted-foreground">Pending Orders</p>
              </Card>
              <Card className="bg-card border-2 border-border text-center p-4">
                <h3 className="text-2xl font-bold text-primary">156</h3>
                <p className="text-muted-foreground">Completed Orders</p>
              </Card>
              <Card className="bg-card border-2 border-border text-center p-4">
                <h3 className="text-2xl font-bold text-primary">$3,420</h3>
                <p className="text-muted-foreground">Monthly Revenue</p>
              </Card>
              <Card className="bg-card border-2 border-border text-center p-4">
                <h3 className="text-2xl font-bold text-primary">8</h3>
                <p className="text-muted-foreground">Active Subscriptions</p>
              </Card>
            </div>

            <Card className="bg-card border-2 border-border">
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Order management will be available when connected to Supabase with Stripe integration.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Theme Customization */}
          <TabsContent value="theme" className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-primary">Theme Customization</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-card border-2 border-border">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Palette className="mr-2" />
                    Color Scheme
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Primary Color</Label>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-primary rounded border-2 border-border"></div>
                      <Input 
                        type="color" 
                        value={pendingColors.primary} 
                        onChange={(e) => handleColorChange('primary', e.target.value)}
                        className="w-20 h-8" 
                      />
                      <span className="text-sm text-muted-foreground">{pendingColors.primary}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Secondary Color</Label>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-secondary rounded border-2 border-border"></div>
                      <Input 
                        type="color" 
                        value={pendingColors.secondary} 
                        onChange={(e) => handleColorChange('secondary', e.target.value)}
                        className="w-20 h-8" 
                      />
                      <span className="text-sm text-muted-foreground">{pendingColors.secondary}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Accent Color</Label>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-peach rounded border-2 border-border"></div>
                      <Input 
                        type="color" 
                        value={pendingColors.accent} 
                        onChange={(e) => handleColorChange('accent', e.target.value)}
                        className="w-20 h-8" 
                      />
                      <span className="text-sm text-muted-foreground">{pendingColors.accent}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Background Color</Label>
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-background rounded border-2 border-border"></div>
                      <Input 
                        type="color" 
                        value={pendingColors.background} 
                        onChange={(e) => handleColorChange('background', e.target.value)}
                        className="w-20 h-8" 
                      />
                      <span className="text-sm text-muted-foreground">{pendingColors.background}</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button 
                      onClick={handleApplyColors}
                      disabled={!hasUnappliedChanges}
                      className="w-full"
                    >
                      Apply Color Changes
                    </Button>
                    {hasUnappliedChanges && (
                      <p className="text-sm text-muted-foreground mt-2 text-center">
                        You have unsaved color changes
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-2 border-border">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Type className="mr-2" />
                    Typography
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Heading Font</Label>
                    <Select defaultValue="dm-serif">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dm-serif">DM Serif Display</SelectItem>
                        <SelectItem value="playfair">Playfair Display</SelectItem>
                        <SelectItem value="georgia">Georgia</SelectItem>
                        <SelectItem value="times">Times New Roman</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Body Font</Label>
                    <Select defaultValue="inter">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="inter">Inter</SelectItem>
                        <SelectItem value="roboto">Roboto</SelectItem>
                        <SelectItem value="open-sans">Open Sans</SelectItem>
                        <SelectItem value="lato">Lato</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button className="w-full">Apply Font Changes</Button>
                </CardContent>
              </Card>
            </div>

            {/* Preview Section */}
            <Card className="bg-card border-2 border-border">
              <CardHeader>
                <CardTitle>Theme Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="text-2xl font-serif font-bold text-primary mb-2">
                    Sample Heading
                  </h3>
                  <p className="text-foreground mb-4">
                    This is how your content will look with the current theme settings. 
                    You can preview different color combinations and fonts here.
                  </p>
                  <div className="flex space-x-2">
                    <Button size="sm">Primary Button</Button>
                    <Button variant="secondary" size="sm">Secondary Button</Button>
                    <Button variant="outline" size="sm">Outline Button</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Backend Integration Notice */}
        <Card className="mt-12 bg-muted/30 border border-muted-foreground/20">
          <CardContent className="p-6 text-center">
            <h4 className="font-semibold text-primary mb-2">Full Admin Features Available</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Connect to Supabase to enable full product management, order processing, content management, and real-time theme customization.
            </p>
            <Button variant="outline">Connect Backend</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Admin;