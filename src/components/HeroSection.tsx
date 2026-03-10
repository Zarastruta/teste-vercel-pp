import heroImg from "@/assets/hero-construction.jpg";

const WHATSAPP_URL = "https://wa.me/5500000000000?text=Olá! Gostaria de solicitar um orçamento.";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Canteiro de obras com estrutura de concreto"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-graphite/75" />
      </div>

      <div className="relative container">
        <div className="max-w-2xl">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-foreground leading-[1.1]">
            <span className="text-steel">PRATES</span>PAIVA
            <br />
            <span className="text-primary-foreground/80 text-2xl md:text-3xl lg:text-4xl font-medium">
              Construções e Reformas
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-primary-foreground/70 max-w-lg leading-relaxed">
            Transformamos espaços com qualidade, segurança e responsabilidade.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-10 bg-steel text-primary-foreground px-8 py-4 text-base font-semibold rounded hover:bg-steel-dark transition-colors"
          >
            Solicitar orçamento
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
