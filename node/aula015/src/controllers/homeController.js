exports.paginaInicial = (req, res) => {
    //req.session.usuario = { nome: 'Jader', logado: true }; Vai durar por 7 dias
    //req.flash('info', 'Olá mundo!');
    //req.flash('error', 'Tá errado!');
    //req.flash('success', 'Bla bla bla');
    //console.log(req.flash('info'), req.flash('error'), req.flash('success'));
    
    res.render('index');
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
};
