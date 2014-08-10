var r = [];

while(r.length < 10)
{
	var a = Math.floor((Math.random() * 1000) + 1);
    
    if(a > 99){
    	var b = Math.floor((Math.random() * 100) + 1);
        
        if(b > 9 && a % b == 0){
        	document.write(r.length +1, ')  ', a, ' / ', b, ' = ', a/b, '<br/>');
            r.push(a);
        }
    }
}
