const info = {
    name: "why",
    friend: { name: "kobe" }
}

const obj = { ...info, name: "tmac" }
console.log(obj)
obj.friend.name = "curry"
console.log(info.friend.name)
  
  