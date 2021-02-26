const findIntersection = function(strArr){

    /* YOUR CODE HERE */
    let arr1 = strArr[0].split(", ")
    let arr2 = strArr[1].split(", ")

    let intersectionArr = arr1.filter(n=> {
        if(arr2.includes(n)){
            return  true
        }
        return false
    })

    if(intersectionArr.length == 0) return 'false'

    return intersectionArr.join(",")

}

module.exports = findIntersection
