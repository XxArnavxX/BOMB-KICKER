class Game{
    constructor(){
        this.message = createElement('h2');
    }
    
    start(){
        var timer = 30;
        while(timer > 0){
            timer = timer - 1;
            this.message.html("timer: " + timer);
            this.message.position(displayWidth - 200, displayHeight - 200);
            console.log("hello");
        }
    }

    play(){

    }
}