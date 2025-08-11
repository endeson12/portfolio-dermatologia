# Guia de Resolução de Problemas - Carregamento de Imagens

## Problema: Erro 404 nas Imagens do Unsplash

### Descrição
O site está apresentando erros 404 ao tentar carregar imagens do Unsplash, resultando em imagens quebradas ou não carregadas.

### Causas Possíveis
1. **URLs expiradas**: As URLs do Unsplash podem expirar ou ser removidas
2. **Problemas de rede**: Instabilidade na conexão com o servidor do Unsplash
3. **Limites de API**: O Unsplash pode ter limites de requisições
4. **CORS**: Problemas de Cross-Origin Resource Sharing

### Soluções Implementadas

#### 1. Sistema de Retry Automático
- **Retry automático**: Tentativas múltiplas de carregamento (3 tentativas)
- **Delay progressivo**: Intervalo crescente entre tentativas
- **Retry periódico**: Nova tentativa automática a cada 30 segundos

#### 2. URLs de Backup
- **Imagens alternativas**: URLs do Pexels como backup
- **Fallback local**: Gradientes e cores quando imagens falham
- **Múltiplas fontes**: Redundância para garantir disponibilidade

#### 3. Tratamento de Erros Robusto
- **Fallback visual**: Gradientes coloridos quando imagens falham
- **Loading states**: Indicadores visuais durante carregamento
- **Error handling**: Tratamento gracioso de falhas

### Como Resolver Manualmente

#### Opção 1: Atualizar URLs do Unsplash
1. Acesse [Unsplash](https://unsplash.com)
2. Procure por imagens de dermatologia/profissionais de saúde
3. Copie as URLs das imagens
4. Atualize o arquivo `src/utils/imageConfig.ts`

#### Opção 2: Usar Imagens Locais
1. Adicione imagens ao diretório `public/images/`
2. Atualize as URLs para caminhos locais:
   ```typescript
   primaryImages: [
     "/images/dermatologista-1.jpg",
     "/images/dermatologista-2.jpg",
     "/images/dermatologista-3.jpg"
   ]
   ```

#### Opção 3: Usar Outros Serviços
- **Pexels**: https://www.pexels.com
- **Pixabay**: https://pixabay.com
- **Freepik**: https://www.freepik.com

### Configurações de Desenvolvimento

#### Debug de Imagens
Durante o desenvolvimento, um painel de debug é exibido no canto superior direito mostrando:
- Status de cada imagem (Carregando/Erro/Carregada)
- URL da imagem ativa
- Estado de carregamento em tempo real

#### Logs de Console
Verifique o console do navegador para:
- Avisos de tentativas falhadas
- Erros de carregamento
- Status de retry automático

### Monitoramento em Produção

#### Métricas Recomendadas
- Taxa de sucesso no carregamento de imagens
- Tempo médio de carregamento
- Frequência de fallbacks ativados

#### Alertas
Configure alertas para:
- Taxa de erro > 10%
- Tempo de carregamento > 5 segundos
- Múltiplas falhas consecutivas

### Prevenção de Problemas Futuros

#### 1. Validação Regular
- Teste URLs mensalmente
- Monitore logs de erro
- Verifique disponibilidade das imagens

#### 2. Cache e CDN
- Implemente cache de imagens
- Use CDN para distribuição global
- Considere lazy loading

#### 3. Fallbacks Múltiplos
- Mantenha 3+ fontes de imagens
- Implemente fallbacks visuais
- Use imagens locais como último recurso

### Comandos Úteis

#### Verificar Status das Imagens
```bash
# Testar URLs das imagens
curl -I "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop&crop=face&auto=format&q=80"
```

#### Limpar Cache
```bash
# Limpar cache do navegador
npm run build
npm run start
```

### Contato para Suporte
Se os problemas persistirem:
1. Verifique a documentação oficial do Unsplash
2. Consulte logs de erro detalhados
3. Teste com diferentes navegadores/dispositivos
4. Considere migrar para imagens locais

---

**Última atualização**: $(date)
**Versão**: 1.0
**Status**: Ativo
