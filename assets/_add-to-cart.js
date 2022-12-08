function buttonClick(variantId,pieces){
  let formData = {
    items: [
      {
        id: variantId,
        quantity: pieces,
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

$(".button--full-width").on("click",function(){
  setTimeout(function(){
    location.reload();
  },700);
});