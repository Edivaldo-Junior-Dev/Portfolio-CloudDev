
# 🚀 Portfólio CloudDev - AWS S3 Edition

**Arquiteto:** Edivaldo Junior
**Versão:** 2.0 (Frontend-Only / Static)

Este projeto foi refatorado para funcionar sem backend Node.js, utilizando o armazenamento local do navegador para persistência de dados. Isso permite hospedagem direta no AWS S3 ou Vercel.

---

## 🛠️ Passo a Passo para Iniciar (Novo Projeto)

Se você está criando um novo repositório do zero, siga estes comandos no seu terminal:

### 1. Criar o Projeto Vite
```bash
npm create vite@latest portfolio-cloud -- --template react-ts
cd portfolio-cloud
```

### 2. Instalar Dependências
```bash
npm install lucide-react @google/genai @supabase/supabase-js tailwindcss postcss autoprefixer
```

### 3. Configurar Tailwind
```bash
npx tailwindcss init -p
```
*Copie o conteúdo de `tailwind.config.js` e `index.css` dos arquivos do projeto original.*

### 4. Copiar o Código Fonte
Copie toda a pasta `src/` e `index.html` fornecidas aqui para dentro da sua nova pasta.

### 5. Executar Localmente
```bash
npm run dev
```
O projeto rodará em `http://localhost:5173`.

---

## ☁️ Como Deployar na AWS (S3)

1. **Gerar o Build de Produção:**
   ```bash
   npm run build
   ```
   Isso criará uma pasta `dist/` com arquivos HTML/CSS/JS otimizados.

2. **Upload para S3:**
   - Crie um Bucket no S3 (ex: `meu-portfolio-cloud-edivaldo`).
   - Habilite "Static Website Hosting".
   - Faça upload do conteúdo da pasta `dist/` para a raiz do bucket.
   - Defina as permissões como públicas (via Bucket Policy).

3. **Acessar:**
   Seu site estará disponível na URL fornecida pelo S3.

---

## 🔑 Credenciais Padrão (Simulação)
Como não há backend real, use estas credenciais para testar:
- **Admin:** `admin@cloud.com` / `admin123`
- **Cadastro:** Você pode clicar em "Cadastrar Novo Aluno" na tela de login; ele salvará no navegador.

*Gerado pelo Protocolo Gênese v3.4*
