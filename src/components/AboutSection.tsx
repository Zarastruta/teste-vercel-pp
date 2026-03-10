const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold text-steel uppercase tracking-widest mb-3">Sobre a empresa</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-graphite mb-6">
            PratesPaiva Construções e Reformas
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
            A PratesPaiva Construções e Reformas atua no setor de construção e reformas desde 2014, 
            acumulando mais de 11 anos de experiência na execução de obras e serviços técnicos em 
            edificações residenciais e prediais.
          </p>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-4">
            Desde a sua fundação, a empresa trabalha com foco em qualidade técnica, organização e 
            responsabilidade, oferecendo soluções completas em reformas, instalações e manutenção.
          </p>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Hoje a PratesPaiva soma mais de 11 anos de atuação no mercado, atendendo clientes com 
            profissionalismo e compromisso com cada projeto.
          </p>

          <div className="mt-14 grid grid-cols-3 gap-8">
            {[
              { value: "11+", label: "Anos de experiência" },
              { value: "2014", label: "Fundada em" },
              { value: "100%", label: "Compromisso" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl md:text-4xl font-bold text-steel">{s.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-xs text-muted-foreground/60">
            CNPJ: 21.561.132/0001-62 · Fundada em 12 de dezembro de 2014
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
