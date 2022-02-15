
console.log("page rendered")

function hello() {
    console.log("hello 1")

    Promise.resolve("Hello World 1")
    .then(res => console.log(res))
}

async function two() {
    console.log("hello 2")
    await true
    console.log("Hello World 2")
}

hello()
two()

requestAnimationFrame(() => {
    document.body.style.backgroundColor = "blue"
    console.log("color")
})

console.log("script end")