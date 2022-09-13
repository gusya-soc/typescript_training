class TreeNode{
    data:number;
    left:TreeNode;
    right:TreeNode;
    constructor(data:number){
        this.data = data;
        this.left = null;
        this.right = null;
    }
    show(){
        return `data:${this.data}\nleft:${this.left.data}\nright:${this.right.data}\n`;
    }
}


// let root = new TreeNode(0);
// let testNode1 = new TreeNode(1);
// let testNode2 = new TreeNode(2);
// let testNode3 = new TreeNode(3);
// let testNode4 = new TreeNode(4);
// let testNode5 = new TreeNode(5);

// root.left = testNode1;
// root.right = testNode2;
// testNode1.left = testNode3;
// testNode1.right = testNode4;
// testNode2.left = testNode5;

// console.log(root.show())
// console.log(root)
class BinarySearchTree{
    root:TreeNode;
    constructor(){
        this.root = null;
    }
    private search(data:number){
        let parent = null;
        let node = this.root;
        while(node && node.data != data){
            parent = node;
            if(data < node.data){
                node = node.left;
            }else{
                node = node.right;
            }
        }
        return {node,parent};
    }

    insert(data:number){
        let {node,parent} = this.search(data);
        if(node){
            return false;
        };
        node = new TreeNode(data);
        if(parent == null){
            this.root = node;
        }else if(data < parent.data){
            parent.left = node;
        }else{
            parent.right = node;
        }
    }

    remove(data:number){
        let {node,parent} = this.search(data);
        if(node&&parent){
            if(parent.left == node){
                parent.left = null;
            }else{
                parent.right = null;
            }
        }
    }
    show(){
        return this.root;
    }
}

let tree = new BinarySearchTree();
tree.insert(1);
tree.insert(2);
tree.insert(3);
console.log(tree.show())