function implement(){ 
    let time = new Date()
    let h = time.getHours()
    let m = time.getMinutes()
    let s = time.getSeconds()
    console.log(s)
    ttb(s,"4")
    ttb(m,"2")
    ttb(h,"0")
    setTimeout(implement, 1000)
}


function ttb(p, col) // column
{
   let m = p % 10
   let n = Math.floor(p / 10)
   //n first row, m second
   //console.log(n + " " + m)
   change_column(n,col)
   let s = parseInt(col)
   s=s+1
   s = s.toString()
   change_column(m, s)
}

function change_column(n, col)
{

    if(n==1)
   {
       change_color("dot","3" + col)
   }
   else if (n==2)
   {
       change_color("dot","2" + col)
       no_color("dot", "3" + col)
   }
   else if (n==3)
   {
       change_color("dot","2" + col)
       change_color("dot","3" + col)
   }
   else if (n==4)
   {
       change_color("dot","1" + col)
       no_color("dot","2" + col)
       no_color("dot","3" + col)
   }
   else if (n==5)
   {
       change_color("dot","1" + col)
       change_color("dot","3" + col)
   }
   else if (n==6)
   {
       change_color("dot","1" + col)
       change_color("dot","2" + col)
       no_color("dot", "3" + col)
   }
   else if (n==7)
   {
       change_color("dot","1" + col)
       change_color("dot","2" + col)
       change_color("dot","3" + col)
   }
   else if (n==8)
   {
       change_color("dot","0" + col)
       no_color("dot","1" + col)
       no_color("dot","2" + col)
       no_color("dot","3" + col)

   }
   else if (n==9)
   {
       change_color("dot","0" + col)
       change_color("dot","3" + col)
   }
   else 
   {
       //console.log("no exec")
       let r = 0
       while (r<4)
       {
           no_color("dot",r.toString()+col)
           r++
       }
   }
}
function initialize_clock()
{
    for(let i = 0; i<6; i++)
    {
        for (let j = 0; j<6; j++)
        {
            let s = i.toString() + j.toString()
            if ((s=="40") || (s=="50"))
            {
                break
            }
            no_color("dot",s)
            //console.log(s)  
        }
    }
}

function change_color(elementString, row) {
    var color = "#000000"
    var el  = document.getElementsByClassName(elementString+row)
    el[0].style.backgroundColor = color 
}

function no_color(elementString, row) {
    var color = "#999695"
    var el  = document.getElementsByClassName(elementString+row)
    el[0].style.backgroundColor = color 
}

implement()