const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold text-steel uppercase tracking-widest mb-3">Sobre a empresa</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-graphite mb-6">
            PratesPaiva Construções e Reformas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-card p-8 rounded border border-border">
              <h3 className="font-display text-xl font-bold text-graphite mb-4">Nosso Propósito</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Transformar espaços com qualidade, segurança e comprometimento, oferecendo soluções
                completas em construções e reformas que superam expectativas.
              </p>
            </div>
            <div className="bg-card p-8 rounded border border-border">
              <h3 className="font-display text-xl font-bold text-graphite mb-4">Nossa Visão</h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                Ser reconhecida como referência em obras e reformas confiáveis na região até 2030,
                entregando resultados de alto padrão com excelência técnica e atendimento diferenciado.
              </p>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-8">
            {[
              { value: "11+", label: "Anos de experiência" },
              { value: "2014", label: "Fundada em" },
              { value: "100%", label: "Compromisso" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center">
                <p className="font-display text-3xl md:text-4xl font-bold text-primary">{s.value}</p>
                <p className="text-sm text-foreground mt-2 font-medium">{s.label}</p>
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
