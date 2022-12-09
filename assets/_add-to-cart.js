function buttonClick(variantId,quantity_num){
  let formData = {
    items: [
      {
        id: variantId,
        quantity: quantity_num,
      },
    ],
  };

  fetch("/cart/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
  .catch((error) => {
    console.error("Error:", error)
  })
}

$(".js-reload").on("click",function(){
  setTimeout(function(){
    location.reload();
  },700);
});