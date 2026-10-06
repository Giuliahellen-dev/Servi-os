function carregarServicos() {

    fetch(API)
        .then(resposta => resposta.json())
        .then(servicos => {

            lista.innerHTML = "";

            if (servicos.length === 0) {

                lista.innerHTML = `
                    <p>
                        Ainda não há serviços cadastrados.
                    </p>
                `;

                return;
            }

            servicos.forEach(servico => {

                lista.innerHTML += `
                    <div class="servico">

                        <h3>${servico.nome}</h3>

                        <p>${servico.descricao}</p>

                        <p>
                            <strong>Categoria:</strong>
                            ${servico.categoria}
                        </p>

                        <button onclick="editarServico('${servico.id}')">
                            Editar
                        </button>

                        <button onclick="excluirServico('${servico.id}')">
                            Excluir
                        </button>

                    </div>
                `;
            });
        });
}