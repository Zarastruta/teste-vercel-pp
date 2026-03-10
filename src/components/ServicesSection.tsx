import { Hammer, Zap, Droplets, DoorOpen, PaintBucket } from "lucide-react";

const services = [
  {
    icon: Hammer,
    title: "Alvenaria e Reformas",
    description: "Construção de paredes, reformas internas e externas, reboco, contrapiso e pequenas ampliações.",
  },
  {
    icon: Zap,
    title: "Instalações Elétricas",
    description: "Instalação de fiação, iluminação, cabeamento, sistemas de segurança e automação.",
  },
  {
    icon: Droplets,
    title: "Instalações Hidráulicas e Gás",
    description: "Tubulações, redes hidráulicas, sistemas sanitários e redes de gás.",
  },
  {
    icon: DoorOpen,
    title: "Portas, Janelas e Divisórias",
    description: "Esquadrias, divisórias internas e armários embutidos.",
  },
  {
    icon: PaintBucket,
    title: "Pintura de Edifícios",
    description: "Pintura interna, externa e fachadas com acabamento profissional.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="max-w-xl mb-14">
          <p className="text-sm font-semibold text-steel uppercase tracking-widest mb-3">Serviços</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-graphite">
            Soluções completas para sua obra
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-card border border-border rounded p-6 md:p-8 hover:border-steel/40 transition-colors group"
            >
              <s.icon className="w-8 h-8 text-steel mb-5 group-hover:text-steel-dark transition-colors" strokeWidth={1.5} />
              <h3 className="font-display text-lg font-semibold text-graphite mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
