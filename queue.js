class queue {
    constructor() {
        this.items = [];
        this.size = 5;
        this.head = 0;
        this.tail = this.items.length - 1;
    }
    print() {
        console.log(this.items);
    }
    push(element) {

        this.items[this.items.length] = element;
    }
    shift() {
        if (this.items.length == 1) {
            console.log("one element is required");
        }
        else {
            for (let i = 0; i < this.items.length - 1; i++) {
                this.items[i] = this.items[i + 1];
            }
            this.items.length = this.items.length - 1
        }
    }
    peek(index) {
        if (this.items.length == 1) {
            console.log("one element is required");
        }
        else {
            var j = 0;
            for (var i = 0; i < this.items.length; i++) {
                if (this.items[i] !== index) {
                    this.items[j++] = this.items[i];
                }
            }
            this.items.length = j;
        }
    }
}
const data = new queue();

data.push(3)
data.push(6)
data.push(9)
data.push(12)
data.push(15)

data.shift()         
data.shift()         

data.print()


























