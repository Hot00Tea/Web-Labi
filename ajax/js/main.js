$('#btnforps').click(function(e){
    e.preventDefault();
    var your_data ={};
    your_data[$('#inp1').attr('name')] = $('#inp1').val();
    your_data[$('#inp2').attr('name')] = $('#inp2').val();
    your_data[$('#inp3').attr('name')] = $('#inp3').val();
    console.log(your_data);

    $.ajax({
        type: "POST",
        url: "/index",
        data: your_data,
        datatype: "jsonp",
        success: function(msg){
          alert( "Check your console" );
          $('#response').text(this.data)
        },
        fail: function(msg){
            alert("error "+ msg)
        }
      });
})
