
const suma =require("./suma")

test("adds 1 + 2 to equal 3", ()=>{
    const result = suma(1,2);
    expect (result).toBe(3);
} )