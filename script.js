var countre=1;
function add_more_field(){
    countre+=1
    html='<div class="row" id="row'+countre+'">\
        <div class="col-7">\
            <label>Product Name</label>\
            <input type="text" name="product'+countre+'" class="form-control" placeholder="Lenovo 3300">\
        </div>\
        <div class="col-4">\
            <label>Price</label>\
            <input type="number" name="price'+countre+'" class="form-control" placeholder="30000">\
        </div>\
        <div class="col-1"> <br>\
        <button type="button" id="'+countre+'" class="btn btn-danger" onclick="remove(this)">Remove</button>\
        </div>\
    </div>'
    var form= document.getElementById('product_form')
    form.innerHTML+=html
}
function remove(button){
    let number= button.id
    let row = document.getElementById('row'+number)
    row.remove();
}