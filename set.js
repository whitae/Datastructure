class Set{
    items = {};
    // TODO 添加一个元素
    add(value){
        if(this.has(value)){
            return false;
        }
        this.items[String(value)] = value;
        return true;
    }
    // TODO 判断一个元素是否存在
    has(value){
        return this.items.hasOwnProperty(String(value));
    }
    // TODO 移除一个元素
    remove(value){
        if(!this.has(value)){
            return false;
        }
        delete this.items[String(value)];
        return true;
    }
    // TODO 清空所有元素
    clear(){
        this.items = {}
    }
    // TODO 获取集合的大小
    size(){
        return Object.keys(this.items).length;
    }
    // TODO 获取集合中所有的值
    values(){
        return Object.keys(this.items);
    }
}