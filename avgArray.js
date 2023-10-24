function avgArray(arr)
{
    let l = arr.length
    if (l<=0)
    {
        console.log(0)
    }
    else
    {
        let sum = 0
        for (let i = 0; i<l; i++)
        {
            sum += arr[i]
        }
    
        let avg = Math.floor(sum/l)
    
        console.log(avg)
    }
}

avgArray([4,5,6,7,8,10])