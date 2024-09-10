const axios = require('axios');
const {CadastroPessoaFisica} = require('../models');

exports.createCadastroPessoaFisica = async(req,res) => {
    try{
        const{Nome, Cpf, Telefone} = req.body;

        const novoCadastroPessoaFisica = await CadastroPessoaFisica.create({
         Nome,
         Cpf,
         Telefone,
        });

        res.status(201).json(novoCadastroPessoaFisica);
    } catch(error){
        res.status(500).json({error: 'Erro ao cadastrar', details: error.message});
    }
};


exports.getAllCadastroPessoaFisica = async(req, res) => {
    try{
        const cadastroPessoaFisica = await CadastroPessoaFisica.findAll();
        res.status(200),json(cadastroPessoaFisica);
    } catch(error){
        res.status(500).json({ error: 'Erro ao buscar cadastros', details: error.message});
    }
};

exports.getCadastroPessoaFisicaByCpf= async(req, res) => {
    try{
        const{Cpf} = req.params;
        const cadastroPessoaFisica = await CadastroPessoaFisica.findByPK(Cpf);

        if(!cadastroPessoaFisica){
            return res.status(404).json({ error: 'Cadastro não encontrado'});
        }
    }catch(error){
        res.status(500).json({ error: 'Erro ao buscar cadastro', details: error.message})
    }
};

exports.updateCadastroPessoaFisica = async(req, res) => {
    try{
        const{Cpf} = req.params;
        const{Nome, Telefone} = req.body;

        const cadastroPessoaFisica = await CadastroPessoaFisica.findByPk(Cpf);

        if(!cadastroPessoaFisica){
            return res.status(404).json({error: 'Cadastro não encontrado'});
        }

        CadastroPessoaFisica.Nome = Nome;
        CadastroPessoaFisica.Telefone = Telefone;


        await CadastroPessoaFisica.save();

        res.status(200).json(cadastroPessoaFisica);
    }catch(error) {
        res.status(500).json({ error: 'Erro ao atualizar cadastro', details: error.message});

    }
};

exports.deleteCadastroPessoaFisica = async (req, res) => {
    try{
        const{Cpf} = req.params;

        const cadastroPessoaFisica = await CadastroPessoaFisica.findByPk(Cpf);

        if(!cadastroPessoaFisica){
            return res.status(404).json({error: 'Cadastro não encontrado'})
        }

        await cadastroPessoaFisica.destroy();

        res.status(204).send(); //Sem conteúdo, pois foi deletado com sucesso

    }catch(error){
        res.status(500).json({ error: 'Erro ao deletar cadastro', details: error.message});
    }
};

