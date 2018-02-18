import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericSlideContainer, GenericSlideContainerClass } from '../generic-slide-container';
import { IHighlightPoint } from '../../slides/highlights-slide/highlights-slide.component';

@Component({
  selector: 'app-fake-news-slide-container',
  templateUrl: './fake-news-slide-container.component.html',
  styleUrls: ['./fake-news-slide-container.component.scss']
})
export class FakeNewsSlideContainerComponent extends GenericSlideContainerClass implements GenericSlideContainer {
  public slidesCount = 2;
  public highlights: IHighlightPoint[] = [
    {
      offsetLeftPercentage: 10,
      offsetTopPercentage: 5,
      height: 10,
      width: 90,
      title: 'Sensacyjny tytuł - "Zima stulecia" to bardzo mocna teza. Dodatkowe emocje mają wywołać w nas wykrzyknik i zwrot "synoptycy alarmują". Nie ufajmy sensacyjnym tytułom i zawsze czytajmy artykuły w całości.'
    },
    {
      offsetLeftPercentage: 10,
      offsetTopPercentage: 10,
      height: 5,
      width: 10,
      title: 'Strona nie podaje żadnego konkretnego źródła informacji. Rzetelne artykuły zawsze poparte są odnośnikami do znanych i cenionych serwisów internetowych lub do stron z opracowaniami naukowymi.'
    },
    {
      offsetLeftPercentage: 2,
      offsetTopPercentage: 16,
      height: 7,
      width: 7,
      title: 'Na niektóre Fake News nabierają się setki tysięcy osób. Duża liczba polubień artykułu w mediach społecznościowych nie oznacza, że jest on prawdziwy.'
    },
    {
      offsetLeftPercentage: 50,
      offsetTopPercentage: 75,
      height: 12,
      width: 45,
      title: 'Ogólniki - "Duża grupa synoptyków i osób, zajmujących się badaniem klimatu na Ziemi" - nigdzie w artykule nie dowiemy się, o jakich właściwie synoptyków chodzi. Tekst nie powołuje się na wyniki konkretnych badań czy na opinię cenionych autorytetów w dziedzinie meteorologii. Zwroty takie jak "duża grupa" mają tylko uśpić naszą czujność.'
    }
  ];

  constructor(private router: Router, private route: ActivatedRoute) {
    super();
  }

  onLastSlideNext() {
    console.log('a')
    // jak dodamy summary - jak nie, to przechodzi do kolejnej sekcji
    this.router.navigate(['/tutorial/2']);
  }
}
