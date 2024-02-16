"use strict";
//! Structure process and How to CRUD Link_list
class LinkList {
    //? Declaration variable head as Node or null
    head;
    //* Default constructor define head is null
    constructor() {
        this.head = null;
    }
    //+ Use method build-in function append to add data fill generic type T
    append(data) {
        //TODO Declare variable newNodes to keep data When am I input and define variable next equal to null
        const newNodes = {
            data, next: null
        };
        //* Checking variable it have data but it don't have variable newNodes equal variable head
        if (!this.head) {
            this.head = newNodes;
            return;
        }
        let current = this.head; //+ Create Variable current define equal variable head 
        //! checking current variable is null or undefined ?
        while (current.next) {
            current = current.next; //? but next Node isn't null define variable current equal current
        }
        //+ And this to define terminate equal newNode to creating
        current.next = newNodes;
    }
    display() {
        let current = this.head;
        while (current) {
            console.log(`${current.data}`);
            current = current.next;
        }
    }
}
const linkedList = new LinkList();
linkedList.append(5);
linkedList.append(8);
linkedList.append(1);
linkedList.display();
