// Select color input
// Select size input
var height, width, color;

// When size is submitted by the user, call makeGrid()
const sizePicker = document.querySelector('#sizePicker')
sizePicker.addEventListener('submit', function(event) {
    event.preventDefault();
    height = document.querySelector('#inputHeight').value;
    width = document.querySelector('#inputWidth').value;
    makeGrid(height, width);
    console.log('Height: ' + height + ' and Width: ' + width);
})

function makeGrid(x, y) {
    $('tr').remove();
    // Your code goes here!

    for (var i = 1; i <= x; i++) {
        var tableRow = document.createElement("tr");
        document.querySelector('#pixelCanvas').append(tableRow);
        tableRow.id = 'table' + i
        for (var j = 1; j <= y; j++) {
            var tableData = document.createElement("td");
            document.querySelector('#table' + i).append(tableData);
        }
    }

    //Add color, used jquery for this because it was easier
    $('td').click(function addColor() {
        color = $('#colorPicker').val();

        if ($(this).attr('style')) {
            $(this).removeAttr('style')
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
    })

}




