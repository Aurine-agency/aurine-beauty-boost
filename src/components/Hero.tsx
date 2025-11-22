import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import aurinelogo from "@/assets/aurine-logo.png";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background" />
      
      {/* Glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow" />
      
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <img 
            src={aurinelogo} 
            alt="Aurine Logo" 
            className="w-24 h-24 mx-auto mb-8 drop-shadow-[0_0_25px_rgba(255,51,153,0.5)]"
          />
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Twój salon beauty zasługuje na
            <span className="text-primary block mt-2">więcej klientów</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Specjalizujemy się w Facebook Ads dla branży beauty. Pomagamy salonom z małych miast 
            dotrzeć do nowych klientek i zapełnić kalendarz wizyt.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 shadow-[0_0_30px_rgba(255,51,153,0.4)]"
              onClick={scrollToContact}
            >
              Umów bezpłatną konsultację
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Zobacz nasze usługi
            </Button>
          </div>
          
          <div className="pt-12 flex items-center justify-center gap-12 text-sm text-muted-foreground">
            <div>
              <div className="text-3xl font-bold text-primary">150+</div>
              <div>Zadowolonych salonów</div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div>
              <div className="text-3xl font-bold text-primary">3x</div>
              <div>Średni wzrost rezerwacji</div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div>
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div>Wsparcie</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
