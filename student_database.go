package main
import "fmt"

type student struct {
	id int
	name string
	age int
	class int
	percenrage int
}
var ttl = 1
var db = make(map[int]student)
var exit bool = false

func prompt(){
	fmt.Printf("\n0. Exit\n1. Add student\n2. Delete student\n3. Show DB\n\nEnter your choice: ")
	choice := 0
	fmt.Scan(&choice)
	fmt.Println()
	if choice==0{
		exit = true
		return
	}else if choice==2 {
		fmt.Print("Enter student id: ")
		id:=0
		fmt.Scan(&id)
		st := db[id]
		delete(db,id)
		fmt.Printf("\nDeleted successfully!\n")
		fmt.Println(st)
	} else if choice==1 {
		var (
			name string
			class int
			marks int
			age int
		)
		fmt.Print("\nEnter student name: ")
		fmt.Scanln(&name)
		fmt.Print("Enter student age: ")
		fmt.Scan(&age)
		fmt.Print("Enter student class: ")
		fmt.Scan(&class)
		fmt.Print("Enter student marks: ")
		fmt.Scan(&marks)
		a:=student{ttl,name,age,class,marks}
		db[ttl]=a
		fmt.Printf("\nData added successfully!\n")
		fmt.Println(db[ttl])
		ttl+=1
	} else if choice==3{
		printdb()
	}
}

func printdb(){
	for _,val := range db{
		fmt.Println(val)
	}
}

func main(){
	for !exit{
		prompt()
	}
}
