function solve(input){
    let employeers = [];
    input.forEach(row => {
        let data = JSON.parse(row);       
        employeers.push(data);
    });

    let html = '<table>\n';// /n не пише вътре в стринга
    employeers.forEach(employee => {
        html += '\t<tr>\n'

            Object.values(employee).forEach(x=> {
                html += `\t\t<td>${x}`
                html += '</td>\n';
            })
            html += '\t</tr>\n'

        }
    )




    html += '</table>'

    console.log(html);
}
solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']
);