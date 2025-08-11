document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os cards
    const cards = document.querySelectorAll('.card');
    const modal = document.getElementById('modal');
    const closeModal = document.querySelector('.close-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');

    // Dados para o modal (poderia vir de uma API)
    const cardData = {
        1: {
            title: "Ideias Criativas",
            content: "Nesta seção, exploramos técnicas avançadas de brainstorming e pensamento lateral para gerar ideias inovadoras. Aprenda como romper com padrões convencionais e desenvolver soluções criativas para problemas complexos."
        },
        2: {
            title: "Desenvolvimento Rápido",
            content: "Descubra as ferramentas e metodologias que aceleram seu fluxo de trabalho. Desde frameworks modernos até técnicas de prototipagem rápida, tudo o que você precisa para entregar projetos com qualidade em tempo recorde."
        },
        3: {
            title: "Design Impactante",
            content: "Aprenda os princípios do design que emocionam e engajam usuários. Exploramos desde psicologia das cores até microinterações que fazem a diferença na experiência do usuário final."
        }
    };

    // Adiciona evento de clique para cada card
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const cardId = this.getAttribute('data-card-id');
            openModal(cardId);
        });
    });

    // Função para abrir o modal
    function openModal(cardId) {
        const data = cardData[cardId];
        modalTitle.textContent = data.title;
        modalText.textContent = data.content;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Impede scroll da página
    }

    // Fecha o modal ao clicar no X
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Fecha o modal ao clicar fora do conteúdo
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Adiciona efeito de teclado (ESC para fechar)
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});
