
function func(){
    const obj = Object.create(null)
    console.log(Object.getPrototypeOf(obj))
}
func()

