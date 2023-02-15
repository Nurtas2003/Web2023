// явное преобразование
// let num = Number(obj);

// математические (не считая бинарного плюса)
// let n = +obj; // унарный плюс
// let delta = date1 - date2;

// сравнения больше/меньше
// let greater = user1 > user2;

let user = {
    name: "John",
    money: 1000,

    [Symbol.toPrimitive](hint) {
        alert(`hint: ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
};

// демонстрация результатов преобразований:
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500