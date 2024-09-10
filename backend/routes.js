const express = require('express');
const router = express.Router();
const cpfController = require('./controllers/CpfController');

router.post('/cadastros', cpfController.createCadastroPessoaFisica);
router.get('/cadastros/todosCadastros/:cpf', cpfController.getAllCadastroPessoaFisica);
router.get('/cadastros/Cpf', cpfController.getCadastroPessoaFisicaByCpf);
router.put('/cadastros/update', cpfController.updateCadastroPessoaFisica);
router.delete('/cadastros/delete', cpfController.deleteCadastroPessoaFisica);

module.exports = router;