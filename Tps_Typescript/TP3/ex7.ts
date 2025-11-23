function identity <T>(value:T):T{
    return value;
}
function getFirst<T>(arr:T[]):T{
    return arr[0];
}
class Reposository<T>
{   private items:T[]=[];
    add(value:T):void{
        this.items.push(value);
        console.log('Added:',value);
    }
    remove(value:T):void{
        const index=this.items.indexOf(value);
        if(index>-1)
        {
            this.items.splice(index,1);
            console.log('Removed:',value);
        }
}
getAll():T[]{
    return this.items;  
}
}
interface ApiRepository<T>
{
    data:Text;
    error?:string;
}
