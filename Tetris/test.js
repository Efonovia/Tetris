let tableRows = document.querySelectorAll('tr')
let tableBody = document.querySelector('tbody')
console.log(tableRows.length);


for(let i = 0; i < 10; i++) {
    tableRows[1].children[i].className = ""
}

tableBody.insertAdjacentHTML("afterbegin", `
<tr>
    <td class="roof"></td>
    <td class="roof"></td>
    <td class="roof"></td>
    <td class="roof"></td>
    <td class="roof"></td>
    <td class="roof"></td>
    <td class="roof"></td>
    <td class="roof"></td>
    <td class="roof"></td>
    <td class="roof"></td>
</tr>
`)

tableRows[18].remove()
tableRows = document.querySelectorAll('tr')
console.log(tableRows.length);

// tableRows[]