let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
secretMessage.pop();//remove last element
console.log(secretMessage.length);//length
secretMessage.push('to','Program');//add elements to end of array
secretMessage[7]='right';//replace element
secretMessage.shift();//remove first element
secretMessage.unshift('Programming');//add first element
console.log(secretMessage.join(' '));//turn array into a sentence
