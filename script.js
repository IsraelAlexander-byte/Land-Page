// script.js
document.addEventListener('DOMContentLoaded', () => {
  const img = document.querySelector('.avatar img');
  if (!img) {
    console.warn('Avatar image não encontrada (.avatar img).');
    return;
  }

  img.addEventListener('click', () => {
    // cria overlay
    const overlay = document.createElement('div');
    overlay.className = 'img-overlay';

    // img grande (clonamos src e alt)
    const big = document.createElement('img');
    big.src = img.src;
    big.alt = img.alt || 'Foto';

    // dica de fechar
    const hint = document.createElement('div');
    hint.className = 'close-hint';
    hint.textContent = 'Clique fora da imagem ou pressione Esc para fechar';

    overlay.appendChild(big);
    overlay.appendChild(hint);
    document.body.appendChild(overlay);

    // animar entrada
    // pequeno timeout pra aplicar classe show (transição)
    requestAnimationFrame(() => overlay.classList.add('show'));

    // fechar ao clicar fora da imagem
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay || e.target === hint) {
        overlay.classList.remove('show');
        setTimeout(() => overlay.remove(), 240);
      }
    });

    // fechar com ESC
    const escHandler = (ev) => {
      if (ev.key === 'Escape') {
        overlay.classList.remove('show');
        setTimeout(() => overlay.remove(), 240);
        document.removeEventListener('keydown', escHandler);
      }
    };
    document.addEventListener('keydown', escHandler);
  });
});
