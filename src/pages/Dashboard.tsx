/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  CreditCard, 
  FileText, 
  CalendarDays, 
  QrCode, 
  QrCode as PixIcon,
  Download,
  ChevronRight,
  Bell,
  User,
  LogOut,
  ShieldCheck,
  Clock,
  Menu,
  X,
  Scale,
  Stethoscope,
  Tent,
  Users,
  Plus
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("inicio");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const userData = {
    name: "SGT. MARCOS OLIVEIRA",
    id: "ASSEC-2024-8891",
    status: "Ativo",
    org: "Polícia Militar do Ceará",
    since: "15/03/2010",
    cpf: "XXX.XXX.XXX-XX",
    rg: "200X002XXXX-X"
  };

  const schedules = [
    { id: "1", type: "Clube - Churrasqueira 04", date: "15/05/2026", time: "09:00 - 18:00", info: "Reserva para 15 convidados", status: "Confirmado" },
    { id: "2", type: "Assessoria Jurídica", date: "18/05/2026", time: "14:30", info: "Dr. André - Sala 02 (Sede)", status: "Agendado" },
  ];

  const menuItems = [
    { id: "inicio", label: "Visão Geral", icon: <User className="w-5 h-5" /> },
    { id: "carteira", label: "Carteira Digital", icon: <CreditCard className="w-5 h-5" /> },
    { id: "agendamentos", label: "Agendamentos", icon: <CalendarDays className="w-5 h-5" /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "inicio":
        return (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
               <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                  <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-2">Mensalidade</p>
                  <p className="text-2xl font-black text-blue-900 leading-none">Pagamento em Folha</p>
                  <span className="text-[10px] font-bold text-green-500 uppercase mt-2 inline-block italic">Atualizado Automaticamente</span>
               </div>
               <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm">
                  <p className="text-slate-500 text-xs font-black uppercase tracking-widest mb-2">Próximo Lazer</p>
                  <p className="text-2xl font-black text-blue-900 leading-none">15 Mai</p>
                  <span className="text-[10px] font-bold text-blue-500 uppercase mt-2 inline-block">Churrasq. 04</span>
               </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
               <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
                  <h3 className="text-lg font-bold text-blue-950 mb-6 flex justify-between items-center">
                    Avisos Importantes
                    <Bell className="w-4 h-4 text-slate-400" />
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                      <p className="font-bold text-blue-900 text-sm mb-1">Assembleia Geral Extraordinária</p>
                      <p className="text-xs text-blue-700">Pauta: Discussão sobre o novo plano de cargos e carreiras. Participe!</p>
                    </div>
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="font-bold text-slate-800 text-sm mb-1">Novos Convênios Odontológicos</p>
                      <p className="text-xs text-slate-500">Agora associados ASSEC têm 40% de desconto na rede Sorriso +, em todo o CE.</p>
                    </div>
                  </div>
               </div>
               <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
                  <h3 className="text-lg font-bold text-blue-950 mb-6">Atalhos Rápidos</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <button onClick={() => setActiveTab("agendamentos")} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl hover:bg-blue-50 transition-all text-left group">
                       <Scale className="w-5 h-5 text-blue-600 transition-transform group-hover:scale-110" />
                       <span className="text-sm font-bold text-slate-700">Jurídico</span>
                    </button>
                    <button className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl hover:bg-blue-50 transition-all text-left group">
                       <Stethoscope className="w-5 h-5 text-blue-600 transition-transform group-hover:scale-110" />
                       <span className="text-sm font-bold text-slate-700">Clínicas</span>
                    </button>
                    <Link to="/pousadas" className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl hover:bg-blue-50 transition-all text-left group">
                       <Tent className="w-5 h-5 text-blue-600 transition-transform group-hover:scale-110" />
                       <span className="text-sm font-bold text-slate-700">Pousadas</span>
                    </Link>
                    <button className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl hover:bg-blue-50 transition-all text-left group">
                       <Users className="w-5 h-5 text-blue-600 transition-transform group-hover:scale-110" />
                       <span className="text-sm font-bold text-slate-700">Dependentes</span>
                    </button>
                  </div>
               </div>
            </div>
          </motion.div>
        );
      case "carteira":
        return (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center">
            <div className="w-full max-w-md space-y-6">
               <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden aspect-[1.6/1]">
                  <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat"></div>
                  <div className="relative z-10 flex flex-col h-full justify-between">
                     <div className="flex justify-between items-start">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="text-yellow-400 w-8 h-8" />
                          <span className="text-2xl font-black tracking-tighter italic uppercase">ASSEC</span>
                        </div>
                        <span className="bg-green-500/20 text-green-400 border border-green-500/30 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">{userData.status}</span>
                     </div>
                     <div>
                        <p className="text-[10px] text-blue-300 uppercase tracking-[0.2em] font-bold mb-1">Identificação Funcional Associativa</p>
                        <h3 className="text-2xl font-bold mb-1 tracking-tight">{userData.name}</h3>
                        <p className="text-sm text-blue-200 opacity-80 mb-4">{userData.org}</p>
                        <div className="flex justify-between items-end border-t border-white/10 pt-4">
                           <div>
                              <p className="text-[10px] text-blue-300 font-bold uppercase tracking-widest">Matrícula</p>
                              <p className="font-mono text-xl">{userData.id}</p>
                           </div>
                           <div className="w-16 h-16 bg-white rounded-xl p-1 shadow-inner shadow-blue-900/40">
                              <QrCode className="text-blue-950 w-full h-full" />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm divide-y divide-slate-100">
                  <div className="pb-4 mb-4 flex justify-between">
                     <span className="text-slate-400 text-xs font-bold uppercase">CPF</span>
                     <span className="text-slate-700 font-bold">{userData.cpf}</span>
                  </div>
                  <div className="py-4 mb-4 flex justify-between">
                     <span className="text-slate-400 text-xs font-bold uppercase">RG</span>
                     <span className="text-slate-700 font-bold">{userData.rg}</span>
                  </div>
                  <div className="pt-4 flex justify-between">
                     <span className="text-slate-400 text-xs font-bold uppercase">Associado Desde</span>
                     <span className="text-slate-700 font-bold">{userData.since}</span>
                  </div>
               </div>

               <div className="flex gap-4">
                  <button className="flex-1 bg-blue-600 text-white py-4 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-blue-700 transition-all active:scale-95">
                    <Download className="w-5 h-5" /> Salvar PDF
                  </button>
                  <button className="flex-1 bg-white border border-slate-200 text-slate-800 py-4 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-slate-50 transition-all active:scale-95">
                    <QrCode className="w-5 h-5" /> Validar
                  </button>
               </div>
            </div>
          </motion.div>
        );
      case "agendamentos":
        return (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
            <div className="flex justify-between items-center bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm">
              <div>
                <h2 className="text-xl font-black text-blue-950">Meus Agendamentos</h2>
                <p className="text-slate-400 text-sm font-medium">Gerencie suas reservas e horários da semana.</p>
              </div>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-blue-700 transition-all flex items-center gap-2 active:scale-95">
                <Plus className="w-5 h-5" /> Reservar
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
               {schedules.map(schedule => (
                 <div key={schedule.id} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4">
                       <span className={`text-[10px] font-black uppercase px-3 py-1 rounded-full border ${schedule.status === 'Confirmado' ? 'bg-green-50 text-green-600 border-green-100' : 'bg-blue-50 text-blue-600 border-blue-100'}`}>
                          {schedule.status}
                       </span>
                    </div>
                    <div className="space-y-6">
                       <div className="flex gap-4 items-center">
                          <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center">
                             <CalendarDays className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                             <h4 className="font-bold text-lg text-blue-950 leading-none">{schedule.type}</h4>
                             <p className="text-sm font-medium text-slate-400 mt-1">{schedule.date} às {schedule.time}</p>
                          </div>
                       </div>
                       <p className="text-slate-500 text-sm leading-relaxed border-l-2 border-slate-200 pl-4 italic">
                          "{schedule.info}"
                       </p>
                       <div className="flex gap-3 pt-4">
                          <button className="flex-1 py-3 bg-slate-50 text-slate-700 rounded-xl font-bold text-sm hover:bg-slate-100 transition-all active:scale-95 border border-slate-100">Detalhes</button>
                          <button className="flex-1 py-3 bg-red-50 text-red-600 rounded-xl font-bold text-sm hover:bg-red-100 transition-all active:scale-95 border border-red-100">Cancelar</button>
                       </div>
                    </div>
                 </div>
               ))}
            </div>

            <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white overflow-hidden relative">
               <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat"></div>
               <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-12">
                  <div className="text-center lg:text-left">
                     <h3 className="text-2xl font-black mb-2 tracking-tight">Precisa de Lazer?</h3>
                     <p className="text-slate-400 max-w-sm">Consulte a disponibilidade de nossas pousadas e colônias de férias para o próximo final de semana.</p>
                  </div>
                  <Link to="/pousadas" className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-black hover:bg-slate-100 transition-all active:scale-95 shadow-xl inline-block">
                    Ver Pousadas
                  </Link>
               </div>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row">
      {/* Mobile Header */}
      <div className="lg:hidden bg-blue-950 text-white p-5 flex justify-between items-center sticky top-0 z-50 shadow-lg">
        <div className="flex items-center gap-2">
           <ShieldCheck className="text-yellow-400 w-6 h-6" />
           <span className="font-black tracking-tighter text-xl italic uppercase">ASSEC</span>
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 bg-white/10 rounded-xl">
           {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar - Desktop & Mobile overlay */}
      <aside className={`
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} 
        fixed lg:sticky top-0 left-0 w-72 bg-blue-950 text-white p-8 h-screen z-40 transition-transform duration-300 ease-in-out flex flex-col
      `}>
        <div className="hidden lg:flex items-center gap-3 mb-16">
          <div className="w-12 h-12 bg-blue-800 rounded-2xl flex items-center justify-center shadow-2xl border border-blue-700">
            <ShieldCheck className="text-yellow-400 w-7 h-7" />
          </div>
          <span className="text-3xl font-black tracking-tighter italic uppercase">ASSEC</span>
        </div>

        <nav className="space-y-3 flex-grow">
          {menuItems.map(item => (
            <button 
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-4 p-4 rounded-2xl font-bold transition-all ${activeTab === item.id ? 'bg-blue-600 text-white shadow-2xl translate-x-2 ring-1 ring-white/20' : 'text-blue-300 hover:text-white hover:bg-white/5'}`}
            >
              {item.icon} {item.label}
            </button>
          ))}
        </nav>

        <div className="pt-8 border-t border-white/10 mt-auto">
          <Link to="/" className="flex items-center gap-4 p-4 text-red-300 hover:text-red-100 font-bold transition-colors group">
            <LogOut className="w-5 h-5 transition-transform group-hover:-translate-x-1" /> Sair do Portal
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 blur-[150px] opacity-10 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        {/* Desktop Custom Header */}
        <header className="hidden lg:flex bg-white/80 backdrop-blur-md border-b border-slate-200 px-12 py-6 justify-between items-center sticky top-0 z-30">
           <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-50 rounded-[1.25rem] flex items-center justify-center shadow-inner">
                 <User className="text-blue-600 w-7 h-7" />
              </div>
              <div>
                 <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Status de Conexão</p>
                 <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-lg font-black text-blue-950 uppercase tracking-tight">Portal Ativo</span>
                 </div>
              </div>
           </div>
           
           <div className="flex items-center gap-6">
              <div className="flex items-center gap-3 px-4 py-2 bg-slate-50 border border-slate-100 rounded-2xl">
                 <div className="w-8 h-8 rounded-full bg-blue-900 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white uppercase italic">AS</div>
                 <p className="text-sm font-bold text-blue-950">{userData.name.split(' ')[userData.name.split(' ').length - 1]}</p>
              </div>
              <button className="p-3 bg-white border border-slate-200 rounded-xl relative hover:bg-slate-50 transition-all text-slate-600">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
              </button>
           </div>
        </header>

        {/* Scrollable Body */}
        <main className="flex-1 p-6 md:p-12 overflow-y-auto w-full max-w-6xl mx-auto scroll-smooth relative z-10">
           {/* Section Header */}
           <div className="mb-12">
              <p className="text-blue-600 font-black text-xs uppercase tracking-[0.4em] mb-2">{activeTab}</p>
              <h2 className="text-4xl md:text-5xl font-black text-blue-950 tracking-tight leading-none">
                {menuItems.find(i => i.id === activeTab)?.label}
              </h2>
           </div>

           {renderContent()}
        </main>
      </div>
    </div>
  );
}
