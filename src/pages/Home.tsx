/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Scale, 
  Stethoscope, 
  Tent, 
  Users, 
  ChevronRight,
  Plus,
  Heart,
  Briefcase
 } from "lucide-react";
import { Link } from "react-router-dom";

const BENEFITS = [
  {
    icon: <Scale className="w-8 h-8 text-yellow-500" />,
    title: "Assistência Jurídica 24h",
    description: "Defesa especializada para questões funcionais e disciplinares, protegendo quem protege o Ceará."
  },
  {
    icon: <Stethoscope className="w-8 h-8 text-blue-500" />,
    title: "Saúde e Bem-estar",
    description: "Convênios com os melhores planos de saúde, odontológicos e clínicas especializadas para você e sua família."
  },
  {
    icon: <Tent className="w-8 h-8 text-green-500" />,
    title: "Lazer e Descanso",
    description: "Acesso a clubes próprios, pousadas e parcerias em todo o estado para o seu merecido descanso."
  },
  {
    icon: <Users className="w-8 h-8 text-indigo-500" />,
    title: "Representação Ativa",
    description: "Voz forte junto aos órgãos governamentais por melhores salários, condições de trabalho e dignidade."
  },
  {
    icon: <Heart className="w-8 h-8 text-red-500" />,
    title: "Auxílio Natalidade",
    description: "Apoio financeiro e social no momento mais importante da sua família: a chegada de um novo membro."
  },
  {
    icon: <Briefcase className="w-8 h-8 text-gray-500" />,
    title: "Seguro de Vida",
    description: "Apólices exclusivas com coberturas abrangentes, garantindo o futuro de quem você mais ama."
  }
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                <Plus className="w-3 h-3" /> Juntos somos mais fortes
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] text-blue-950 mb-6 tracking-tight">
                Protegendo quem <br />
                <span className="text-blue-600 italic font-serif">protege o Ceará.</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
                A ASSEC é a casa do servidor da segurança pública. Oferecemos suporte jurídico, benefícios exclusivos e a representação que você merece.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/area-associado?mode=register" className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 flex items-center justify-center gap-2 text-center">
                  Quero me Associar <ChevronRight className="w-5 h-5" />
                </Link>
                <Link to="/beneficios" className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all text-center">
                  Conhecer Vantagens
                </Link>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay"></div>
                <img 
                  src="https://picsum.photos/seed/assec-security/800/600" 
                  alt="Segurança Pública Ceará" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Stat */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                <p className="text-3xl font-black text-blue-900">+15.000</p>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Associados Ativos</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Grid Preview */}
      <section id="beneficios" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-[0.2em] mb-4">Vantagens Exclusivas</h2>
            <p className="text-4xl md:text-5xl font-bold text-blue-950 tracking-tight">O que você ganha ao ser ASSEC</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BENEFITS.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl transition-all group"
              >
                <div className="mb-6 p-4 bg-white rounded-2xl w-fit shadow-sm group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/beneficios" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline">
              Ver todos os benefícios detalhados <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Service - Legal */}
      <section id="servicos" className="py-24 bg-blue-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
             >
                <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                  Proteção Jurídica Especializada em <span className="text-yellow-400 font-serif italic">Tempo Integral</span>
                </h2>
                <div className="space-y-6 mb-10">
                  <div className="flex gap-4">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex-shrink-0 flex items-center justify-center">
                      <Plus className="w-4 h-4 text-blue-950" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">Acompanhamento em flagrantes</h4>
                      <p className="text-blue-200">Suporte presencial em situações de urgência operacional.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex-shrink-0 flex items-center justify-center">
                      <Plus className="w-4 h-4 text-blue-950" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">Defesa em PADs</h4>
                      <p className="text-blue-200">Assessoria completa em Processos Administrativos Disciplinares.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex-shrink-0 flex items-center justify-center">
                      <Plus className="w-4 h-4 text-blue-950" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">Ações Ordinárias</h4>
                      <p className="text-blue-200">Busca por direitos financeiros, correções e gratificações.</p>
                    </div>
                  </div>
                </div>
                <Link to="/servicos" className="inline-block bg-yellow-400 text-blue-950 px-8 py-4 rounded-2xl font-black text-lg hover:bg-yellow-300 transition-all">
                  Conhecer Nossos Serviços
                </Link>
             </motion.div>

             <motion.div 
               className="relative"
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
                <div className="aspect-square bg-blue-900 rounded-[4rem] flex items-center justify-center transform rotate-3 relative overflow-hidden">
                   <Scale className="w-48 h-48 text-blue-800 absolute -bottom-12 -right-12" />
                   <div className="relative z-10 text-center p-12">
                      <p className="text-6xl font-black mb-2 tracking-tighter">100%</p>
                      <p className="text-xl font-medium text-blue-200">Compromisso com o Associado</p>
                   </div>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-[3rem] p-12 md:p-20 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat"></div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 relative z-10">
              Pronto para fazer parte da maior associação de segurança do estado?
            </h2>
            <p className="text-blue-100 text-xl mb-10 max-w-2xl mx-auto relative z-10">
              Junte-se a milhares de companheiros e fortaleça nossa categoria. Sua família e sua carreira protegidas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Link to="/area-associado?mode=register" className="bg-white text-blue-950 px-10 py-5 rounded-2xl font-black text-xl hover:shadow-2xl transition-all active:scale-95 text-center">
                Associar-se Agora
              </Link>
              <Link to="/contato" className="bg-blue-900/50 backdrop-blur-sm text-white border border-white/20 px-10 py-5 rounded-2xl font-black text-xl hover:bg-blue-900/70 transition-all text-center">
                Falar com Vendas
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
