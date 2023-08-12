
const fib = (num: number, memo: Record<number, number>) : number => {
    memo = memo || {}
    if (memo[num]) return memo[num]
    if (num <= 1) return memo[num] = num
    return memo[num] = fib(num - 1, memo) + fib(num - 2, memo)
}
const memo = {}
const result = fib(10, memo)

console.log(memo)