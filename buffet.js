document.addEventListener('DOMContentLoaded', () => {
  // Scroll suave para links internos (se houver)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Criar modal dinamicamente
  const modalHTML = `
    <div class="modal-bg" id="modal-contato">
      <div class="modal-content">
        <span class="modal-close" id="modal-close">&times;</span>
        <h2>Solicitar Orçamento</h2>
        <form id="form-orcamento">
          <label for="nome">Nome *</label>
          <input type="text" id="nome" name="nome" required />
          <label for="email">Email *</label>
          <input type="email" id="email" name="email" required />
          <label for="mensagem">Mensagem</label>
          <textarea id="mensagem" name="mensagem" rows="4"></textarea>
          <button type="submit" class="btn">Enviar</button>
        </form>
        <p id="confirm-msg" style="display:none; color: var(--verde); font-weight:700; margin-top:10px;">Mensagem enviada com sucesso!</p>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', modalHTML);

  const modal = document.getElementById('modal-contato');
  const btnOrcamento = document.querySelector('.btn');
  const btnClose = document.getElementById('modal-close');
  const formOrcamento = document.getElementById('form-orcamento');
  const confirmMsg = document.getElementById('confirm-msg');

  btnOrcamento.addEventListener('click', e => {
    e.preventDefault();
    modal.classList.add('active');
    confirmMsg.style.display = 'none';
    formOrcamento.style.display = 'block';
    formOrcamento.reset();
  });

  btnClose.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });

  formOrcamento.addEventListener('submit', e => {
    e.preventDefault();
    formOrcamento.style.display = 'none';
    confirmMsg.style.display = 'block';
  });
});
