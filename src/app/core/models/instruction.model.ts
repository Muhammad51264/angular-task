export class Instruction {
  imgLink = '';
  title = '';
  description = '';
  width = '5.375rem';

  constructor(
    imgLink: string,
    title: string,
    description: string,
    width: string
  ) {
    this.imgLink = imgLink;
    this.title = title;
    this.description = description;
    this.width = width;
  }
}
