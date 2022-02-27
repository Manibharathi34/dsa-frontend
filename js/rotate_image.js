
var rotate = function(matrix) {
    let len = matrix[0].length;
    console.table(matrix);
    let left =0, right=len-1;
    while(left<right){
        for(let i=0; i<(right-left); i++) {
            let top =left, bottom = right;
            let tmp = matrix[top][left+i];
            matrix[top][left+i] =matrix[bottom-i][left];
            matrix[bottom-i][left] = matrix[bottom][right-i];
            matrix[bottom][right-i] = matrix[top+i][right];
            matrix[top+i][right] = tmp;
        }
        left++;
        right--;
    }
    console.table(matrix);
};

rotate([[1,2,3],[4,5,6],[7,8,9]]);