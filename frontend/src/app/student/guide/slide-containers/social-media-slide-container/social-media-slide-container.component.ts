import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericSlideContainer, GenericSlideContainerClass } from '../generic-slide-container';
import { IHighlightPoint } from '../../slides/highlights-slide/highlights-slide.component';
@Component({
  selector: 'app-social-media-slide-container',
  templateUrl: './social-media-slide-container.component.html',
  styleUrls: ['./social-media-slide-container.component.scss']
})
export class SocialMediaSlideContainerComponent extends GenericSlideContainerClass implements GenericSlideContainer {
  public slidesCount = 2;
  public highlights1: IHighlightPoint[] = [
    {
      offsetLeftPercentage: 0,
      offsetTopPercentage: 0,
      height: 100,
      width: 100,
      title: 'Widzisz na Instagramie post, który obiecuje Ci łatwy zarobek - wystarczy przelać określoną kwotę na konto lub podać dane karty płatniczej, by po kilku minutach odzyskać jej dziesięciokrotność. Oszuści twierdzą, że potrafią włamywać się do systemów bankowych i za pomocą sprytnych sztuczek “mnożyć” przelane pieniadze. '
    },
    {
      offsetLeftPercentage: 5,
      offsetTopPercentage: 2,
      height: 7,
      width: 25,
      title: 'Zwróć także uwagę na nazwę użytkownika i poświęć czas na przejrzenie jego profilu.'
    }
  ];
  public highlights2: IHighlightPoint[] = [
    {
      offsetLeftPercentage: 32,
      offsetTopPercentage: 22,
      height: 45,
      width: 34,
      title: 'Bądź wyczulony na instalowanie programów. Upewnij się, że strona, na której się znajdujesz jest godna zaufania.'
    }
  ];

  constructor(private router: Router, private route: ActivatedRoute) {
    super();
  }

  onLastSlideNext() {
    this.router.navigate(['/tutorial/summary']);
  }
}
