


const sum=require('./index')

describe("Testing the sum function",()=>{

    test("Add 2 positive number",()=>{
        expect(sum(1,2)).toBe(3)
    })

    test("Add 2 negative number",()=>{
        expect(sum(-1,-2)).toBe(-3)
    })

    test("Add 2 floating number",()=>{
        expect(sum(1.3,2.3)).toBe(3.6)
    })

    test("Add 2 floating number where output is an integer",()=>{
        expect(sum(1.5,1.5)).toBe(3)
    })

    test("Add 2 floating number as string and output is an integer",()=>{
        expect(sum("1.5","1.5")).toBe(3)
    })

    test("Call the sum with no argument",()=>{
        expect(sum()).toBe("sum function without argument")
    })

    test("Call the sum with only 1 argument",()=>{
        expect(sum(1)).toBe("sum function needs atleast 2 argument")
    })

    test("Add 3 numbers",()=>{
        expect(sum(1,2,3)).toBe(6)
    })
    
    test("Add 4 numbers",()=>{
        expect(sum(1,2,3,4)).toBe(10)
    })

    // test("",()=>{})
   
})