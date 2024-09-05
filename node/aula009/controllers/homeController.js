exports.paginaInicial = (req, res) => {
    res.send(`
        <form action = "/" method = "POST">
            Nome: <input type="text" name="nome"></input>
            OutroCampo: <input type="text" name="outroCampo"></input>
            <button>Botão</button>
        </form>
    `);
};

exports.trataPost = (req, res) => {
    res.send('Ei, sou sua nova rota de post.');
};