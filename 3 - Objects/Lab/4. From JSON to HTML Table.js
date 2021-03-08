function solve(input){
    let jsonData = input.shift()
    //копира го, за да не работим върху оригинала
    let students = JSON.parse(jsonData);
    let first = students[0];
    //само първия, за да вземем keys за всичките
    
    let html = '<table>';
    html += `<tr>${Object.keys(first)
    .map(x => `<th>${x}</th>`).join('')}</tr>`
    html += '</table';

    students.forEach(student => {
        html += '<tr>';
        html += Object.values(student).map(x=>`<td>${x}</td>`).join('');
        html += '<tr>';
    });
    
return html;

}
solve(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']);