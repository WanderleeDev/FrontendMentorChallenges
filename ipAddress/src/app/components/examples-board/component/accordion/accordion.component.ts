import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  @Input() dataAccordion!: { title: string, list: string[]};
  private isOpenAccordion = false;
  ariaMessageIP = 'open accordion';

  public accordionHandler() {
    this.isOpenAccordion= !this.isOpenAccordion;
    this.isOpenAccordion
      ? this.ariaMessageIP = 'close accordion'
      : this.ariaMessageIP = 'open accordion'
  }

  public copyText(text: string) {
    console.log(text);
    navigator.clipboard.writeText(text.trim())
  }
}
