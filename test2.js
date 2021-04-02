// 封装hash函数
class hashTable {
    Storage = [];
    count = 0;
    limit = 7;
    hashCode(str, size) {
        var hashCode = 0;
        for (let i = 0; i < str.length; i++) {
            hashCode = 37 * hashCode + str.charCodeAt(i);
        }
        let index = hashCode % size;
        return index;
    }
}