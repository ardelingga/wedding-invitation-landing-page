var script_url = "https://script.google.com/macros/s/AKfycbzUTqbHFr-YmHAKLtKEx6PD8iWJ1IpO0jpWYVPolKfLIw4a01A8hHJJYHtHG3D5lG174w/exec";

// Make an AJAX call to Google Script
function insert_value() {
    var btn_send = $('#btn_kirim_pesan');
    btn_send.button('loading');

    var name = $("#name_greeting").val();
    var gender = $("#gender").val();
    var message = $("#message").val();

    if(message == ""){
        message = "Happy Wedding.."
    }


    var url = script_url + "?callback=ctrlq&name=" + name + "&gender=" + gender + "&message=" + message + "&action=insert";


    var request = jQuery.ajax({
        // url: url,
        // method: "GET",
        // dataType: "jsonp"
        crossDomain: true,
        url: url,
        type: 'GET',
        async: true,
        dataType: 'json',
        enctype: 'multipart/form-data',
        cache: false,
        success: function (data) {
        },
        error: function (thrownError) {
        },
        complete: function () {
            // Fill input form Name Confirmation & Name Greeting
            $('#name_greeting').val("");
            $('#gender option[value="1"]').attr("selected",true);
            $('#message').val("");
            btn_send.button('reset');
            window.location.reload(true);
            // window.history.forward(1);
            // read_value();
        }
    });
}

function update_value() {
    $("#re").css("visibility", "hidden");
    document.getElementById("loader").style.visibility = "visible";

    var id1 = $("#id").val();
    var name = $("#name").val();

    var url = script_url + "?callback=ctrlq&name=" + name + "&id=" + id1 + "&action=update";

    var request = jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "jsonp"
    });
}

function delete_value() {
    $("#re").css("visibility", "hidden");
    document.getElementById("loader").style.visibility = "visible";
    $('#mySpinner').addClass('spinner');
    var id1 = $("#id").val();
    var name = $("#name").val();

    var url = script_url + "?callback=ctrlq&name=" + name + "&id=" + id1 + "&action=delete";

    var request = jQuery.ajax({
        crossDomain: true,
        url: url,
        method: "GET",
        dataType: "jsonp"
    });
}

// print the returned data
function ctrlq(e) {
    $("#re").html(e.result);
    $("#re").css("visibility", "visible");
    read_value();

}

function read_value() {

    // $("#re").css("visibility", "hidden");
    // document.getElementById("loader").style.visibility = "visible";

    var url = script_url + "?action=read";
    console.log("URL MAKAN BESAR");
    console.log(url);
    $.getJSON(url, function (json) {

        console.log("MAKAN BESAR");
        console.log(json);

        let elementGreetings = `<div class="item">
        <div class="testimony-slide active text-center">
                <figure>
                    <img src="images/additional/ic-man.png" alt="user">
                </figure>
                <span>John Doe, via</span>
                <blockquote>
                    <p>"Far far away, behind the word mountains, far from the countries
                        Vokalia and Consonantia, there live the blind texts. Separated they
                        live in Bookmarksgrove right at the coast of the Semantics"</p>
                </blockquote>
            </div>
        </div>`;

        for (var i = 0; i < json.records.length; i++) {
            let record = {
                name: json.records[i].Name,
                gender: json.records[i].Gender,
                message: json.records[i].Message,
            }

            // $('#greetings_section').append(elementGreetings);
            console.log(record);    
        }

        // Set the variables from the results array

        // CREATE DYNAMIC TABLE.
        // var table = document.createElement("table");

        // var header = table.createTHead();
        // var row = header.insertRow(0);
        // var cell1 = row.insertCell(0);
        // var cell2 = row.insertCell(1);
        // var cell3 = row.insertCell(2);
        // var cell4 = row.insertCell(3);

        // cell1.innerHTML = "<b>ID</b>";
        // cell2.innerHTML = "<b>Name</b>";
        // cell3.innerHTML = "<b>Gender</b>";
        // cell4.innerHTML = "<b>Message</b>";

        // // ADD JSON DATA TO THE TABLE AS ROWS.
        // for (var i = 0; i < json.records.length; i++) {
        //     tr = table.insertRow(-1);
        //     var tabCell = tr.insertCell(-1);
        //     tabCell.innerHTML = json.records[i].ID;
        //     tabCell = tr.insertCell(-1);
        //     tabCell.innerHTML = json.records[i].Name;
        //     tabCell = tr.insertCell(-1);
        //     tabCell.innerHTML = json.records[i].Gender;
        //     tabCell = tr.insertCell(-1);
        //     tabCell.innerHTML = json.records[i].Message;
        // }

        // // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        // var divContainer = document.getElementById("showData");
        // divContainer.innerHTML = "";
        // divContainer.appendChild(table);
        // document.getElementById("loader").style.visibility = "hidden";
        // $("#re").css("visibility", "visible");
    });
}