var r = [];

while(r.length < 1000)
{
	var a = getRandomInt(100,1000);
    
    	var b = getRandomInt(10,100)
        var key = a+','+b;
        if(a % b == 0 && r.indexOf(key)){
        	document.write(r.length +1, ')  ', a, ' / ', b, ' = ', a/b, '<br/>');
        	r.push(key);
        }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
