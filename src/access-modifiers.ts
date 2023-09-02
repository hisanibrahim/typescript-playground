class Timelog {
  private name: string = "Hisan";
  private getName(): string {
    return this.name;
  }
  protected pincode: number = 12345;
  protected getPincode(): number {
    return this.pincode;
  }
  public hello = "Hello";
}

class ManualTimelog extends Timelog {
  constructor() {
    super();
  }

  getMyPincode() {
    return this.getPincode();
  }
}

const timelog = new ManualTimelog();

console.log(timelog.getMyPincode());

console.log(timelog.hello);
