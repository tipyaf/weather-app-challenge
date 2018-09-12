import { WeatherIconsLexicon } from '../lexicons/weatherIcons.lexicon';


export class IconsModel {

  static getClass(weatherId: number) {
    let icon = WeatherIconsLexicon[weatherId].icon;
    const base = 'wi wi-';
    if (!(weatherId > 699 && weatherId < 800) && !(weatherId > 899 && weatherId < 1000)) {
      icon = `day-${icon}`;
    }
    // Finally tack on the prefix.
    icon = base + icon;

    return icon;
  }

}
