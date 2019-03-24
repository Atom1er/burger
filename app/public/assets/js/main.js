$(document).ready(()=>{
    $('#submit').on('click', () => {
        var new_burger = $('#new-burger').val();
        console.log(new_burger);
        menu (new_burger);
    });

    $("#pigeon-burger").on('click', ()=>{
        var new_burger = $('#pigeon-burger').val();
        menu(new_burger);
    });

    $("#in-ou-out").on('click', ()=>{
        var new_burger = $('#in-ou-out').val();
        menu(new_burger);
    });

    $("#wiskey-king-burger").on('click', ()=>{
        var new_burger = $('#wiskey-king-burger').val();
        menu(new_burger);
    });

    $("#the-company-burger").on('click', ()=>{
        var new_burger = $('#the-company-burger').val();
        menu(new_burger);
    });

    $("#chargrilled").on('click', ()=>{
        var new_burger = $('#chargrilled').val();
        menu(new_burger);
    });

    $("#dyer-deep-fried").on('click', ()=>{
        var new_burger = $('#dyer-deep-fried').val();
        menu(new_burger);
    });


    function menu (val){
        $.ajax({
            type: "POST",
            url: "/api/new-burger/"+val
        }).then((data)=>{
            location.reload();
        } );
    }
});