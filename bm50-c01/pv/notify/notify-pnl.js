
    /*
     * Lobibox
     */
    function termoRandom(string) {
        if (string.indexOf("|") != -1) {
            var nomeString = string.split("|");
            var nomes = nomeString[1];
            var nome = nomes.split(",");
            var number = Math.floor(Math.random() * nome.length);
            var nomeFinal = nome[number];
            return (nomeString[0] + nomeFinal + nomeString[2]);
        } else {
            return string;
        }
    }
    Lobibox.notify.DEFAULTS = $.extend({}, Lobibox.notify.DEFAULTS, {
        pauseDelayOnHover: false,
        continueDelayOnInactiveTab: false,
        showAfterPrevious: false,
        rounded: false,
        delayIndicator: true,
        sound: false,
        icon: true,
        img: "https://newprost.com/notify/check-notificacao-branco.png",
        showClass: 'fadeIn',
        hideClass: 'fadeOut',
        size: 'mini',
        closable: false,
        position: 'bottom left',
        delay: 7000, // 7000
        onClickUrl: 'javascript:upsellPotes("comprar3Potes", "https://app.monetizze.com.br/checkout/DSR82079?src=notify&split=12", "https://app.monetizze.com.br/checkout/DQS82081?src=notify&split=12");',
        width: 300
    });
	