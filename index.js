class circle {
  constructor(radius) {
    this.radius = radius;
  }
  
  get diameter() {
    this.radius = diameter * 2;
  }
  
  get circumference(circumference) {
    return 2 * this.radius;
  }
  
  get area() {
    return Math.PI * this.radius * this.radius;
  }
  
  set diameter(diameter) {
    this.radius = diameter / 2;
  }
  
  set circumference(circumference) {
    this.radius = circumference / (2 * Math.PI);
  }
  
  
}