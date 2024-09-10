document.getElementById('formCadastroPessoaFisica').addEventListener('submit', async (event) => {
    event.preventDefault();

    // Capturar os valores dos campos de entrada do formulário
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;

    // Verificar se todos os campos estão preenchidos
    if (!nome || !cpf || !telefone) {
        document.getElementById('message').innerText = 'Todos os campos são obrigatórios.';
        return;
    }

    // Criar o objeto de dados a ser enviado para o backend
    const cadastroData = {
        nome: nome,
        cpf: cpf,
        telefone: telefone
    };

    try {
        // Fazer a requisição POST para o backend
        const response = await fetch('http://localhost:3000/cadastros', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cadastroData)
        });

        const result = await response.json();

        // Se a resposta for bem-sucedida, exibir a mensagem de sucesso
        if (response.ok) {
            document.getElementById('message').innerText = 'Cadastro realizado com sucesso!';
            document.getElementById('formCadastroPessoaFisica').reset(); // Limpar o formulário após sucesso
        } else {
            // Se ocorrer algum erro, exibir a mensagem de erro
            document.getElementById('message').innerText = `Erro: ${result.error || 'Não foi possível realizar o cadastro.'}`;
        }
    } catch (error) {
        // Caso haja erro na comunicação com o servidor
        console.error('Erro na requisição:', error);
        document.getElementById('message').innerText = 'Erro na comunicação com o servidor.';
    }
});
