class Personne
{
    private name:string;
    private age:number=0;
    constructor(name:string, age?:number)
    {
        this.name=name; 
        if (age)
            this.age=age;   
    }
    public greet=():void=>{
        if(age)
        {
            console.log(`Bonjour, je m'appelle ${this.name} et j'ai ${this.age} ans.`);
        }
        else
        {
            console.log(`Bonjour, je m'appelle ${this.name}.`);
        }
}
}
class Student  extends Personne
{
    private school:string;
    constructor(name:string,age:number,school:string)
    {
        super(name,age);
        this.school=school;
    }
    }
    abstract class Shape
    {
        abstract area():number;
    }
    class Circle extends Shape
    {
        private raduis:number;
        constructor(raduis:number)
        {
            super();
            this.raduis=raduis;
        }
        area():number
        {
            return Math.PI*this.raduis**2;
        }
    }
    class Rectangle extends Shape
    {
        private width:number;           
        private height:number;
        constructor(width:number,height:number)
        {
            super();
            this.width=width;
            this.height=height;
        }
        area():number
        {
            return this.width*this.height;
        }
    }
    interface Drivable
    {
        drive():void;
    }
    class Car implements Drivable 
    {
        drive(): void {
            console.log("The car is driving..vrmmm..");
        }
    }