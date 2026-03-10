import { ClipboardCheck, FileText, CalendarDays, HardHat } from "lucide-react";

const steps = [
  { icon: ClipboardCheck, number: "01", title: "Visita técnica", description: "Avaliação presencial do local e entendimento das necessidades do projeto." },
  { icon: FileText, number: "02", title: "Orçamento detalhado", description: "Proposta transparente com todos os custos, materiais e prazos." },
  { icon: CalendarDays, number: "03", title: "Planejamento da obra", description: "Cronograma organizado para execução eficiente e sem surpresas." },
  { icon: HardHat, number: "04", title: "Execução com acompanhamento", description: "Obra realizada com supervisão constante e comunicação direta." },
];

const ProcessSection = () => {
  return (
    <section id="processo" className="py-20 md:py-28 bg-concrete">
      <div className="container">
        <div className="max-w-xl mb-14">
          <p className="text-sm font-semibold text-steel uppercase tracking-widest mb-3">Processo</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-graphite">
            Como trabalhamos
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.number} className="relative">
              <span className="font-display text-6xl font-bold text-steel/10">{s.number}</span>
              <div className="mt-[-1rem]">
                <s.icon className="w-6 h-6 text-steel mb-3" strokeWidth={1.5} />
                <h3 className="font-display text-base font-semibold text-graphite mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
