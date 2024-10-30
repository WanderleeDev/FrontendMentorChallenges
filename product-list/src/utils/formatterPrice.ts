

export  function formattingPrice(number: number) {
  
  return Intl.NumberFormat('en-Us', {
    style: "currency",
    currency: "USD",
  }).format(number);
}
