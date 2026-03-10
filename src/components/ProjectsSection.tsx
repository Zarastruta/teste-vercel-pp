import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  { src: project1, alt: "Instalação elétrica em obra", label: "Instalações Elétricas" },
  { src: project2, alt: "Construção de escadaria em granito", label: "Revestimento em Granito" },
  { src: project3, alt: "Reforma de piscina em condomínio", label: "Reforma de Piscina" },
];

const ProjectsSection = () => {
  return (
    <section id="obras" className="py-20 md:py-28 bg-concrete">
      <div className="container">
        <div className="max-w-xl mb-14">
          <p className="text-sm font-semibold text-steel uppercase tracking-widest mb-3">Obras</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-graphite">
            Projetos realizados
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.label} className="group overflow-hidden rounded">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.src}
                  alt={p.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-graphite/0 group-hover:bg-graphite/40 transition-colors duration-300 flex items-end">
                  <span className="text-primary-foreground font-display font-semibold text-sm px-5 py-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {p.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
