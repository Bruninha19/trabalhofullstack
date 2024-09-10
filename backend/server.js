const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors'); ;
const routes = require('./routes');
const app = express();
const CadastroPessoaFisica = require('./models/cpf'); // Certifique-se de que o caminho está correto
const port = 3000;
const db = require('./models');

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(bodyParser.json());

app.post('/cadastros', async (req, res) => {
    const { nome, telefone, cpf } = req.body;

    console.log('Dados recebidos:', { nome, cpf, telefone });
    
    if (!nome || !telefone || !cpf) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    try {
        const novoCadastro = await db.CadastroPessoaFisica.create({
            Nome: nome,
            Telefone: telefone,
            Cpf : cpf
        });

         res.status(201).json({ message: 'Cadastro realizado com sucesso!', cadastro: novoCadastro });
    } catch (error) {
        console.error('Erro ao cadastrar:', error);
        res.status(500).json({ error: 'Erro ao cadastrar', details: error.message });
    }
});

app.get('/', (req, res) => {
    res.send('Servidor funcionando!');
});

app.get('/cadastros/todosCadastros/:cpf', async (req, res) => {
    const cpf = req.params.cpf; // Capturar o CPF da URL

    try {
        // Consultar o banco de dados pelo CPF
        const cadastro = await CadastroPessoaFisica.findOne({ where: { Cpf: cpf } });

        // Verificar se o cadastro existe
        if (!cadastro) {
            return res.status(404).json({ error: 'Cadastro não encontrado.' });
        }

        // Retornar o cadastro encontrado
        res.status(200).json(cadastro);
    } catch (error) {
        // Se houver um erro, enviar uma resposta com status 500 e o erro
        console.error('Erro ao consultar o cadastro:', error);
        res.status(500).json({ error: 'Erro ao consultar o cadastro', details: error.message });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/cadastros`);
});
