let slides=[
 'https://via.placeholder.com/900x300',
 'https://via.placeholder.com/900x300/ff0000',
 'https://via.placeholder.com/900x300/0000ff'
];
let i=0;
setInterval(()=>{
 document.getElementById('slide').src=slides[i];
 i=(i+1)%slides.length;
},3000);