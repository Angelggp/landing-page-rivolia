export function Footer() {
  return (
    <footer className="bg-rivolia-secondary-dark py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <span className="font-cinzel font-bold text-2xl text-rivolia-primary tracking-widest">
          RIVOLIA
        </span>
        <p className="font-montserrat font-light text-sm text-rivolia-beige opacity-70">
          © 2026 Rivolia. Café filtrado premium de Panamá.
        </p>
        <span className="font-cinzel text-sm text-rivolia-accent tracking-widest uppercase">
          Para distribuidores
        </span>
      </div>
    </footer>
  );
}
