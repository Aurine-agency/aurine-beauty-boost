import { Card } from "@/components/ui/card";
import { Target, TrendingUp, Users, Sparkles } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Precyzyjne targetowanie",
    description: "Docieramy dokładnie do tych kobiet, które szukają usług beauty w Twojej okolicy. Żadnych zmarnowanych złotówek na nietrafionych klientów.",
  },
  {
    icon: TrendingUp,
    title: "Kampanie, które sprzedają",
    description: "Tworzymy reklamy, które nie tylko wyglądają pięknie, ale przede wszystkim przekładają się na rezerwacje i wypełniony kalendarz.",
  },
  {
    icon: Users,
    title: "Budowanie społeczności",
    description: "Pomagamy budować lojalną bazę klientek, które wracają do Ciebie i polecają Twój salon znajomym.",
  },
  {
    icon: Sparkles,
    title: "Pełna obsługa kampanii",
    description: "Zajmujemy się wszystkim - od strategii, przez kreacje, po optymalizację. Ty skupiasz się na pracy w salonie, my dostarczamy klientki.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary/50">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Facebook Ads szyte na miarę
            <span className="text-primary block mt-2">dla branży beauty</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Rozumiemy specyfikę Twojego biznesu. Wiemy, czego szukają klientki salonów beauty i jak do nich dotrzeć.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,51,153,0.2)] animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <service.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
