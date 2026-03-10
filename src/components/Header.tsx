import { Menu, X } from "lucide-react";
import { useState } from "react";

const WHATSAPP_URL = "https://wa.me/554898416893?text=Olá,%20quero%20solicitar%20um%20orçamento.";

const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Obras", href: "#obras" },
  { label: "Sobre", href: "#sobre" },
  { label: "Processo", href: "#processo" },
  { label: "Contato", href: "#contato" }];


const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="font-display text-lg md:text-xl font-bold tracking-tight text-[#bfbfbf]">
          <span className="text-steel">PRATES</span>PAIVA
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) =>
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-graphite-light hover:text-steel transition-colors">

              {l.label}
            </a>
          )}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-steel text-primary-foreground px-5 py-2.5 text-sm font-semibold rounded hover:bg-steel-dark transition-colors">

            Solicitar orçamento
          </a>
        </nav>

        <button
          className="md:hidden text-graphite"
          onClick={() => setOpen(!open)}
          aria-label="Menu">

          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open &&
        <div className="md:hidden bg-card border-t border-border">
          <nav className="container py-4 flex flex-col gap-4">
            {navLinks.map((l) =>
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-graphite-light hover:text-steel transition-colors">

                {l.label}
              </a>
            )}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-steel text-primary-foreground px-5 py-2.5 text-sm font-semibold rounded text-center hover:bg-steel-dark transition-colors">

              Solicitar orçamento
            </a>
          </nav>
        </div>
      }
    </header>);

};

export default Header;