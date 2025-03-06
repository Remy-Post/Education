const A = Array();

for (i = 1; i < 5; i++)
    A.push(document.querySelector(`body nav a:nth-of-type(${i})`));

A.forEach(candy => {
    candy.addEventListener('click', function(e){
        e.preventDefault();
        for (let i = 0; i < A.length;i++)
        {
            if (A[i] === this)
                document.querySelector(`body main > section:nth-of-type(${A.indexOf(this)+1})`).style.display = 'grid';
            else
                document.querySelector(`body main > section:nth-of-type(${i+1})`).style.display = 'none';
        }
    })
});