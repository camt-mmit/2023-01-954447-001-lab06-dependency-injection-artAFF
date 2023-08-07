import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionData } from '../../types';
import { ExampleDataService } from '../../example-data.service';
import { DynamicSectionComponent } from '../../dynamic-section/dynamic-section.component';

@Component({
  selector: 'app-example-input',
  standalone: true,
  imports: [CommonModule, DynamicSectionComponent],
  templateUrl: './example-input.component.html',
  styleUrls: ['./example-input.component.scss'],
})
export class ExampleInputComponent {
  protected readonly dataService = Inject(ExampleDataService);

  protected data$ = this.dataService.getData();

  async onDataChange(sectionData: SectionData): Promise<void> {
    await this.dataService.setData(sectionData);
  }
}
