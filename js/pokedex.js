function getPokemon(id){
    $.ajax({
        type: 'get',
        url: 'http://pokeapi.co/api/v1/pokemon/'+id,
        dataType: 'jsonp',
        success: function(result){
            console.log(result);
            $('#pokemon').append('<div class="card"><img src="http://pokeapi.co/media/img/'+id+'.png"><div class="desc"><span class="center">'+result.name+'</span><span class="center">HP-'+result.hp+'</span><span class="center">ATTACK-'+result.attack+'</span></div></div>');
        },
        error: function(xhr,status){
            console.log(status);
        }
    });
}