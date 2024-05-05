export class PopularItem {
  imgLink = '';
  title = '';
  location = '';
  price = '';

  constructor(imgLink: string, title: string, location: string, price: string) {
    this.imgLink = imgLink;
    this.title = title;
    this.location = location;
    this.price = price;
  }
}
