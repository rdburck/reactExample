import { getHeros, getVillains } from "../API/index.js";

const heroBtn = document.getElementById("heros");
const villainBtn = document.getElementById("villains");
const charactersDiv = document.getElementById("characters");

heroBtn.addEventListener("click", () => {
	getHeros().then(({ data }) => {
		console.log(data);
		charactersDiv.innerHTML = `
            <h5> ${data[0].name} </h5>
            <h5> ${data[1].name} </h5>
            <h5> ${data[2].name} </h5>
        `;
	});
	// .cath((error) => console.log(error));
});

villainBtn.addEventListener("click", () => {
	getVillains().then(({ data }) => {
		charactersDiv.innerHTML = `
            <h5> ${data[0].name} </h5>
            <h5> ${data[1].name} </h5>
            <h5> ${data[2].name} </h5>
        `;
	});
	// .cath((error) => console.log(error));
});

const object = {
	itemOne: "itemOne",
	itemTwo: "itemTwo",
	itemThree: "itemThree",
};

const { itemThree, itemOne } = object;

console.log(object.itemOne);
console.log(itemOne);
