import logo from "@/assets/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-graphite border-t border-graphite-light/20 py-10">
      <div className="container flex flex-col items-center gap-4 text-center">
        <img src={logo} alt="PratesPaiva" className="h-7 brightness-0 invert opacity-80" />
        <p className="text-xs text-primary-foreground/50 leading-relaxed max-w-md">
          PratesPaiva Construções e Reformas<br />
          CNPJ: 21.561.132/0001-62 · Desde 2014
        </p>
        <p className="text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} PratesPaiva Construções e Reformas. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
