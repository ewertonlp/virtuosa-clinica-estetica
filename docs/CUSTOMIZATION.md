# Personalizar sem perder o template

Mantenha este projeto como repositório base. No GitHub, marque-o como **Template repository** nas configurações. Para cada cliente, use **Use this template → Create a new repository** e trabalhe nessa nova cópia. Ela terá código, histórico e publicação independentes. Não altere a base para preparar uma proposta específica.

Melhorias feitas na base não chegam automaticamente às cópias existentes. Transfira correções relevantes de forma controlada e execute as verificações novamente.

## Onde editar

| Arquivo                            | Personalização                                                                |
| ---------------------------------- | ----------------------------------------------------------------------------- |
| `src/config/clinic.ts`             | Nome, assinatura, descrição, contatos, horários e profissionais               |
| `src/config/content.ts`            | Textos editoriais por página/seção, títulos, chamadas e metadata              |
| `src/config/media.ts`              | Imagens, logo opcional, favicon, dimensões, legendas e textos alternativos    |
| `src/config/theme.ts`              | Paleta, cores específicas das seções e parâmetros de movimento compartilhados |
| `src/config/navigation.ts`         | Rótulos e destinos do menu                                                    |
| `src/data/procedures.ts`           | Cuidados, categorias, slugs, imagens e perguntas específicas                  |
| `src/data/faq.ts`                  | Perguntas gerais e respostas do assistente                                    |
| `public/images/` e `public/brand/` | Arquivos de imagem e identidade visual                                        |
| `.env.local`                       | URL da apresentação (`NEXT_PUBLIC_SITE_URL`), conforme `.env.example`         |

O nome usado em referências editoriais é preenchido automaticamente por `{{name}}`, `{{nameLower}}` e `{{nameUpper}}` dentro das chamadas `brand(...)`. O texto ao redor continua editável: revise artigos e concordância para a nova marca. A estrutura de `content` é inferida pelo TypeScript; renomear uma chave exige atualizar seu uso.

`content.hero.headline` tem três linhas para preservar a composição. Prefira chamadas curtas e confira quebras no celular. A identidade visual atual está preservada em `theme.colors`; comece pelos tokens `primary`, `secondary`, `accent`, `page`, `text` e `button`. Há tokens adicionais para os contrastes específicos de cada seção. Alterações estruturais, tipografia e espaçamento continuam em `globals.css`.

Para usar um logo, configure `media.brand.logo` com `src`, `alt`, `width`, `height` e `caption`. Com `null`, o cabeçalho usa o nome tipográfico. O rodapé mantém uma assinatura tipográfica derivada do nome. Troque também `public/brand/icon.svg`. Use caminhos locais iniciados por `/`, dimensões reais e fotografias autorizadas. Mantenha a identificação de imagens geradas por IA enquanto elas forem usadas.

Os filtros de categorias, páginas dos procedimentos e opções de agendamento acompanham o catálogo. O concierge lista os cuidados cadastrados e consulta os contatos da configuração. Revise as demais respostas e os avisos de demonstração ao preparar a proposta.

## Fluxo de uma proposta

1. Crie um repositório do cliente a partir da base e faça uma cópia local.
2. Execute `npm ci` e `npm run dev`.
3. Preencha identidade, conteúdos, imagens e cores nos arquivos acima.
4. Use somente dados verificados; identifique os exemplos fictícios e mantenha `demo: true` para a apresentação.
5. Execute `npm run typecheck`, `npm run lint`, `npm test` e `npm run build`.
6. Com `npm start` em execução, rode `npm run test:routes`. Confira também desktop/celular, menu, galeria e formulários no navegador.
7. Publique a cópia do cliente em endereço próprio para apresentação. Não sobrescreva a publicação da base.

## Limites desta etapa

Os formulários e o assistente permanecem demonstrativos. Alterar `demo` ou esconder o selo não conecta agenda, backend ou envio de mensagens. A ausência de indexação não protege o acesso: uma URL pública de apresentação pode ser aberta por quem a receber. Dados, imagens e arquivos em `public` ou nas configurações podem ser vistos pelos visitantes; nunca inclua segredos neles.

Esta preparação não cria dashboard nem sistema multiwebsite. Cada cópia é um website independente, com componentes reutilizáveis e configurações tipadas para facilitar uma evolução posterior.
