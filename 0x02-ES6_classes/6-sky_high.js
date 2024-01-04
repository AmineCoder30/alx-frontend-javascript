class Building {
  constructor(sqft) {
    this.sqft = sqft;
  }
}

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this.setFloors(floors);
  }

  setFloors(newFloors) {
    if (typeof newFloors !== "number") {
      throw TypeError("Floors must be a number");
    }
    this._floors = newFloors;
  }

  getFloors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.getFloors()} floors`;
  }
}

export default SkyHighBuilding;
