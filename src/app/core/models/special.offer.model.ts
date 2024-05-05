export class SpecialOffer {
  imgLink = '';
  title = '';
  offerValue = '';
  remainingDays = 0;

  constructor(imgLink:string, title:string, offerValue:string, remainingDays:number) {
    this.imgLink = imgLink;
    this.title = title;
    this.offerValue = offerValue;
    this.remainingDays = remainingDays;
  }
}
