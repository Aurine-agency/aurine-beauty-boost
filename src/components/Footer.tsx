import aurinelogo from "@/assets/aurine-logo.png";

const Footer = () => {
  return (
    <footer className="py-12 bg-secondary/50 border-t border-border">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={aurinelogo} alt="Aurine" className="w-8 h-8" />
            <span className="text-lg font-semibold">Aurine</span>
          </div>
          
          <div className="text-center md:text-left">
            <p className="text-muted-foreground text-sm">
              © 2024 Aurine. Specjaliści od Facebook Ads dla branży beauty.
            </p>
          </div>
          
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Polityka prywatności
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Regulamin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
