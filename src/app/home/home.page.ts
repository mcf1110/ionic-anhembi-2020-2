import { Component } from '@angular/core';

type Unit = 'bit' | 'byte' | 'kilobit' | 'kilobyte' |
  'megabit' | 'megabyte' | 'gigabit' |
  'gigabyte' | 'terabit' | 'terabyte';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public fromValue = 0;
  public toValue = 0;
  public fromUnit: Unit = 'bit';
  public toUnit: Unit = 'byte';

  constructor() { }

  public calculate() {
    const valueInBits = this.fromValueInBits();
    this.toValue = this.convertToSelectedValue(valueInBits);
  }

  private fromValueInBits() {
    return this.fromValue * this.getUnitMultiplier(this.fromUnit);
  }

  private convertToSelectedValue(bits: number) {
    return bits / this.getUnitMultiplier(this.toUnit);
  }

  private getUnitMultiplier(unit: Unit) {
    let power = 0;
    if (unit.startsWith('kilo')) {
      power = 1;
    } else if (unit.startsWith('mega')) {
      power = 2;
    } else if (unit.startsWith('giga')) {
      power = 3;
    } else if (unit.startsWith('tera')) {
      power = 4;
    }
    const multiplier = unit.endsWith('byte') ? 8 : 1;
    return multiplier * 1024 ** power;
  }

  public change() {
    const tempUnit = this.toUnit;
    this.toUnit = this.fromUnit;
    this.fromUnit = tempUnit;

    const tempValue = this.toValue;
    this.toValue = this.fromValue;
    this.fromValue = tempValue;
  }

}
