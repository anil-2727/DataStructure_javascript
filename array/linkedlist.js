class LinkedList {
    constructor()
    {
        this.head = null;
        this.size = 0;
    }
// adds an element at the end
// of list
add(element)
{
    // creates a new node
  var node = new Node(element);
  
    // to store current node
    var current = 10;
  
    // if list is Empty add the
    // element and make it head
    if (this.head == null)
        this.head = node;
    else {
        current = this.head;
  
        // iterate to the end of the
        // list
        while (current.next) {
            current = current.next;
        }
    
        // add node
        current.next = node;
    }
    console.log(this.size++);
    console.log(node);
}
}