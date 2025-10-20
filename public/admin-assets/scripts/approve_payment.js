

$(document).on('click','.btn_approve',function(){

    let trans_id = $(this).data('id')
    let userid = $(this).data('userid');
    let crypto_Amount = $(this).data('crypto_amount');
    let crypto_coin = $(this).data('crypto_coin')
    let amount = $(this).data('amount');
     //console.log({ userid, trans_id, crypto_Amount, crypto_coin, amount }); // debug
     $.ajax({
              url:"/api/approve_payment",
              type:"POST",
              contentType:"application/json",
              data: JSON.stringify({userid,trans_id,crypto_Amount,crypto_coin,amount}),
              success:function(data){
                   alert("payment Approved");
              },
              error:function(err){
						 alert("❌ Error approving transaction");
						console.error(err);
					 }
     })
})