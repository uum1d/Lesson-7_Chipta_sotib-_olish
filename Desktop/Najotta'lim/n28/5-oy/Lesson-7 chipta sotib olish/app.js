const buyTicket =() => {
    let first_name = document.getElementById('first_name').value
    let last_name = document.getElementById('last_name').value
    let price = document.getElementById('price').value
    let select = document.getElementById('select').value
    let tickets = []

    tickets.push(
        {fisrt_name:first_name, last_name: last_name, price:price, select:select}
    )
    console.log(tickets)

    let tr = ""

    for(let item of tickets){
        tr+= "<tr>"+
        "<td>" + item.fisrt_name + "</td>"+
        "<td>" + item.last_name + "</td>"+
        "<td>" + item.select + "</td>"+
        "<td>" + item.price + "</td>"+
        
        "</tr>"
    }
    document.getElementById('tr').innerHTML = tr

}
