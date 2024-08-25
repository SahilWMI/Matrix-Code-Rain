const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Symbol {
    constructor(x, y, fontSize,canvasHeight){
        this.characters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        this.x = x;
        this.y = y;
        this.fontSize = fontSize;
        this.text = '';
        this.canvasHeight;
    }
    draw(){

    }
}

class Effect {
    constructor(canvasWidth, canvasHeight){
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight
        this.fontSize =25;
        this.columns = this.columnWidth/this.fontSize;
        this.symbols = [];
    }
    #initialize(){
        for (let i = 0; i < this.colums.length; i++){
            this.symbols[i] = new Symbol();
        }
    }
}

function animate(){

}
