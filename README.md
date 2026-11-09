# ClinicSite Studio · Élara

Primeiro template de website premium do ClinicSite Studio, implementado em **Next.js 16 App Router, React 19, TypeScript strict, Tailwind CSS 4, componentes shadcn/ui sobre Radix e Motion for React**. Formulários com React Hook Form e Zod.

Élara é uma **marca fictícia**. Não representa uma clínica existente, pacientes, profissionais ou instalações reais. O projeto é uma proposta privada, executada localmente. Não inclui dashboard, autenticação, pagamentos, Supabase ou APIs pagas.

## Executar

Requer Node.js 22 e npm.

```sh
npm ci
npm run dev
```

Abra http://localhost:3000. No PowerShell com execução de scripts restrita, use `npm.cmd` em vez de `npm` — não é necessário alterar a política do Windows.

```sh
npm run typecheck
npm run lint
npm test
npm run build
npm start
```

Para verificar páginas, links, âncoras, imagens, metadados e 404 com o servidor em execução:

```sh
npm run test:routes
```

O endereço pode ser alterado por `TEST_BASE_URL`. Nenhum teste depende de serviço pago.

## Experiência implementada

- Direção visual **Luxo futurista**: contrastes entre superfícies claras, grafite e tons terrosos, tipografia Manrope em grande escala, hero imersivo com retrato cinematográfico e composições assimétricas.
- Entrada tipográfica por máscaras, profundidade no hero vinculada ao scroll, manifesto com revelação progressiva das palavras, microinterações e respeito a `prefers-reduced-motion`.
- Cuidados em composição escalonada, galeria arquitetônica contrastante e chamada de agendamento com tipografia vazada e interação circular.
- Filosofia, cuidados com filtro por categoria, galeria com ampliação acessível, perfis de equipe, FAQ, CTA e rodapé.
- Páginas `/sobre`, `/procedimentos`, `/procedimentos/[slug]`, `/equipe/[slug]`, `/agendamento`, `/contato` e `/politica-de-privacidade`.
- Agendamento em quatro etapas: categoria, preferência de data/período, dados fictícios e revisão. Validação de datas, telefone, e-mail e confirmação de modo demonstrativo.
- Seleção de cuidado preservada ao navegar de uma página de procedimento para o agendamento.
- Formulário de contato demonstrativo e concierge com cinco intenções, respostas estruturadas e encaminhamento interno.
- Menu mobile, CTA mobile, diálogos com gerenciamento de foco e fechamento por Escape, FAQ acessível por teclado, foco visível e link para pular ao conteúdo.
- Metadata, Open Graph, favicon, robots e sitemap. A demonstração usa `noindex/nofollow`, bloqueia crawlers e deixa o sitemap vazio. Não apresenta dados estruturados de clínica ou credenciais não verificadas.
- Fontes locais via `next/font/local`, imagens locais WebP via `next/image`; nenhuma dependência de mídia externa no runtime.

## Estrutura e personalização

```text
src/
  app/                    Rotas, metadata e estilos globais
  components/
    layout/               Header, footer e introdução de página
    sections/             Hero, filosofia, cuidados, experiência, equipe, FAQ, CTA, contato
    booking/              Fluxo de quatro etapas
    concierge/            Assistente guiado
    motion/               Política de movimento e reveals
    ui/                   Primitivas shadcn/ui: botão, accordion e dialog
  config/clinic.ts         Identidade, contatos, flags e profissionais tipados
  config/theme.ts          Paleta completa e parâmetros compartilhados de motion
  config/content.ts        Textos editoriais por seção e página
  config/media.ts          Imagens, logo, favicon, legendas e textos alternativos
  config/navigation.ts     Links do menu
  data/procedures.ts       Categorias, slugs, conteúdo, imagens e FAQ específico
  data/faq.ts              FAQ e base de respostas do concierge
  types/clinic.ts          Contratos dos dados
  lib/validations/         Validação dos formulários
  lib/integrations/        Contrato BookingAdapter e implementação demonstrativa
  lib/analytics.ts         Eventos locais sem dados pessoais
public/images/            Assets locais otimizados e originais preservados
tests/                    Testes de validação e comportamento do adaptador
scripts/check-routes.ts   Verificação HTTP de rotas, links e assets
docs/ASSETS.md             Origem, prompts e licenças
docs/QA.md                Evidências e limites de validação
```

