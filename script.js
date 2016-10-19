TinyTurtle.apply(window);

function square(x){
forward(x);
right(90);
forward(x);
right(90);
forward(x);
right(90);
forward(x);
right(90);
forward(x);
}
function triangle(){
    forward (50);
    right (120);
    forward (50);
    right(120);
    forward(50);
}

function shape(size, angle)
{
    forward(size);
    right(angle);
    forward(size);
    right(angle);
    forward(size)    
    right(angle);
    forward(size);
    right(angle);
}
// Type your function call below
shape(50,120);

stamp();
