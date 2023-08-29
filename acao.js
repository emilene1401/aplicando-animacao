// iniciando o canvas
var canvas = document.getElementById('desenho')
var ctx = canvas.getContext('2d');
 
// configurações
var x = 0;
var y = 0;
var altura = 100;
var largura = 100;
function animacao(){
    // apagando o retangulo
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    // desenhando um novo retangulo
    ctx.fillRect(x++, y++, largura, altura)
 }
 setInterval(animacao, 1)