class List{
    array = []
    constructor() {}
    append(data){
        array.push(data);
    }
    shift(data){
        return array.shift(data);
    }
    length(){
        return array.length;
    }
}

class Stack{
    array = [];
    constructor(){}
    push(data){
        array.push(data);
    }
    pop(){
        return array.pop();
    }
    length(){
        return array.length;
    }
    top(){
        return array[array.length - 1];
    }
}