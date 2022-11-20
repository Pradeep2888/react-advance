

describe("toBe or not.toBe",()=>{

    test("3 is 3",()=>{
        expect(3).toBe(3)
    })

    test("Boolean Value",()=>{
        expect(true).toBe(true)
        expect(false).toBe(false)
        expect(true).not.toBe(false)
    })

})

describe("Tests for reference date type",()=>{

    test("{}!=={}",()=>{
        expect({}).not.toBe({})
    })

    test("[]!==[]",()=>{
        expect([]).not.toBe([])
    })

    test("Object a === Object b",()=>{
        let a={}
        expect(a).toBe(a)
    })

    

})


describe("toEqual or deepEqual",()=>{

    test("[] is equal []",()=>{
        expect([]).toEqual([])
    })
    
    test("[1,2,3] is equal [1,2,3]",()=>{
        expect([1,2,3]).toEqual([1,2,3])
    })
    
    test("[1,2,[3,4]] is equal [1,2,[3,4]]",()=>{
        expect([1,2,[3,4]]).toEqual([1,2,[3,4]])
    })
    
    
    test("nested array",()=>{
        let a=[1,2,3]
        let b=[a,a]
        let c=[[1,2,3],a]
        expect(b).toEqual(c)
    })

})


describe("test relational operaters",()=>{

    test("100+100<=200",()=>{
        expect(100+100).toBeLessThanOrEqual(200)
    })
    
    test("100+100<200",()=>{
        expect(100+100).toBeLessThan(201)
    })
    
    test("100+100<=200",()=>{
        expect(100+100).toBeGreaterThanOrEqual(200)
    })

})