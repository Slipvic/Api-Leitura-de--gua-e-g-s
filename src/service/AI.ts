import axios from 'axios';

export async function processMeterImage(imagePath: string): Promise<number> {
  // Requisição para a API da IA
  try {
    const response = await axios.post('https://api.external-ai-service.com/process', {
      image: imagePath,
    });
    return response.data.value; // IA retorna o valor, senão
  } catch (error) {
    throw new Error('Erro ao processar imagem');
  }
}
