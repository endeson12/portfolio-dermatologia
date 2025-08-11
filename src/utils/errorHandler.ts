// Utilitário para tratamento de erros de conexão e recursos
export class ConnectionErrorHandler {
  private static instance: ConnectionErrorHandler;
  private errorCounts: Map<string, number> = new Map();
  private lastErrorTime: Map<string, number> = new Map();
  private readonly MAX_ERRORS_PER_MINUTE = 5;
  private readonly SILENCE_DURATION = 60000; // 1 minuto

  static getInstance(): ConnectionErrorHandler {
    if (!ConnectionErrorHandler.instance) {
      ConnectionErrorHandler.instance = new ConnectionErrorHandler();
    }
    return ConnectionErrorHandler.instance;
  }

  // Interceptar e filtrar erros de console
  public initializeErrorHandling(): void {
    // Interceptar erros de console para reduzir spam
    const originalConsoleError = console.error;
    const originalConsoleWarn = console.warn;

    console.error = (...args: any[]) => {
      const message = args.join(' ');
      if (this.shouldSuppressError(message)) {
        return; // Suprimir erro repetitivo
      }
      originalConsoleError.apply(console, args);
    };

    console.warn = (...args: any[]) => {
      const message = args.join(' ');
      if (this.shouldSuppressError(message)) {
        return; // Suprimir warning repetitivo
      }
      originalConsoleWarn.apply(console, args);
    };
  }

  private shouldSuppressError(message: string): boolean {
    const errorKey = this.getErrorKey(message);
    const now = Date.now();
    const lastTime = this.lastErrorTime.get(errorKey) || 0;
    const count = this.errorCounts.get(errorKey) || 0;

    // Se passou mais de 1 minuto, resetar contador
    if (now - lastTime > this.SILENCE_DURATION) {
      this.errorCounts.set(errorKey, 0);
      this.lastErrorTime.set(errorKey, now);
      return false;
    }

    // Se já passou do limite, suprimir
    if (count >= this.MAX_ERRORS_PER_MINUTE) {
      return true;
    }

    // Incrementar contador
    this.errorCounts.set(errorKey, count + 1);
    this.lastErrorTime.set(errorKey, now);
    return false;
  }

  private isConnectionError(message: string): boolean {
    const connectionErrorPatterns = [
      'ERR_CONNECTION_REFUSED',
      'ERR_NETWORK',
      'WebSocket connection',
      'Failed to load resource',
      'net::ERR_',
      'CORS'
    ];

    return connectionErrorPatterns.some(pattern => 
      message.toLowerCase().includes(pattern.toLowerCase())
    );
  }

  private getErrorKey(message: string): string {
    return message
      .replace(/https?:\/\/[^\s]+/g, '[URL]')
      .replace(/\d+/g, '[NUM]')
      .substring(0, 100);
  }
}

const errorHandler = ConnectionErrorHandler.getInstance();
export default errorHandler;
