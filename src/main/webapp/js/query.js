$(document).ready(function () {
    var members = {
        
    };

    var html = '<table><thead><tr>...</tr></thead><tbody>';

    for (var i = 0, len = members.length; i < len; ++i) {
        html += '<tr>';
        for (var j = 0, rowLen = members[i].length; j < rowLen; ++j) {
            html += '<td>' + members[i][j] + '</td>';
        }
        html += "</tr>";
    }
    html += '</tbody><tfoot><tr>....</tr></tfoot></table>';
    $(html).appendTo('#membersTable');
});