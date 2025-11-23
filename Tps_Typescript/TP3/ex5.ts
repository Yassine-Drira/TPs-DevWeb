function add (a: number ,b:number ):number 
{
    return a+b ;
}
function greet(name:string , age?:number ):string 
{
    if(age)
        console.log('Bonjour '+name);
    
    else
        console.log('il faut inérez votre age ');
    return name +' a '+age+' ans';
    }
    greet('Yassine',22);
    greet(' Zouhair');

    function power(base:number , exp:number=2):number{
        return base**exp;
    }
    function combine (a:number | string, b:number|string): number|string
    {
        if(typeof a ==='number' && typeof b ==='number')
            return a+b; 
        if (typeof a === 'string' && typeof b === 'string')
           return a+b;
        throw new Error('Invalid arguments');
  }