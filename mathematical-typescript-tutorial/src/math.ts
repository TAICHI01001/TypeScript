class MyClass {
    private name: string
    constructor(n: string) {
        this.setName(this.name = n,this.name);
    }

    public setName(n:string,m:string):void{
        this.name = n;
    }
    public showName():void{
        console.log(this.name);
    }

}

const myClass = new MyClass("TaiChi")
// myClass.setName("TaiChi2")
myClass.showName()
