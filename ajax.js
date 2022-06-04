

//save data on server by ajax
 $(document).on('click','#submit_btn',function(){

        var files = $('#member_image')[0].files;
        var other_image = $('#other_image')[0].files;
        var CSRF_TOKEN= $('meta[name="csrf-token"]').attr('content')  
        var fd = new FormData($('#membership_frm')[0]);
         fd.append('file',files[0]);
         fd.append('file',other_image[0]);
         fd.append('_token',CSRF_TOKEN);
 
        $.ajax({
         url:"{{route('ajax.request')}}",
         type:"post",
         data: fd,
         contentType: false,
         processData: false,
         dataType: 'json',
          success:function(data){

          }
        });
        
      //}

   });



//----------Check Duplicate number by ajax-------

$(document).on('focusout keypress keyup','#mobile',function(){
  var mobile = $(this).val();
        var _token = $("input[name=_token").val();
        console.log(mobile)
        $.ajax({
            url     : "{{ route('Fetch_ByNumber') }}",
            type    : 'POST',
            data    : {_token,mobile},
            timeout : 30000,
            success : function(data) {
              //console.log(data.data.other_sport);
              $('.required_field_msg').remove();
              if(data.status==1){
                //$('#membership_frm')[0].reset();
                var other_sport = data.data.other_sport ? data.data.other_sport : '';
                 $('#name').val(data.data.name);
                 $('#address').val(data.data.address);
                 $('#age').val(data.data.age);
                 $('#sport_other').val(other_sport);
              }else{
                //$('#membership_frm')[0].reset();
                $('#name').val('');
                 $('#address').val('');
                 $('#age').val('');
                 $('#sport_other').val('');
                 $("input[name=mobile]").after("<span class='text-danger required_field_msg'>mobile not found please register ! </span>");
              }
               
            }               
        });
});




//------alert message when any field is empty---------

$(document).on('click','#submit_btn',function(){
 /* console.log($("#multiple").val())
  return false;
*/
    $('.required_field_msg').remove()

    var name = $("#name").val();
    var mobile = $("#mobile").val();
    var parent = $("#parent").val();
    var email = $("#email").val();
    var address = $("#address").val();
    var sport = $('input[name=checkbox]:checked').length;
    var _token = $("input[name=_token").val();
    var sport_other = $('#sport_other_radio').is(':checked');  
    

   // console.log(typeof attended)

    if(name!="" && mobile!="" && parent!="" && address !="" && email!=""){
      //var check_confirmation = confirm("Are You Sure");
      //if(confirm("Are You Sure")){
        //$("#submit_btn").attr("type","button");
        $.ajax({
          url:"{{ route('check.duplicate') }}",
          type:"post",
          data:{_token,mobile,email},
          success:function(data){

            
            if(data.status=='email'){
              setTimeout(function(){
                //$('#allready').removeClass("d-none")
                 $("input[name=email]").after("<span class='text-danger required_field_msg'>email allready exists ! </span>");
                 $('html, body').animate({
                    scrollTop: $(".required_field_msg").offset().top-50
                }, 10);
              },1000);

              

            }else if(data.status=='mobile'){
            setTimeout(function(){
                //$('#allready').removeClass("d-none")
                 $("input[name=mobile]").after("<span class='text-danger required_field_msg'>mobile allready exists ! </span>");
                 $('html, body').animate({
                    scrollTop: $(".required_field_msg").offset().top-500
                }, 10);
              },1000);

            }else if(data.status==1){
              setTimeout(function(){
                //$('#allready').removeClass("d-none")
                 $("input[name=email]").after("<span class='text-danger required_field_msg'>email allready exists ! </span>");
                 $('html, body').animate({
                    scrollTop: $(".required_field_msg").offset().top-50
                }, 10);
              },1000);

              setTimeout(function(){
                //$('#allready').removeClass("d-none")
                 $("input[name=mobile]").after("<span class='text-danger required_field_msg'>mobile allready exists ! </span>");
                 $('html, body').animate({
                    scrollTop: $(".required_field_msg").offset().top-500
                }, 10);
              },1000);
              
            }else{
              //if($("input[name='declaration']:checked").val()!==''){
                //$("#declr_err").after("<span class='text-danger required_field_msg'>mobile allready exists ! </span>");
                 
             // }else{
                $("#submit_btn").attr("type","submit");
              $("#membership_frm").submit();
            //  }
              
            }
          }
        });
        
      //}

    }else{
       $(".required_field").each(function(){
      if($(this).val()==""){
        $(this).after( "<span class='text-danger required_field_msg'>This field is required! </span>" );

         $('html, body').animate({
                    scrollTop: $(".required_field_msg").offset().top-500
                }, 10);
      }
    });

    }
   });


//---------- return false when type expect integer-------------
onkeypress="return event.charCode >= 48 && event.charCode <= 57 && this.value.length<10" (for inline onkeypress)
