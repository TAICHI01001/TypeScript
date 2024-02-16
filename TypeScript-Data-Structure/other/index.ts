// //+ Declare type of Node What the keep data in Node
// interface Nodes<T> {
//     data: T;
//     next: Nodes<T> | null;
// }

// //! Structure process and How to CRUD Link_list
// class LinkList<T> {

//     //? Declaration variable head as Node or null
//     head: Nodes<T> | null;

//     //* Default constructor define head is null
//     constructor() {
//         this.head = null;
//     }
//     //+ Use method build-in function append to add data fill generic type T

//     append(data: T): void {  //! When am I adding data finished 
        
//         //TODO Declare variable newNodes to keep data When am I input and define variable next equal to null
//         const newNodes: Nodes<T> = {
//             data, next: null
//         }

//         //* Checking variable it have data but it don't have variable newNodes equal variable head
//         if (!this.head) {
//             this.head = newNodes;
//             return;
//         }

//         let current: Nodes<T> = this.head; //+ Create Variable current define equal variable head 

//         //! checking current variable is null or undefined ?
//         while (current.next) {
//             current = current.next; //? but next Node isn't null define variable current equal current
//         }
//         //+ And this to define terminate equal newNode to creating
//         current.next = newNodes;
//     }
//     display(): void {
//         let current: Nodes<T> | null = this.head;

//         while (current) {
//             console.log(`${current.data}`);
//             current = current.next;

//         }
//     }
// }

// const linkedList = new LinkList<number>();

// linkedList.append(5);
// linkedList.append(8);
// linkedList.append(1);

// linkedList.display();