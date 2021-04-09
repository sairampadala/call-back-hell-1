let count=document.createElement('div');
 count.style.fontSize='50px';
 count.style.margin='50px 50%';
 count.style.textAlign='center';
 count.style.color='blue';
 count.innerHTML=10;

 setTimeout(()=>{
    count.innerHTML=9;
    setTimeout(()=>{
        count.innerHTML=8;
        setTimeout(()=>{
            count.innerHTML=7;
            setTimeout(()=>{
                count.innerHTML=6;
                setTimeout(()=>{
                    count.innerHTML=5;
                    setTimeout(()=>{
                        count.innerHTML=4;
                        setTimeout(()=>{
                            count.innerHTML=3;
                            setTimeout(()=>{
                                count.innerHTML=2;
                                setTimeout(()=>{
                                    count.innerHTML=1;
                                    setTimeout(()=>{
                                        count.innerHTML="happy independence day"

 },1000);
},1000);
},1000);
},1000);
},1000);
},1000);
},1000);
},1000);
},1000);
},1000);
document.body.append(count);
