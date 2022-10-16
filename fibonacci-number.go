package main
import "fmt"

var memo = make(map[int]int)

func fib(num int,ttl int){
	if num>ttl{
		return
	}
	if num==1 || num==2{
		memo[num]=1
		fmt.Println(1)
	} else {
		ans := memo[num-1]+memo[num-2]
		memo[num] = ans 
		fmt.Println(ans)
	}
	fib(num+1,ttl)
}

func main(){
	var ttl int
	fmt.Print("Enter a number: ")
	fmt.Scan(&ttl)
	fmt.Println()
	fib(1,ttl)
}
