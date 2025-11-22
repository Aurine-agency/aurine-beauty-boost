import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  {
    title: "Wiedza o branży beauty",
    description: "Pracujemy wyłącznie z salonami beauty - znamy Twoje wyzwania i wiemy, jak je rozwiązać.",
  },
  {
    title: "Przejrzyste rozliczenia",
    description: "Bez ukrytych kosztów. Płacisz tylko za to, co dostarcza realne rezultaty.",
  },
  {
    title: "Elastyczność",
    description: "Dostosowujemy kampanie do sezonu, Twoich promocji i aktualnych potrzeb salonu.",
  },
  {
    title: "Szybki kontakt",
    description: "Jesteśmy dostępni, gdy nas potrzebujesz. Bez czekania tygodniami na odpowiedź.",
  },
  {
    title: "Regularne raporty",
    description: "Wiesz dokładnie, na co idą Twoje pieniądze i jakie przynoszą efekty.",
  },
  {
    title: "Bezpłatna konsultacja",
    description: "Przeanalizujemy Twój salon i pokażemy, jak możemy Ci pomóc - całkowicie za darmo.",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Dlaczego salony wybierają
            <span className="text-primary block mt-2">właśnie nas?</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Bo rozumiemy, że prowadzisz biznes i potrzebujesz partnera, któremu możesz zaufać.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CheckCircle2 className="h-8 w-8 text-primary mb-3" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
