const express = require('express');
const {
    updateAgendamentos, 
    createUser,
    createCarga,
    createDepositos,
    createCaminhao,
    createAgendamento,
    getAgendamentos,
    getUsers,
    getCargas,
    getDepositos,
    getCaminhao,
    login } = require('../controllers/userController');

const router = express.Router();

/*
router.route('/')
    .get(getBootcamps)
    .post(createBootcamp);

router.route('/:id')
    .get(getBootcamp)
    .put(updateBootcamp)
    .delete(deleteBootcamp);
    */

router.route('/inserirUser').post(createUser);
router.route('/inserirCarga').post(createCarga);
router.route('/inserirDeposito').post(createDepositos);
router.route('/inserirCaminhao').post(createCaminhao);
router.route('/inserirAgendamento').post(createAgendamento);

router.route('/agendamentos').get(getAgendamentos);
router.route('/users').get(getUsers);
router.route('/depositos').get(getDepositos);
router.route('/cargas').get(getCargas);
router.route('/caminhoes').get(getCaminhao);

router.route('/login').get(login);

router.route('/agendamento/:id').put(updateAgendamentos);

module.exports = router;