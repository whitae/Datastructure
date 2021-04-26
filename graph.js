class graph {
    vertexes = []//顶点
    edges = new Map()//边

    // 添加顶点的方法
    addVertex(v) {
        this.vertexes.push(v);
        this.edges.set(v, []);
    }
    // 添加边的方法
    addEdge(v1, v2) {
        this.edges.get(v1).push(v2);
        this.edges.get(v2).push(v1);
    }
    //toString方法
    toString(){
        let resultString = '';
        for (let i = 0; i < this.vertexes.length; i++) {
            resultString += this.vertexes[i] + '->';
            let vEdges = this.edges.get(this.vertexes[i])
            for (let j = 0; j < vEdges.length; j++) {
                resultString += vEdges[j] + ' '
            }
            resultString += '\n';
        }
        return resultString;
    }
    //初始化状态颜色
    initializeColor(){
        let colors = [];
        for(let i = 0; i < this.vertexes.length; i++){
            colors[vertexes[i]] = 'white';
        }
        return colors;
    }

    // 广度优先搜索BFS
    bfs(firstV, handler){
        // 初始化颜色
        let colors = this.initializeColor();
        // 创建队列
        let queue = [];
        // 将顶点加入队列中
        queue.push(firstV);
        // 循环从队列中取出元素
        while(queue.length!=0){
            // 从队首取出一个顶点
            let v = queue.shift();
            // 获取和顶点相连的其他顶点
            let vlist = this.edges.get(v);
            // 将v的颜色设置为灰色
            colors[v] = 'gray';
            // 遍历所有的顶点，并且加入到队列中
            for (let i = 0; i < vlist.length; i++) {
                let e = vlist[i];
                if (colors[e] == 'white') {
                    colors[e] = 'gray';
                    queue.push(e);
                }
            }
            // 访问节点
            handler(v)
            // 将顶点设置为黑色
            colors[v] = 'black';
        }
    }

    // 深度优先搜索
    dfs(firstV, handler){
        // 初始化颜色
        let colors = this.initializeColor()
        // 从某个顶点开始依次递归访问
        this.dfsVisit(firstV, colors, handler);
    }
    // 递归函数
    dfsVisit(v, colors, handler){
        // 将颜色设置为灰色
        colors[v] = 'gray';
        // 处理v顶点
        handler(v);
        // 访问v相连的顶点
        let vList = this.edges.get(v)
        for(let v of vList){
            if(colors[v] == 'white'){
                this.dfsVisit(v, colors, handler);
            }
        }
        // 将v设置为黑色
        colors[v] = 'black';
    }
}

// 新建图
let g = new graph();
// 添加顶点
let vertexes = ["A", "B", "C", "D", "E"]
for (let i = 0; i < vertexes.length; i++) {
    g.addVertex(vertexes[i]);
}
// 添加边
g.addEdge('A', 'B');
g.addEdge('A', 'C');     
g.addEdge('A', 'D');
g.addEdge('A', 'E');
// toString方法
console.log(g.toString());
// BFS
g.bfs(g.vertexes[0],(v)=>{
    console.log(v);
});
// DFS
g.dfs(g.vertexes[0],(v)=>{
    console.log(v);
});