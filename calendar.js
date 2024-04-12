let colorCounts = {};
 
function colorirDia() {
    let days = document.getElementById('day').value;
    let color = document.getElementById('color').value;
    let calendar = document.getElementById('calendar');
    let tds = calendar.getElementsByTagName('td');
   
    if (parseInt(days) > 30) {
        alert("Esse número é inválido. O número não pode ser maior do que 30.");
        return;
    }
 
    let index = parseInt(days) - 1;
   
    if (index >= 0 && index < tds.length) {
        
        if (colorCounts[color] >= 3) {
            alert('O frete não tem capacidade para mais de 3 viagens');
            return; 
        }
       
        colorCounts[color] = (colorCounts[color] || 0) + 1;
 
        tds[index].style.backgroundColor = color;
    } else {
        alert('Dia selecionado está fora do intervalo válido.');
    }
}