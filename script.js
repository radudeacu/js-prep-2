// Are these functions gonna return the same thing? NO | parser adds semicolon

function foo1() 
{
    return {
        bar: "hello"
    };
}

function foo2()
{
    return
    {
        bar: "hello"
    };
}

