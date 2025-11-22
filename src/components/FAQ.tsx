import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Czy Facebook Ads naprawdę działa dla małych salonów?",
    answer: "Tak! Facebook Ads to jedno z najbardziej efektywnych narzędzi dla lokalnych biznesów. Pozwala precyzyjnie dotrzeć do kobiet w Twojej okolicy, które szukają usług beauty. Wielu naszych klientów to salony z małych miast, które dzięki reklamom na Facebooku znacząco zwiększyły liczbę rezerwacji.",
  },
  {
    question: "Ile kosztuje współpraca z Aurine?",
    answer: "Koszt zależy od skali kampanii i Twoich celów. Zazwyczaj jest to miesięczna opłata za obsługę kampanii plus budżet reklamowy, który trafia bezpośrednio do Facebooka. Podczas bezpłatnej konsultacji omówimy Twoje potrzeby i przedstawimy konkretną propozycję.",
  },
  {
    question: "Jak szybko zobaczę pierwsze efekty?",
    answer: "Pierwsze rezerwacje pojawiają się zazwyczaj już w ciągu pierwszych 7-14 dni od startu kampanii. Pełne efekty i optymalizacja widoczne są zwykle po około miesiącu działania kampanii, kiedy Facebook nauczy się, kto najlepiej reaguje na Twoje reklamy.",
  },
  {
    question: "Czy muszę mieć dużo obserwujących na Facebooku?",
    answer: "Nie! To jeden z największych mitów. Facebook Ads działają niezależnie od liczby obserwujących Twojej strony. Docieramy do nowych osób, które jeszcze nie znają Twojego salonu, ale szukają usług beauty w okolicy.",
  },
  {
    question: "Co jeśli reklamy nie przyniosą efektów?",
    answer: "Naszym celem jest Twój sukces. Jeśli kampanie nie przynoszą rezultatów, analizujemy sytuację i wprowadzamy zmiany. Zawsze stawiamy na transparentność - jeśli coś nie działa, mówimy o tym wprost i szukamy rozwiązania.",
  },
  {
    question: "Czy muszę sam tworzyć treści do reklam?",
    answer: "Nie musisz! Zajmujemy się wszystkim - od strategii, przez przygotowanie tekstów i grafik, po uruchomienie i optymalizację kampanii. Jeśli masz swoje materiały (np. zdjęcia z salonu), chętnie z nich skorzystamy, ale to nie jest wymagane.",
  },
  {
    question: "Jak długo trwa współpraca?",
    answer: "Nie wiążemy Cię długoterminowymi umowami. Zazwyczaj startujemy od 3-miesięcznej współpracy, ale wszystko zależy od Twoich potrzeb. Jeśli efekty Cię satysfakcjonują, kontynuujemy razem. Jeśli nie - możesz zakończyć współpracę.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Najczęściej zadawane
            <span className="text-primary block mt-2">pytania</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Jesteśmy tu, żeby rozwiać wszystkie Twoje wątpliwości
          </p>
        </div>

        <div className="max-w-3xl mx-auto animate-fade-in-up">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
