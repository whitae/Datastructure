// TODO 树中的节点
class Node {
    key = undefined;
    left = null;
    right = null;
    constructor(key) {
        this.key = key;
    }
}
class BinarySearchTree {
    root = null;
    // TODO 插入操作
    insert(key) {
        let newnode = new Node(key);
        if (this.root == null) {
            // 这里是没有根节点
            this.root = newnode;
        } else {
            this._insert(this.root, newnode);
        }
    }
    // TODO 递归插入 
    _insert(node, newnode) {
        if (newnode.key < node.key) {
            // 向左查找
            if (node.left == null) {
                node.left = newnode;
            } else {
                this._insert(node.left, newnode);
            }
        } else {
            // 向右查找
            if (node.right == null) {
                node.right = newnode;
            } else {
                this._insert(node.right, newnode);
            }
        }
    }
    // TODO 先序遍历
    preOrderTraversal(node = this.root) {
        if (node != null) {
            console.log(node.key);
            // 向下遍历左子节点
            this.preOrderTraversal(node.left);
            // 向下遍历右子节点
            this.preOrderTraversal(node.right);
        }
    }
    // TODO 中序遍历
    midOrderTraversal(node = this.root) {
        if (node != null) {
            // 中序遍历左子节点
            this.midOrderTraversal(node.left);
            console.log(node.key);
            // 中序遍历右子节点
            this.midOrderTraversal(node.right);
        }
    }
    // TODO 后序遍历
    postOrderTraversal(node = this.root) {
        if (node != null) {
            // 后序遍历左子节点
            this.postOrderTraversal(node.left);
            // 后序遍历右子节点
            this.postOrderTraversal(node.right);
            console.log(node.key);
        }
    }
    // TODO 寻找最大值
    max() {
        let node = this.root;
        let key = null;
        while (node != null) {
            key = node.key;
            node = node.right;
        }
        return key;
    }
    // TODO 寻找最小值
    min() {
        let node = this.root;
        let key = null;
        while (node != null) {
            key = node.key;
            node = node.left;
        }
        return key;
    }
    // TODO 搜索一个特定的值
    search(node = this.root, key) {
        // 判断当前搜索的节点是否为null
        if (node == null) {
            return false;
        }
        // 比较节点中的key
        if (node.key > key) {
            return this.search(node.left, key);
        } else if (node.key < key) {
            return this.search(node.right, key);
        } else {
            return true;
        }
    }
    // TODO 删除节点
    remove(key) {
        // 寻找要删除的节点
        let current = this.root;
        let parent = null;
        let isLeft = true;
        // 不停的循环向下查找
        while(current.key != key){
            parent = current;
            if(key < current.key){
                isLeft = true;
                current = current.left;
            }else {
                isLeft = false;
                current = current.right;
            }
            // 如果到最后都没找到要删除的就直接返回false
            if(current == null) return false;
        }

        // 如果找到就进行删除操作
    }
}
let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(1);
bst.insert(100);
bst.insert(99);
bst.insert(999);
bst.preOrderTraversal();
bst.midOrderTraversal();
bst.postOrderTraversal();
console.log(bst.max());
console.log(bst.min());
console.log(bst.search(99));