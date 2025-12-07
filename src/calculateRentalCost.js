/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const amountDay = 40
  const totalDays = days
  const firstDisc = 50
  const secDisc = 20

  const totalAmount = amountDay * totalDays

  if(totalDays >= 7) return totalAmount - firstDisc
  if(totalDays >= 3 || totalAmount < 7) return totalAmount - secDisc
  return totalAmount
}

module.exports = calculateRentalCost;
