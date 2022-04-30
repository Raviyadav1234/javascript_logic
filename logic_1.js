$(document).ready(function(){
 var currentIndex = 0;
 $(document).on("click",".edit-btn-data",function() {
 var row_id =$(this).attr("id-row");
 var id_row = $("#row_id").val(row_id);
 
 var index = $(this).attr("data-index");
 var new_index=parseInt(index) + 1;
		currentIndex = parseInt(index);

		$("#number_count").text(new_index);
        var row_id =$(this).attr('id-row');
		var text = $(this).attr('data-val');
		var author = $(this).attr('data-author');
		var data_line = $(this).attr('data-line');
		var data_meta = $(this).attr('data-meta');
		var data_cat = $(this).attr('data-cat')

		$("#name").val(data_line);
        $("#text").val(text);
        $("#festtext").html(text.substring(0,180));
        $("#festtext2").html(text);
        $("#meta_data_value").val(data_meta);
        $("#category").val(data_cat);
        $("#author").val(author);

		// $("#prev").attr('id',prev_id)
		// $("#next").attr('id',next_id)
 
	var id_row = $("#row_id").val(row_id);

 $('#edit_popup').fadeIn('slow');

 });



	$('.prev').on("click", function(){
			//$(".next").show();
			currentIndex = parseInt(currentIndex) - 1;
			if(currentIndex >= 0){
				var index = $("#item-cube-"+currentIndex).attr('data-index');
				//alert(index)
   var new_index=parseInt(index) + 1;
				$("#number_count").text(new_index);
 
				var text = $("#item-cube-"+currentIndex).attr('data-val');
				var author = $("#item-cube-"+currentIndex).attr('data-author');
				var data_line = $("#item-cube-"+currentIndex).attr('data-line');
				var data_meta = $("#item-cube-"+currentIndex).attr('data-meta');
				var data_cat = $("#item-cube-"+currentIndex).attr('data-cat');
				var row_id = $("#item-cube-"+currentIndex).attr('id-row')

		$("#name").val(data_line);
        $("#text").val(text);
        $("#festtext").html(text.substring(0,180));
        $("#festtext2").html(text);
        $("#meta_data_value").val(data_meta);
        $("#category").val(data_cat);
        $("#author").val(author);
        $("#row_id").val(row_id);
		
			}else{
				currentIndex = 0;
				
			}
		});



$('.next').on("click", function(){
			//$(".prev").show();
			currentIndex = parseInt(currentIndex) + 1;
			var text = $("#item-cube-"+currentIndex).attr('data-val');
			if(text != undefined){
				var index = $("#item-cube-"+currentIndex).attr('data-index');
				//alert(index)
               var new_index=parseInt(index) + 1;
				$("#number_count").text(new_index);
				
 
				var text = $("#item-cube-"+currentIndex).attr('data-val');
				var author = $("#item-cube-"+currentIndex).attr('data-author');
				var data_line = $("#item-cube-"+currentIndex).attr('data-line');
				var data_meta = $("#item-cube-"+currentIndex).attr('data-meta');
				var data_cat = $("#item-cube-"+currentIndex).attr('data-cat');
				var row_id = $("#item-cube-"+currentIndex).attr('id-row')

		$("#name").val(data_line);
        $("#text").val(text);
        $("#festtext").html(text.substring(0,180));
        $("#festtext2").html(text);
        $("#meta_data_value").val(data_meta);
        $("#category").val(data_cat);
        $("#author").val(author);
        $("#row_id").val(row_id);
		
			}else{
			currentIndex = parseInt(currentIndex) - 1;
			
			}
		});

 });