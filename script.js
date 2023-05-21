//your code here
const tbody = document.getElementsByTagName("tbody")[0];
const td = document.querySelectorAll("tbody tr");
let sum = 0;
for(let i =0; i < td.length; i++){
	 sum += parseInt(td[i].children[2].innerText);
}
const newTd = document.createElement("tr");
newTd.innerText = sum;
newTd.setAttribute('data-ns-test', 'grandTotal');

tbody.appendChild(newTd);