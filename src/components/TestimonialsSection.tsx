const testimonials = [
  {
    client: "Alemão para Brasileiros",
    type: "Tráfego Pago e Lançamento",
    quote:
      "O crescimento está perfeito! Estou MUITO feliz e muita satisfeita. Os seguidores são extremamente qualificados e eu tô ganhando em média mais de 100 por dia 🥳🥳",
  },
  {
    client: "GIOlaser (franquia)",
    type: "Conteúdo e Tráfego Pago",
    quote:
      "Do dia 20 até 29 tivemos 375 leads!! Nunca tínhamos visto isso na história dessa unidade! Parabéns DCT pelos resultados.",
  },
  {
    client: "S2 Bike Shop (franquia)",
    type: "Conteúdo e Tráfego Pago",
    quote:
      "Aqui Whatsapp bombando o dia todo, hoje o dia foi excelente de vendas e não acabou ainda.",
  },
  {
    client: "Fernanda Martoli",
    type: "Conteúdo e Tráfego Pago",
    quote:
      "Estou gostando bastante e tive um retorno bacana logo nas primeiras semanas.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
          o que nós te <strong className="text-gold">entregamos mensalmente</strong>
        </h2>
        <p className="text-center text-muted-foreground mb-4">
          <strong className="text-foreground">Falamos do que vivemos</strong>, nossos clientes são a prova
          disso<span className="text-gold">.</span>
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-6">
              <h4 className="font-bold text-lg mb-1">{t.client}</h4>
              <p className="text-gold text-sm mb-4">Cliente de {t.type}</p>
              <p className="text-muted-foreground text-sm italic">"{t.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
