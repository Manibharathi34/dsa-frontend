

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {
    let right = matrix[0].length-1;
    let bottom = matrix.length-1;
    let top=0;
    let left =0;
    let elemCount = right*bottom;
    let count =0;
    let result =[];
    
    while(left<=right && top<=bottom) {
        
        for(let i=left; i<=right; i++) {
            result.push(matrix[top][i]);
            count++;
        }
        if(count==elemCount) break;
        top++;
        for(let i=top; i<=bottom;i++) {
            result.push(matrix[i][right]);
            count++;
        }
        if(count==elemCount) break;
        right--;
        for(let i=right;i>=left;i--){
            result.push(matrix[bottom][i]);
            count++;
        }
        if(count==elemCount) break;
        bottom--;
        for(let i=bottom;i>=top;i--) {
            result.push(matrix[i][left]);
            count++;
        }
        if(count==elemCount) break;
        left++;
    }
    return result;
};

spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]);