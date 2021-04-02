// TODO 实现一个Hash表
class hashTable {
    // TODO 存储散列表的数组
    storage = [];
    // TODO 存储元素总数
    count = 0;
    // TODO 数组的长度
    limit = 7;
    // TODO hash函数，将字符串的key转换为数字，然后取余获取index
    hashCode(str, size) {
        var hashCode = 0;
        for (let i = 0; i < str.length; i++) {
            hashCode = 37 * hashCode + str.charCodeAt(i);
        }
        let index = hashCode % size;
        return index;
    }
    // TODO 放入一个元素
    put(key, value) {
        // 根据key获取对应的index
        let index = this.hashCode(key, this.limit);
        // 根据index去取对应的bucket
        let bucket = this.storage[index];
        //如果为空，就添加进去一个桶
        if (bucket == null) {
            bucket = []
            this.storage[index] = bucket;
        }
        // 判断是否要修改数据
        for (let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i];
            if (tuple[0] == key) {
                tuple[1] = value;
                // 修改过后直接返回
                return;
            }
        }
        // 不修改，直接添加数据
        bucket.push([key, value]);
        this.count += 1;
        // TODO 判断是否需要扩容
        if (this.count > this.limit * 0.75) {
            this.resize(this.getPrime(this.limit * 2));
        }
    }
    // TODO 根据key获取元素
    get(key) {
        // 根据key获取对应的index
        let index = this.hashCode(key, this.limit);
        // 根据index获取对应的bucket
        let bucket = this.storage[index];
        // 如果没有桶就直接返回null
        if (bucket == null) {
            return null;
        }
        // 有bucket，那么就进行线性查找
        for (let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i];
            if (tuple[0] == key) {
                return tuple[1];
            }
        }
        // 依旧没有找到
        return null;
    }
    // TODO 根据key删除一个元素
    remove() {
        // 获取index
        let index = this.hashCode(key, this.limit);
        // 获取桶
        let bucket = this.storage[index];
        // 判断桶是否为空
        if (bucket == null) return null;
        // 如果有bucket就进行线性查找，然后删除
        for (let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i];
            if (tuple[0] == key) {
                bucket.splice(i, 1)
                this.count -= 1;
                return tuple[1]
            }
        }
        // TODO每一次删除内容后都判断一下是否需要缩容
        if (this.limit > 7 && this.count < this.limit * 0.25) {

            this.resize(this.getPrime(Math.floor(this.limit / 2)));
        }
        // 如果桶里没有元素，就返回null
        return null;
    }
    // TODO 判断hash表是否为空
    isEmpty() {
        return this.count == 0;
    }
    // TODO hash表的尺寸
    size() {
        return this.count;
    }
    // TODO  改变hash表的容量
    resize() {
        // 保存旧的数组内容
        let oldstorage = this.storage;
        // 重置所有属性
        this.storage = [];
        this.count = 0;
        this.limit = newLimit;
        // 遍历oldstorage中所有的bucket
        for (let i = 0; i < oldstorage.length; i++) {
            // 取出对应的bucket
            let bucket = oldstorage[i];
            // 判断bucket是否为null;
            if (bucket == null) {
                continue;
            }
            for (let i = 0; i < bucket.length; i++) {
                let tulpe = bucket[i];
                this.put(tulpe[0], tulpe[1])
            }
        }
    }
    // TODO 判断是否为一个质数
    isPrime() {
        let temp = parseInt(Math.sqrt(num));
        for (let i = 0; i <= temp; i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;
    }
    // TODO 获取质数
    getPrime(num) {
        while (!this.isPrime(num)) {
            num += 1;
        }
        return num;
    }
}

// 测试
let table = new hashTable();
table.put('name', 'Tom');
table.put('age', 18);
console.log(table.storage);