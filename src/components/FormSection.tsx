import { useState } from "react";
import { WHATSAPP_DISPLAY, WORK_EMAIL, emailLink, openExternal, whatsappLink } from "@/lib/contact";

const FATURAMENTO: Record<string, string> = {
  ate20: "Até 20 mil",
  "21a50": "Entre 21 e 50 mil",
  "51a100": "Entre 51 e 100 mil",
  "101a300": "Entre 101 e 300 mil",
  "301a1m": "Entre 301 a 1 milhão",
  acima1m: "Acima de 1 milhão",
};

const FormSection = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    celular: "",
    empresa: "",
    faturamento: "",
  });
  const [sent, setSent] = useState<"email" | "both" | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = [
      "Olá! Quero receber uma proposta da DCT Namalu Ads.",
      `Nome: ${formData.nome || "-"}`,
      `E-mail: ${formData.email}`,
      `Celular: ${formData.celular}`,
      `Empresa: ${formData.empresa}`,
      `Faturamento mensal: ${FATURAMENTO[formData.faturamento] ?? formData.faturamento}`,
    ].join("\n");

    const whatsapp = whatsappLink(body);
    const email = emailLink("Proposta gratuita — DCT Namalu Ads", body);

    if (whatsapp) openExternal(whatsapp, true);
    if (email) openExternal(email);
    setSent(whatsapp ? "both" : "email");
  };

  const directWhatsapp = whatsappLink("Olá! Quero solicitar uma reunião com a DCT Namalu Ads.");
  const directEmail = emailLink(
    "Contato — DCT Namalu Ads",
    "Olá! Quero falar com a DCT Namalu Ads.",
  );

  return (
    <section id="como-funciona" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left side - Steps */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-1 bg-gold self-stretch rounded" />
              <div>
                <div className="text-4xl mb-3">📋</div>
                <h3 className="text-xl font-bold mb-1">
                  <strong>preencha</strong> o formulário
                </h3>
                <p className="text-muted-foreground text-sm">
                  com seus dados, fique tranquilo(a) que não usaremos para spam
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-1 bg-gold self-stretch rounded" />
              <div>
                <div className="text-4xl mb-3">📱</div>
                <h3 className="text-xl font-bold mb-1">
                  te chamaremos no <strong>Whatsapp</strong>
                </h3>
                <p className="text-muted-foreground text-sm">
                  para entender suas necessidades e principais objetivos
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-1 bg-gold self-stretch rounded" />
              <div>
                <div className="text-4xl mb-3">📄</div>
                <h3 className="text-xl font-bold mb-1">
                  <strong>proposta</strong> personalizada
                </h3>
                <p className="text-muted-foreground text-sm">
                  feita com a nossa metodologia de alavancagem de vendas online
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div id="contato">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
              dê o próximo passo<span className="text-gold">.</span>
            </h2>
            <p className="text-muted-foreground text-center mb-6">
              receba uma proposta customizada para seu negócio
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              {directWhatsapp && (
                <a
                  href={directWhatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer relative z-20 flex-1 bg-green-cta hover:bg-green-cta-hover text-accent-foreground font-bold py-3 px-4 rounded-lg text-center"
                >
                  Falar no WhatsApp
                </a>
              )}
              {directEmail && (
                <a
                  href={directEmail}
                  className="cursor-pointer relative z-20 flex-1 border border-foreground text-foreground font-bold py-3 px-4 rounded-lg text-center hover:bg-foreground/10 transition-colors"
                >
                  Enviar e-mail
                </a>
              )}
            </div>
            <p className="text-center text-sm text-muted-foreground mb-6">
              {directWhatsapp && (
                <>
                  WhatsApp:{" "}
                  <a href={directWhatsapp} target="_blank" rel="noopener noreferrer" className="text-gold underline cursor-pointer">
                    {WHATSAPP_DISPLAY}
                  </a>
                  {" · "}
                </>
              )}
              e-mail de trabalho:{" "}
              <a href={`mailto:${WORK_EMAIL}`} className="text-gold underline cursor-pointer">
                {WORK_EMAIL}
              </a>
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Nome"
                value={formData.nome}
                onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <input
                type="email"
                placeholder="* E-mail corporativo"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <input
                type="tel"
                placeholder="* Celular"
                required
                value={formData.celular}
                onChange={(e) => setFormData({ ...formData, celular: e.target.value })}
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <input
                type="text"
                placeholder="* Nome da sua empresa"
                required
                value={formData.empresa}
                onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <select
                required
                value={formData.faturamento}
                onChange={(e) => setFormData({ ...formData, faturamento: e.target.value })}
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <option value="">* Qual o faturamento mensal da sua empresa?</option>
                <option value="ate20">Até 20 mil</option>
                <option value="21a50">Entre 21 e 50 mil</option>
                <option value="51a100">Entre 51 e 100 mil</option>
                <option value="101a300">Entre 101 e 300 mil</option>
                <option value="301a1m">Entre 301 a 1 milhão</option>
                <option value="acima1m">Acima de 1 milhão</option>
              </select>

              <button
                type="submit"
                className="cursor-pointer w-full bg-green-cta hover:bg-green-cta-hover text-accent-foreground font-bold py-4 rounded-lg text-lg transition-colors"
              >
                Receber proposta gratuita
              </button>
              {sent && (
                <p className="text-sm text-center text-gold-light">
                  {sent === "both"
                    ? "Abrimos o WhatsApp e o e-mail com os dados da proposta. É só enviar."
                    : "Abrimos seu e-mail com os dados da proposta. É só enviar."}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormSection;
