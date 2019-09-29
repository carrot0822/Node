var tools = {
    /**
     * 累加函数 无论传多少参数都会结构为一个数组
     */
    add:(...numbers) =>{
        let sum = 0;
        for(let number in numbers){
            sum += numbers[number]
        }
        return sum
    }
}
// 
module.exports = tools