import { useState } from 'react';

export function useClipboard() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reseta o estado após 2 segundos
      return true;
    } catch (err) {
      console.error('Erro ao copiar para a área de transferência:', err);
      return false;
    }
  };

  return { copied, copyToClipboard };
}
