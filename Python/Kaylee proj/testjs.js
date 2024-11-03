



class Breakfast {
    constructor(source, protein, fat, carbs) {
      this.source = source;
      this.protein = protein;
      this.fat = fat;
      this.carbs = carbs;
    }
const example_breakfast = new Breakfast(protein,5,1,1) 




console.log(example_breakfast); 


    // Method to get total calories (assuming macronutrient values in grams)
    getTotalCalories() {
      return (this.protein * 4) + (this.fat * 9) + (this.carbs * 4);
    }
  
    // Method to display breakfast details
    display() {
      console.log(`Protein: ${this.protein}g, Fat: ${this.fat}g, Carbs: ${this.carbs}g`);
    }
  }
  
  // Example usage:
  const myBreakfast = new Breakfast(20, 10, 30);
  myBreakfast.display(); // Output: Protein: 20g, Fat: 10g, Carbs: 30g
  console.log("Total Calories:", myBreakfast.getTotalCalories());











