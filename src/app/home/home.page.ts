import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

type Question = {
  text: string;
  alternatives: string[];
  checkedAlternative: number | null;
};


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public possibleResults = [
    { letter: 'A', tvShow: 'Stranger Things', image: 'https://images.pexels.com/photos/2752777/pexels-photo-2752777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
    { letter: 'B', tvShow: 'Harry Potter', image: 'https://images.pexels.com/photos/507410/pexels-photo-507410.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
    { letter: 'C', tvShow: 'Game Of Thrones', image: 'https://images.pexels.com/photos/3789517/pexels-photo-3789517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
    { letter: 'd', tvShow: 'Star Trek', image: 'https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' },
  ];

  public questions: Question[] = [
    {
      text: 'Qual a idade do seu protagonista?',
      checkedAlternative: null,
      alternatives: [
        'Criança',
        'Adolescente',
        'Jovem adulto',
        'Adulto',
      ]
    },
    {
      text: 'Quando se passa sua história?',
      checkedAlternative: null,
      alternatives: [
        'Anos 80',
        'Anos 90',
        'Idade média',
        'Futuro',
      ]
    },
    {
      text: 'Quem é o vilão?',
      checkedAlternative: null,
      alternatives: [
        'Monstros',
        'Lorde das trevas',
        'Todo mundo',
        'Aliens',
      ]
    },
  ];

  public currentQuestion = 0;
  public showResult = false;
  public mostAnswered: number;

  constructor(
    private toastController: ToastController,
    private alertController: AlertController
  ) { }

  public next() {
    if (this.currentQuestion === this.questions.length - 1) {
      this.calculateMostAnswered();
      this.showResult = true;
    } else {
      this.currentQuestion++;
      this.showToast();
    }
  }

  private calculateMostAnswered() {
    const answers = this.questions.map(q => q.checkedAlternative);
    const counter = [0, 0, 0, 0];
    for (const a of answers) {
      counter[a]++;
    }
    const maxAnswerCount = Math.max(...counter);
    this.mostAnswered = counter.findIndex(x => x === maxAnswerCount);
  }

  private async showToast() {
    const toast = await this.toastController.create({
      header: this.currentQuestion + ' de ' + this.questions.length + ' respondidas',
      duration: 500,
    });
    toast.present();
  }

  public async confirmReset() {
    const alert = await this.alertController.create({
      header: 'Deseja mesmo jogar de novo?',
      message: 'O seu resultado será perdido!',
      buttons: [
        'Me enganei!',
        {
          text: 'Jogar de novo',
          handler: () => this.reset(),
        }
      ]
    });
    alert.present();
  }

  private reset() {
    this.showResult = false;
    this.currentQuestion = 0;
    for (const q of this.questions) {
      q.checkedAlternative = null;
    }
  }

}
