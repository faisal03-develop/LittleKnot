export function getDiscountedPrice(price: number, discountPercentage: number){
  if(!discountPercentage || discountPercentage <= 0){
    return price;
  }
  return Math.round(price - (price * discountPercentage) / 100);
}