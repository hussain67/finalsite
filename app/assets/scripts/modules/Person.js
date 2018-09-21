class Person{
    constructor(fullName, favColor){
        this.name = fullName,
        this.favourateColor = favColor
        }
        greet(){
            console.log(`BisMillah  Alhamdulillah${this.name}:${this.favourateColor}`)
      }   
    
}
//module.exports = Person;
export default Person;