1. Edite `config/clinic.ts` com dados reais verificados. Campos ausentes são `null`/listas vazias; contatos, WhatsApp e mapa só aparecem quando configurados.
2. Cadastre os procedimentos em `data/procedures.ts` e as respostas em `data/faq.ts`.
3. Troque os assets por fotografias autorizadas e ajuste legendas/textos alternativos.
4. Personalize a paleta em `config/theme.ts`. As variáveis são injetadas pelo layout; `app/globals.css` mantém a estrutura visual.
5. Edite os textos em `config/content.ts` e as imagens em `config/media.ts`, incluindo legendas e textos alternativos. Consulte o [guia de personalização](docs/CUSTOMIZATION.md) para criar uma cópia independente por cliente.
6. `clinic.showDemoBadge` controla o selo discreto. `clinic.demo` controla a indexação. **Desativar o selo não transforma os formulários em produção:** o adaptador continua demonstrativo.

Os componentes e contratos permitem substituir a configuração por um resolvedor de tenant futuramente. Esta etapa entrega um único website; não implementa roteamento multi-tenant, painel ou persistência.

## Privacidade e modo demonstração

Os dados ficam apenas na memória da página, não são enviados por rede nem salvos em banco, cookies ou armazenamento local. Ao concluir a simulação, o formulário é limpo. Ao sair/recarregar, os dados são descartados. Não há upload, campo clínico ou chat livre.

O resultado exibido é sempre **“Simulação concluída. Nenhum dado foi enviado e nenhum horário foi reservado.”** Não existem horários anunciados como disponíveis. O assistente não diagnostica, prescreve, avalia fotos ou recomenda procedimentos individuais.

Os eventos `clinicsite:event` são somente `CustomEvent` locais com nomes de ação. Não existe destino de analytics configurado.

## Integrações futuras

`lib/integrations/booking.ts` define uma fronteira explícita de integração. Antes de criar um adaptador de produção, será necessário implementar backend, validação no servidor, controle de abuso, confirmação real de recebimento, segurança, retenção e política aprovada. Agendas reais exigirão confirmação de disponibilidade e prevenção de conflitos. Nada disso é simulado como integração ativa.

WhatsApp oficial, telefone, e-mail, Instagram e link de mapa têm campos tipados opcionais. Sem dados reais, o site mostra o estado pendente em vez de links fictícios. Não há credenciais necessárias nesta versão.

## Pendências para uma clínica real

- Razão social, nome comercial, identidade e cidade/região verificadas.
- Endereço, telefone, WhatsApp oficial, e-mail, horários e redes sociais.
- Responsável técnico, profissionais, fotos autorizadas e registros/CRM/RQE aplicáveis.
- Serviços efetivamente oferecidos; revisão de indicações, contraindicações, riscos, alternativas e limitações.
- Política de privacidade aprovada, identificação do controlador, bases legais, retenção e canal de direitos.
- Revisão profissional e jurídica de publicidade médica e privacidade antes de publicação comercial.
- SEO local e dados estruturados de clínica somente após validação dos dados.
- Inspeção visual manual desktop/mobile e auditoria Lighthouse antes da apresentação comercial (limite do ambiente registrado em `docs/QA.md`).

## Deploy na Vercel

O projeto usa o preset Next.js padrão, `npm run build`, sem configuração especial de servidor. Importe o repositório na Vercel e informe `NEXT_PUBLIC_SITE_URL` com a origem definitiva. `.env.example` documenta a única variável opcional. Preserve o modo demonstração para propostas privadas. Nenhum deploy foi realizado nesta entrega local.

## Referências técnicas

- [Next.js App Router](https://nextjs.org/docs/app)
- [Motion e preferências de movimento](https://motion.dev/docs/react-use-reduced-motion)
- [shadcn/ui](https://ui.shadcn.com/docs)

Veja `docs/QA.md` para as validações realmente executadas; não são alegadas pontuações de Lighthouse sem medição.

## Preparação do repositório

A configuração de CI em `.github/workflows/check.yml` executa TypeScript, ESLint, testes e build a cada push ou pull request. `package-lock.json` fixa as versões instaladas; use `npm ci` para reproduzir o ambiente. `.gitignore` exclui dependências, builds, arquivos de ambiente e artefatos locais. Este trabalho não cria nem publica o repositório no GitHub.
