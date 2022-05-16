function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {},
        i, n, v, nv;

    if (query === url || query === "") return;

    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=", 2);
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);

        if (!parms.hasOwnProperty(n)) parms[n] = [];
        parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
}

function saveDateWedding() {
    window.open("https://www.google.com/calendar/render?action=TEMPLATE&text=Pernikahan+Tambi+%26+Mara&details=Acara+pernikahan+Hasan+Tambi+%26+Mara+Listiana+Novila&location=Gunung+Dahu+Sadengkolot+Leuwisadeng+Bogor+Regency%2C+West+Java&dates=20220529T020000Z%2F20220529T030000Z", '_blank');
}

function saveData(key, value) {
    const greetings = [{
        name: "Obaseki Nosa",
        location: "Lagos",
    }]

    window.localStorage.setItem('user', JSON.stringify(greetings));

    var data = JSON.parse(window.localStorage.getItem('user'));
    console.log(data);
}

function openWA(namePengantin, numberPhone) {
    var url = window.location.href;
    var urlParams = parseURLParams(url);

    var nameInputConfirm = document.getElementById('nameConfirm');
    var nameInputGreeting = document.getElementById('name_greeting');

    var nameInvitation = "Tamu Undangan";
    if (urlParams != null) {
        var inviteFor = urlParams.to;
        nameInvitation = inviteFor.toString();

        nameInputConfirm.value = nameInvitation;
        nameInputGreeting.value = nameInvitation;
    }

    var nameConfirm = $('#nameConfirm').val();
    var msgConfirm = $('#msgConfirm').val();

    var urlWA = "";
    if (nameConfirm === "") {
        urlWA = "https://wa.me/" + numberPhone + "/?text=Salam " + namePengantin + ", *" + nameInvitation + "* " + msgConfirm;
    } else {
        urlWA = "https://wa.me/" + numberPhone + "/?text=Salam " + namePengantin + ", *" + nameConfirm + "* " + msgConfirm;
    }

    window.open(urlWA, '_blank');
}

$(document).ready(function () {
    var url = window.location.href;
    var urlParams = parseURLParams(url);

    if (urlParams == null) {
        $('#invitationFor').text("Tamu Undangan");
    } else {
        var nameInvitation = urlParams.to;
        $('#invitationFor').text(nameInvitation.toString());

        // Fill input form Name Confirmation & Name Greeting
        $('#nameConfirm').val(nameInvitation.toString());
        $('#name_greeting').val(nameInvitation.toString());
    }


    // $('#btn_kirim_pesan').on('click', function () {
    //     var $this = $(this);
    //     $this.button('loading');
    //     setTimeout(function () {
    //         $this.button('reset');
    //     }, 8000);
    // });

});