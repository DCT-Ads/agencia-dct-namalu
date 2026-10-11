const ClientsSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          clientes que <strong className="text-gold">foram transformados.</strong>
        </h2>

        {/* Placeholder client logos */}
        <div className="flex flex-wrap justify-center gap-8 my-12 opacity-60">
          {["Sorridents", "100% Pastel", "Diasec", "GIOlaser", "S2 Bike", "Alemão BR"].map(
            (name, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-lg px-6 py-3 text-sm font-semibold text-muted-foreground"
              >
                {name}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
