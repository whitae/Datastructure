// 手写链表

class listitem {
    // TODO 数据部分
    data = undefined;
    // TODO 指向下一个节点指针
    next = null;
    constructor(data) {
        this.data = data;
    }
}
class LinkList {
    head = null;
    length = 0;
    append(data) {
        let item = new listitem(data);
        if (this.length == 0) {
            // TODO是第一个节点
            this.head = item;
        } else {
            // TODO不是第一个节点
            let current = this.head;
            // TODO要找到最后一个节点
            while (current.next != null) {
                current = current.next;
            }
            current.next = item;
        }
        // TODO 总长度加一
        this.length += 1;
    }
    insert(position, data) {
        // TODO 判断位置是否合法
        if (position < 0 || position > this.length) {
            return false;
        }
        let item = new listitem(data);
        if (position == 0) {
            // TODO 如果在第一个位置插入
            item.next = this.head;
            this.head = item;
        } else {
            // TODO 如果在其他位置插入
            // TODO 其他位置插入需要两个指针
            let current = this.head;
            let previous = null;
            for (let i = 0; i < position; i++) {
                previous = current;
                current = current.next;
            }
            item.next = current;
            previous.next = item;
        }
        this.length += 1;
        return true;
    }
    toString() {
        let current = this.head;
        let ls = '';
        while (current != null) {
            ls += current.data + " ";
            current = current.next;
        }
        return ls;
    }
    get(position) {
        // TODO 一个用来遍历的指针
        let current = this.head;
        // TODO 判断位置是否合法
        if (position < 0 || position > this.length - 1){
            return false;
        }
        // TODO 移动指针到指定位置
        for (let i = 0; i < position; i++) {
            current = current.next;
        }
        return current.data;
    }
    indexOf(data) {
        // TODO 一个用来遍历的引用
        let current = this.head;
        let index = 0;
        // TODO 从头到尾查找，找到了就直接返回
        while (current != null) {
            index += 1;
            if (current.data == data) {
                return index;
            }
            current = current.next;
        }
        return -1;
    }
    remove(position) {
        // TODO 用来遍历的指针
        let current = this.head;
        // TODO 移除元素需要两个指针
        let previous = null;
        // TODO 判断位置是否合法
        if (position < 0 || position > this.length) {
            return false;
        }
        // TODO 移动指针到特定位置
        for (let i = 0; i < position; i++){
            previous = current;
            current = current.next;
        }
        previous.next = current.next;
        this.length -= 1;
        return true;
    }
    reverse(){
        // TODO 反转需要三个引用
        let p = this.head; //previous
        let c = p.next; //current
        let n = null; //next
        while (c!=null){
            n = c.next;
            c.next = p;
            p = c;
            c = n;
        }
        // TODO 收尾工作
        this.head.next = null;
        // TODO 重定向头指针
        this.head = p;
    }
}

let mylist = new LinkList();
mylist.append(10);
mylist.append(11);
mylist.append(12);
mylist.insert(1, 100);
mylist.insert(4, 100);
console.log(mylist.toString());
mylist.reverse();
console.log(mylist.toString());