const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var gamestate = 0;
var story;
var front, game;
var enter = 0;

function setup(){
    createCanvas(displayWidth, displayHeight -113);
    front = new Front();
    front.display();
    game = new Game();
    
}

function draw(){
    background(255);
    if(enter == 1){
        game.start();
    }
}