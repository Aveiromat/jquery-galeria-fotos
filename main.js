$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    });

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    });

    $('form').on('submit', function(e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();

        const novoItem = $('<li></li>');

        const novaImagem = $('<img />').attr({
            src: enderecoDaNovaImagem,
            alt: 'Imagem adicionada',
        });

        novaImagem.css('opacity', '0');

        const imagemContainer = $('<div class="imagem-container"></div>');

        const overlayImagemLink = $('<div class="overlay-imagem-link"></div>');

        const linkImagem = $('<a></a>').attr({
            href: enderecoDaNovaImagem,
            target: '_blank',
        }).text('Ver imagem expandida');

        imagemContainer.append(novaImagem, overlayImagemLink);
        overlayImagemLink.append(linkImagem);

        novoItem.append(imagemContainer);

        $('ul').append(novoItem);

        setTimeout(function() {
            novaImagem.css('opacity', '1');
        }, 100);

        $('#endereco-imagem-nova').val('');

        $('form').slideUp();
    });
});
