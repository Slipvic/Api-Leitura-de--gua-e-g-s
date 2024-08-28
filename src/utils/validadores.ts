export function validarBase64(base64: string): boolean {
    // Implementar validação de string base64
    return /^data:image\/[a-z]+;base64,/.test(base64);
  }
  
  export function validarTipoLeitura(tipo: string): boolean {
    // Implementar validação do tipo de leitura
    return ['agua', 'gas'].includes(tipo);
  }