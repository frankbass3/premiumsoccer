import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

import heroImage from "@assets/generated_images/Hero_background_workshop_studio_0f4b2082.png";
import juventusImage from "@assets/generated_images/Framed_Juventus_jersey_1ed416e1.png";
import milanImage from "@assets/generated_images/Framed_AC_Milan_jersey_46208ef6.png";
import interImage from "@assets/generated_images/Framed_Inter_Milan_jersey_8e58968f.png";
import romaImage from "@assets/generated_images/Framed_AS_Roma_jersey_fa8a55fe.png";
import napoliImage from "@assets/generated_images/Framed_Napoli_jersey_669b960a.png";
import lazioImage from "@assets/generated_images/Framed_Lazio_jersey_33d5e342.png";
import fiorentinaImage from "@assets/generated_images/Framed_Fiorentina_jersey_9d40e175.png";
import atalantaImage from "@assets/generated_images/Framed_Atalanta_jersey_b661852f.png";

interface Product {
  id: number;
  name: string;
  team: string;
  price: number;
  image: string;
}

const products: Product[] = [
  { id: 1, name: "Maglia Juventus Classica", team: "Juventus", price: 189.99, image: juventusImage },
  { id: 2, name: "Maglia AC Milan Vintage", team: "AC Milan", price: 199.99, image: milanImage },
  { id: 3, name: "Maglia Inter Storica", team: "Inter Milano", price: 189.99, image: interImage },
  { id: 4, name: "Maglia AS Roma Leggendaria", team: "AS Roma", price: 179.99, image: romaImage },
  { id: 5, name: "Maglia Napoli Iconica", team: "SSC Napoli", price: 189.99, image: napoliImage },
  { id: 6, name: "Maglia Lazio Classica", team: "SS Lazio", price: 179.99, image: lazioImage },
  { id: 7, name: "Maglia Fiorentina Vintage", team: "ACF Fiorentina", price: 189.99, image: fiorentinaImage },
  { id: 8, name: "Maglia Atalanta Storica", team: "Atalanta", price: 179.99, image: atalantaImage },
];

function ProductCard({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();

  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrement = () => {
    if (quantity < 10) setQuantity(quantity + 1);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('it-IT', {
      style: 'currency',
      currency: 'EUR'
    }).format(price);
  };

  const handleBuy = () => {
    toast({
      title: "Aggiunto al carrello!",
      description: `${quantity} x ${product.name} - ${formatPrice(product.price * quantity)}`,
    });
  };

  return (
    <Card className="overflow-hidden hover-elevate transition-all duration-300" data-testid={`card-product-${product.id}`}>
      <CardContent className="p-0">
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            data-testid={`img-product-${product.id}`}
          />
        </div>
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground" data-testid={`text-product-name-${product.id}`}>
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">{product.team}</p>
          </div>
          
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-primary" data-testid={`text-price-${product.id}`}>
              {formatPrice(product.price)}
            </span>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-foreground">Quantità:</span>
              <div className="flex items-center gap-2">
                <Button
                  size="icon"
                  variant="outline"
                  onClick={handleDecrement}
                  disabled={quantity <= 1}
                  data-testid={`button-decrement-${product.id}`}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="min-w-[2rem] text-center font-semibold" data-testid={`text-quantity-${product.id}`}>
                  {quantity}
                </span>
                <Button
                  size="icon"
                  variant="outline"
                  onClick={handleIncrement}
                  disabled={quantity >= 10}
                  data-testid={`button-increment-${product.id}`}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Button
              onClick={handleBuy}
              className="w-full gap-2"
              size="lg"
              data-testid={`button-buy-${product.id}`}
            >
              <ShoppingCart className="h-5 w-5" />
              Acquista Ora
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Home() {
  const leftProducts = products.filter((_, index) => index % 2 === 0);
  const rightProducts = products.filter((_, index) => index % 2 !== 0);

  return (
    <div className="min-h-screen bg-background">
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
        data-testid="section-hero"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight" data-testid="text-hero-title">
            Maglie da Calcio Incorniciate
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Trasforma le tue maglie preferite in opere d'arte. Cornici premium realizzate artigianalmente per preservare i momenti più emozionanti del calcio italiano.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/20 backdrop-blur-md border-white/40 text-white text-base px-8"
            onClick={() => {
              document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
            }}
            data-testid="button-hero-cta"
          >
            Scopri la Collezione
          </Button>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4" id="products">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-section-title">
              La Nostra Collezione
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ogni maglia è accuratamente incorniciata con materiali di museo per garantire la massima protezione e valorizzazione. Cornici in legno massello, vetro anti-UV e passepartout su misura.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8" data-testid="column-left">
              {leftProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="space-y-8" data-testid="column-right">
              {rightProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t bg-card py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">Maglie Incorniciate</h3>
              <p className="text-sm text-muted-foreground">
                Cornici artigianali di alta qualità per le tue maglie da calcio più preziose.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">Contatti</h3>
              <p className="text-sm text-muted-foreground">
                Email: info@maglieincorniciate.it<br />
                Tel: +39 02 1234 5678<br />
                Milano, Italia
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4 text-foreground">Informazioni</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>Spedizione in tutta Italia</li>
                <li>Garanzia di qualità</li>
                <li>Cornici su misura</li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 Maglie da Calcio Incorniciate. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
