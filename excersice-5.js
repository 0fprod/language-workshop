// El objevo de este ejercicio es crear una máquina traga perras ulizando clases donde cada vez que juguemos insertemos una moneda.
// Cada máquina tragaperras (instancia) tendrá un contador de monedas que automáticamente se irá incrementando conforme vayamos jugando.
// Cuando se llame al método play el número de monedas se debe incrementar de forma automática y debe generar tres booleanos aleatorios 
// que representarán el estado de las 3 ruletas. 
// El usuario habrá ganado en caso de que los tres booleanos sean true, y portanto deberá mostrarse por consola el mensaje:
// "Congratulations!!!. You won <número de monedas> coins!!"
// y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de lamáquina.
// En caso contrario deberá mostrar otro mensaje:
// "Good luck next time!!"
var SlothMachine = /** @class */ (function () {
    function SlothMachine() {
        this.accCoins = 0;
    }
    SlothMachine.prototype.play = function () {
        this.accCoins++;
        this.rouletteOne = !!Math.round(Math.random());
        this.rouletteTwo = !!Math.round(Math.random());
        this.rouletteThree = !!Math.round(Math.random());
        if (this.rouletteOne && this.rouletteTwo && this.rouletteThree) {
            console.log("Congratulations!!!. You won " + this.accCoins + " coins!!");
            this.accCoins = 0;
        }
        else {
            console.log("Good luck next time!!");
        }
    };
    return SlothMachine;
}());
var machine1 = new SlothMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"
