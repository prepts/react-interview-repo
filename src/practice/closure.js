//closure advantage with example

// 1. module design pattern

const authConfigure = () => {
    let user = {}
    function login() {
        console.log("login success")
        user = {id: 1, name: "thiru"}
    }
    function logout() {
        console.log("logout success")
        user = {}
    }
    function getUser() {
        return user
    }

    return {login, logout, getUser}
}

// const auth = authConfigure()
// console.log(auth.getUser())
// auth.login()
// console.log(auth.getUser())
// auth.logout()

// 2.currying

function add1 (a, b, c, d) {
    return a+b+c+d
}

function add(a) {
    return function (b) {
        if (b === undefined) return a
        return add(a+b)
    }
}

// console.log(add(1)(2)(3)(5)(9)())/

// 3.memoize

function factorial1(n) {
    console.log("factorial called!")
    let val = 1
    for(let i=1;i<=n;i++)
        val *= i
    return val
}

function factorial() {
    const memoize = {}
    return (n) => {
        if (!memoize[n]) {
            console.log("factorial called!")
            let val = 1
            for(let i=1;i<=n;i++)
                val *= i
            memoize[n] = val
        }
        return memoize[n]
    }
}

// const getFactorial = factorial()
// console.log(getFactorial(5))
// console.log(getFactorial(6))
// console.log(getFactorial(5))
// console.log("-----------------------------")
// const getFactorial2 = factorial()
// console.log(getFactorial2(5))
// console.log(getFactorial2(4))
// console.log(getFactorial2(4))/

// 4.private variable

function counter() {
    let count = 0
    function increment () {
        ++count
        return count
    }
    function decrement () {
        --count
        return count
    }
    function get () {
        return count
    }

    return {increment, decrement, get}
}

// const count = counter()
// console.log(count.increment())
// console.log(count.increment())
// console.log(count.increment())
// console.log(count.get())
// console.log(count.decrement())
// console.log(count.increment())

// 5.setTimout
