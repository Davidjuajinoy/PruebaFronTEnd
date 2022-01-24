import { Component, OnInit } from '@angular/core';
import { DataBanner, DataCard, DataPrice, DataSection } from '../../../../core/interfaces/dataSection.interface';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  dataInformationSection: DataCard[] = []


  dataPriceSection: DataSection = { dataSection: { title: '', text: '' }, dataCard: [] }
  dataServicesSection: DataSection = { dataSection: { title: '', text: '' }, dataCard: [] }
  dataTeamSection: DataSection = { dataSection: { title: '', text: '' }, dataCard: [] }
  dataBannerSection: DataBanner[] = []
  dataRecentPostSection: DataSection = { dataSection: { title: '', text: '' }, dataCard: [] }

  constructor() { }

  ngOnInit(): void {

    this.dataInformationSection = [
      {
        title: 'As a veteinarian and lover of animals.',
        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus praesentium
        ad dolorem consequuntur consectetur.`,
        src: 'assets/images/dog1.jpg'
      },
      {
        title: 'As a veteinarian and lover of animals.',
        text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus praesentium
        ad dolorem consequuntur consectetur.`,
        src: 'assets/images/dog5.jpg'
      }
    ]

    this.dataServicesSection = {
      dataSection: {
        title: 'Title Here', text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique,
        recusandae!`},
      dataCard: [
        {
          title: 'Veterinarian',
          text: `  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quas totam ad accusamus doloremque ullam.`,
          src: 'assets/images/dog2.jpg',
        },
        {
          title: 'Vaccination Care',
          text: `  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quas totam ad accusamus doloremque ullam.`,
          src: 'assets/images/dog3.jpg',
        },
        {
          title: 'Dental Care',
          text: `  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quas totam ad accusamus doloremque ullam.`,
          src: 'assets/images/dog4.png',
        }
      ]
    }

    this.dataPriceSection = {
      dataSection: {
        title: 'Title Here', text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique,
        recusandae!`},
      dataCard: [
        {
          src: 'assets/images/dog6.jpg',
          price: 50,
          discountPrice: 30,
          btnText: 'buy now'
        },
        {
          src: 'assets/images/dog7.jpg',
          price: 40,
          discountPrice: 25,
          btnText: 'buy now'
        },
        {
          src: 'assets/images/dog8.jpg',
          price: 45,
          discountPrice: 20,
          btnText: 'buy now'
        }
      ]
    }


    this.dataTeamSection = {
      dataSection: {
        title: 'The vetcare team', text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique,
        recusandae!`},
      dataCard: [
        {
          src: 'assets/images/team1.jpg',
          name: 'Jennifer Mullen',
          charge: 'Veterinary'
        },
        {
          src: 'assets/images/team2.jpg',
          name: 'Jennifer Mullen',
          charge: 'Administration'
        },
        {
          src: 'assets/images/team3.jpg',
          name: 'Jennifer Mullen',
          charge: 'Veterinary'
        }
      ]
    }


    this.dataBannerSection = [
      {
        src: 'assets/icon/heart.svg',
        clients: 34793,
        text: 'Happy Clients'
      },
      {
        src: 'assets/icon/stethoscope.svg',
        clients: 45382,
        text: 'Departament'
      },
      {
        src: 'assets/icon/syringe.svg',
        clients: 54762,
        text: 'Vaccinations'
      }
    ]

    this.dataRecentPostSection = {
      dataSection: {
        title: 'Recent Posts',
        text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique,
        recusandae!`},
      dataCard:[
        {
          src:'assets/images/dog8.png',
          title:'As a veterinarian and lover of animals',
          subtitle:'february 09, 2020',
          text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. In reiciendis sint adipisci! Nam?',
          btnText:'Read More'
        },
        {
          src:'assets/images/dog9.png',
          title:'As a veterinarian and lover of animals',
          subtitle:'february 10, 2020',
          text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. In reiciendis sint adipisci! Nam?',
          btnText:'Read More'
        },
        {
          src:'assets/images/dog10.png',
          title:'As a veterinarian and lover of animals',
          subtitle:'february 11, 2020',
          text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. In reiciendis sint adipisci! Nam?',
          btnText:'Read More'
        }
      ]
    }
  }


}


