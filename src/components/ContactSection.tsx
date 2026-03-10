import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/554898416893?text=Olá,%20quero%20solicitar%20um%20orçamento.";

const ContactSection = () => {
  return (
    <section id="contato" className="py-20 md:py-28 bg-graphite">
      <div className="container text-center">
        <p className="text-sm font-semibold text-steel uppercase tracking-widest mb-3">Contato</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Pronto para começar sua obra?
        </h2>
        <p className="text-primary-foreground/60 text-base md:text-lg max-w-lg mx-auto mb-10">
          Entre em contato pelo WhatsApp e solicite seu orçamento sem compromisso.
        </p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[hsl(142,70%,40%)] text-primary-foreground px-10 py-5 text-lg font-semibold rounded hover:bg-[hsl(142,70%,35%)] transition-colors"
        >
          <MessageCircle className="w-6 h-6" />
          Solicitar orçamento via WhatsApp
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
