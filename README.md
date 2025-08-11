# Clínica Dra. Ana Lúcia - Dermatologia

## Sobre o Projeto

Site institucional da clínica dermatológica da Dra. Ana Lúcia Silva, especializada em tratamentos a laser de última geração.

## Funcionalidades

- **Design Responsivo**: Interface moderna e adaptável para todos os dispositivos
- **Carrossel de Imagens**: Apresentação visual com transições suaves
- **Formulário de Contato**: Sistema de agendamento integrado
- **Depoimentos**: Seção de feedback dos pacientes
- **WhatsApp Widget**: Botão flutuante para contato direto

## Melhorias Implementadas

### 1. Otimização de Performance
- ✅ Removido preload desnecessário de imagens inexistentes
- ✅ Implementado sistema de fallback para imagens externas
- ✅ Hook personalizado para gerenciamento de carregamento de imagens

### 2. Tratamento de Erros
- ✅ Fallback visual quando imagens do Unsplash falham
- ✅ Timeout configurável para carregamento de imagens
- ✅ Indicador de status e botão de retry
- ✅ Gradientes locais como alternativa visual

### 3. Estrutura do Código
- ✅ Configuração centralizada de imagens (`src/utils/imageConfig.ts`)
- ✅ Hook personalizado para carregamento (`src/hooks/useImageLoader.ts`)
- ✅ Componentes mais limpos e organizados

## Tecnologias Utilizadas

- **React 18** com TypeScript
- **Tailwind CSS** para estilização
- **Framer Motion** para animações
- **Lucide React** para ícones

## Estrutura de Arquivos

```
src/
├── components/          # Componentes React
├── hooks/              # Hooks personalizados
├── utils/              # Utilitários e configurações
└── App.tsx            # Componente principal
```

## Como Executar

1. Instalar dependências:
```bash
npm install
```

2. Executar em modo desenvolvimento:
```bash
npm start
```

3. Build para produção:
```bash
npm run build
```

## Configurações

### Imagens
- As imagens principais são carregadas do Unsplash
- Fallbacks locais são usados quando as imagens externas falham
- Timeout configurável para carregamento (padrão: 10s)

### Performance
- Preload apenas de recursos críticos
- Carregamento paralelo de imagens
- Lazy loading implementado

## Contribuição

Para contribuir com o projeto:
1. Faça um fork do repositório
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Abra um Pull Request

## Licença

Este projeto é privado e pertence à Clínica Dra. Ana Lúcia.
