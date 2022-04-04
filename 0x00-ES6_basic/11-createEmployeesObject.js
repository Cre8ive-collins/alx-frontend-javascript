export default function createEmployeesObject(departmentName, employees) {
    let e = []
    console.log(departmentName)
    for (let i of employees){
        e.push(i)
    }
    return { [departmentName] : e }
}
