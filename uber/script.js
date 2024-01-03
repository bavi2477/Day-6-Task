class UberPriceCalculator {
    constructor(baseFare, costPerMile, costPerMinute) {
      this.baseFare = baseFare;
      this.costPerMile = costPerMile;
      this.costPerMinute = costPerMinute;
    }
  
    calculatePrice(distance, time, surgeMultiplier = 1) {
      const totalFare = surgeMultiplier * (
        this.baseFare +
        distance * this.costPerMile +
        time * this.costPerMinute
      );
  
      return totalFare;
    }
  }
  

  const uberCalculator = new UberPriceCalculator(2.5, 1.5, 0.2);
  const distanceInMiles = 10;
  const timeInMinutes = 15;
  
 
  const priceWithoutSurge = uberCalculator.calculatePrice(distanceInMiles, timeInMinutes);
  console.log(`Price without surge: ${priceWithoutSurge}`);
  
 
  const surgeMultiplier = 1.5;
  const priceWithSurge = uberCalculator.calculatePrice(distanceInMiles, timeInMinutes, surgeMultiplier);
  console.log(`Price with surge (${surgeMultiplier}x): ${priceWithSurge}`);