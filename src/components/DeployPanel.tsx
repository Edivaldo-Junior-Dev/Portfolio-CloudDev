
import React, { useState, useRef } from 'react';
import { Cloud, Upload, CheckCircle2, AlertCircle, Loader2, Server, ArrowRight, FileArchive, Zap } from 'lucide-react';
import { User } from '../types';

// --- CONFIGURAÇÃO DE INTEGRAÇÃO AWS ---
// QUANDO O GABRIEL TE MANDAR O LINK DA API, COLE AQUI:
const GABRIEL_API_URL = "https://placeholder-api-gateway.amazonaws.com/prod/deploy"; 

interface DeployPanelProps {
  currentUser: User;
  onBack: () => void;
}

const DeployPanel: React.FC<DeployPanelProps> = ({ currentUser, onBack }) => {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<'idle' | 'uploading' | 'processing' | 'success' | 'error'>('idle');
  const [deployedUrl, setDeployedUrl] = useState<string | null>(null);
  const [logs, setLogs] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const addLog = (msg: string) => setLogs(prev => [...prev, `> ${msg}`]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selected = e.target.files[0];
      if (!selected.name.endsWith('.zip')) {
        alert("Por favor, envie apenas arquivos .zip");
        return;
      }
      setFile(selected);
      setLogs([]);
      setStatus('idle');
    }
  };

  const handleDeploy = async () => {
    if (!file) return;

    setStatus('uploading');
    setLogs([]);
    addLog("Iniciando conexão com AWS API Gateway...");
    addLog(`Preparando pacote: ${file.name} (${(file.size / 1024).toFixed(2)} KB)`);

    try {
      // 1. SIMULAÇÃO DO UPLOAD (Aqui entraria o fetch real para o GABRIEL_API_URL)
      // Como não temos a API real ainda, vou simular o processo para apresentação.
      
      await new Promise(r => setTimeout(r, 1500));
      addLog("Upload concluído com sucesso (S3 Bucket: waiting-room).");
      
      setStatus('processing');
      addLog("Acionando AWS Lambda Orquestradora...");
      await new Promise(r => setTimeout(r, 1500));
      addLog("Lambda: Descompactando arquivos...");
      addLog("Lambda: Configurando bucket de destino...");
      
      await new Promise(r => setTimeout(r, 1500));
      addLog("CloudFront: Invalidando cache...");
      addLog("DynamoDB: Registrando metadados do projeto...");

      // URL Fictícia gerada
      const mockUrl = `http://meu-portfolio-cloud-${currentUser.name.split(' ')[0].toLowerCase()}.s3-website-us-east-1.amazonaws.com`;
      
      setDeployedUrl(mockUrl);
      setStatus('success');
      addLog("DEPLOY CONCLUÍDO COM SUCESSO!");

      /* 
      --- CÓDIGO REAL (FUTURO) ---
      const formData = new FormData();
      formData.append('file', file);
      formData.append('userId', currentUser.id);
      
      const response = await fetch(GABRIEL_API_URL, {
        method: 'POST',
        body: formData
      });
      
      if (!response.ok) throw new Error("Erro na API AWS");
      const data = await response.json();
      setDeployedUrl(data.url);
      */

    } catch (error) {
      console.error(error);
      setStatus('error');
      addLog("ERRO CRÍTICO: Falha na comunicação com a nuvem.");
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-4 md:p-8 animate-fade-in font-sans flex flex-col items-center">
      
      {/* Header */}
      <div className="w-full max-w-4xl flex justify-between items-center mb-12">
        <button onClick={onBack} className="text-slate-400 hover:text-white flex items-center gap-2 transition-colors">
          <ArrowRight className="rotate-180" size={20} /> Voltar
        </button>
        <div className="flex items-center gap-2">
           <Cloud className="text-orange-500" />
           <span className="font-bold tracking-widest text-sm">AWS DEPLOYER SYSTEM</span>
        </div>
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left Column: Upload Area */}
        <div className="space-y-6">
           <div>
              <h1 className="text-4xl md:text-5xl font-black mb-2">Publique seu <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Código na Nuvem</span></h1>
              <p className="text-slate-400 text-sm leading-relaxed">
                Transforme seu arquivo <code>.zip</code> local em um site acessível globalmente em segundos usando nossa infraestrutura Serverless.
              </p>
           </div>

           <div 
             className={`
               border-2 border-dashed rounded-2xl p-10 flex flex-col items-center justify-center transition-all duration-300
               ${status === 'success' ? 'border-emerald-500/50 bg-emerald-500/10' : 'border-slate-700 hover:border-orange-500/50 hover:bg-slate-800/50'}
             `}
           >
              {status === 'success' ? (
                <div className="text-center space-y-4">
                   <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(16,185,129,0.4)] animate-bounce">
                      <CheckCircle2 size={40} className="text-white" />
                   </div>
                   <h3 className="text-xl font-bold text-emerald-400">Site no Ar!</h3>
                   <a 
                     href={deployedUrl || '#'} 
                     target="_blank" 
                     rel="noreferrer"
                     className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-bold transition-all transform hover:scale-105"
                   >
                     Acessar Site <ArrowRight size={16} />
                   </a>
                   <button 
                     onClick={() => { setStatus('idle'); setFile(null); setDeployedUrl(null); }}
                     className="block w-full text-xs text-slate-500 hover:text-white mt-4 underline"
                   >
                     Enviar outro projeto
                   </button>
                </div>
              ) : (
                <>
                  <input 
                    type="file" 
                    ref={fileInputRef}
                    onChange={handleFileChange} 
                    accept=".zip"
                    className="hidden" 
                  />
                  
                  {file ? (
                    <div className="text-center space-y-4 w-full">
                       <div className="w-16 h-16 bg-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <FileArchive size={32} />
                       </div>
                       <div className="text-sm font-bold text-white truncate max-w-[200px] mx-auto">{file.name}</div>
                       <p className="text-xs text-slate-500">{(file.size / 1024).toFixed(1)} KB</p>
                       
                       <button 
                         onClick={handleDeploy}
                         disabled={status !== 'idle'}
                         className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 rounded-xl shadow-[0_0_20px_rgba(234,88,12,0.3)] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                       >
                         {status === 'idle' ? <><Zap size={18} /> INITIALIZE DEPLOY</> : <Loader2 className="animate-spin" />}
                       </button>
                       <button onClick={() => setFile(null)} className="text-xs text-red-400 hover:underline">Remover</button>
                    </div>
                  ) : (
                    <div className="text-center cursor-pointer" onClick={() => fileInputRef.current?.click()}>
                       <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                          <Upload size={32} className="text-slate-400 group-hover:text-orange-500 transition-colors" />
                       </div>
                       <h3 className="font-bold text-white mb-1">Upload do Projeto (.zip)</h3>
                       <p className="text-xs text-slate-500">Arraste ou clique para selecionar</p>
                    </div>
                  )}
                </>
              )}
           </div>
        </div>

        {/* Right Column: Terminal Logs */}
        <div className="bg-black/40 border border-slate-800 rounded-2xl p-6 font-mono text-xs flex flex-col h-[500px] shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-8 bg-slate-900 border-b border-slate-800 flex items-center px-4 gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              <span className="ml-2 text-slate-500">aws-cli-terminal — deploy-log</span>
           </div>
           
           <div className="mt-6 flex-1 overflow-y-auto space-y-2 text-slate-300 p-2 scrollbar-thin scrollbar-thumb-slate-700">
              <div className="text-slate-500 opacity-50">Waiting for input...</div>
              {logs.map((log, i) => (
                <div key={i} className="animate-fade-in-left">
                   <span className="text-green-500 mr-2">$</span>
                   {log}
                </div>
              ))}
              {status === 'processing' && (
                 <div className="animate-pulse text-orange-400">Processing...</div>
              )}
           </div>

           {/* Decorativo: Stack AWS */}
           <div className="border-t border-slate-800 pt-4 mt-2 flex justify-between items-center opacity-50 grayscale hover:grayscale-0 transition-all">
              <div className="flex gap-4">
                  <div className="flex flex-col items-center gap-1"><Server size={14}/><span className="text-[9px]">Lambda</span></div>
                  <div className="flex flex-col items-center gap-1"><Cloud size={14}/><span className="text-[9px]">S3</span></div>
              </div>
              <div className="text-[9px] text-slate-600">v2.4.1 Connected</div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default DeployPanel;
