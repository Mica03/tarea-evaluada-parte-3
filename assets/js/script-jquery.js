let botonBrazos = $('#animacionBrazos')
let changetheworld = $('#desaparecer')
let volvi = $('#comeback')

botonBrazos.click(function(){
    $(".brazo1").animate({rotate: '10deg'}, 500)
    $(".brazo2").animate({rotate: '10deg'}, 500)
})

changetheworld.click(function(){
    $(".pikachu-entero").fadeOut();
})

volvi.click(function(){
    $(".pikachu-entero").fadeIn();
})

