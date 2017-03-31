module.exports = function  () {

    var then = function  (argument) {

        var fontAlgo = document.querySelector('.fontAlgo'), input =  document.querySelector('input'), frlen = input.value;

        var REO = new Reo();

        var Chain = REO.chain({
            module : 'user_next',
            val: [22,3,5] // mes1 = 22 ,mes2 = 3, mes3 = 5
        });

        var getvalue = Chain.then(function ( api, mes1 ) {
            api( mes1 + 3 );
        }).then(function  (  api , mes2, massages ) {
            api( mes2 + 12 + Number(frlen) );
        }).then(function  (  api , mes3, massages ) {
            api( mes3 + massages );
        });

        fontAlgo.innerText = getvalue.all();

        $('.btn').click(function  () {

            var Chain = REO.chain({
                module : 'user_next',
                val: [22,3,5] // mes1 = 22 ,mes2 = 3, mes3 = 5
            });
            var getvalue = Chain.then(function ( api, mes1 ) {
                api( mes1 + 3 );
            })
            .then(function  (  api , mes2, massages ) {
                api( mes2 + Number(input.value) );
            })
            .then(function  (  api , mes3, massages ) {
                api( mes3 + massages );
            });


            var getAll = getvalue.all();

            $(fontAlgo).html(getAll + '' );
        });

    };

    return {
        then_module : then
    }

};