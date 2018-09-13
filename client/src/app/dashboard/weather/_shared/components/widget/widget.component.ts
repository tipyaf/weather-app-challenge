import { Component, Input } from '@angular/core';
import { WeatherWidget } from '../../../../_shared/models/weather-widget.model';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent {
  @Input() data: WeatherWidget;
}
