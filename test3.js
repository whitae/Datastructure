class Node{
    key = undefined;
    left = null;
    right = null;
    constructor(key){
        this.key = key;
    }
}
class BinarySearchTree{
    root = null;
    insert(key){
        let newnode = new Node(key);
        if(this.root == null){
            this.root = newnode;
        }else{
            
        }
    }
}