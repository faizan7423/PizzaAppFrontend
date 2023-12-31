import React, { Component } from 'react';


import './Slider.css';

 

const pizzaData = [

  {

    class: 'pikachu',

    sub: 'Pizza I',

    name: 'Margherita',

    description:

      'Known for its ingredients representing the colors of the Italian flag. These ingredients include red tomato sauce, white mozzarella, and fresh green basil.',

    image: '/margherita.png',


    navText: 'pikachu',

  },

  {

    class: 'piplup',

    sub: 'Pizza II',

    name: 'Diavola',

    description:

      'For those who crave heat, the Spicy Diavola pizza is a fiery masterpiece. Spicy soppressata, fresh chilies, San Marzano tomatoes, mozzarella, and a drizzle of honey create a perfect balance of spicy and sweet.',

    image: '/diavolo.png',

    navText: 'piplup',

  },

 

];

 

class Slid extends Component {

  constructor(props) {

    super(props);

    this.state = {

      activeSlide: 1,

      animateStart: false,

    };

  }

 

  handleSlideChange = (nextSlide) => {

    if (this.state.activeSlide !== nextSlide) {

      this.setState({ animateStart: true });

      setTimeout(() => {

        this.setState({ activeSlide: nextSlide, animateStart: false });

      }, 800); 

    }

  };

 

  render() {

    return (

      <div className="slider__wrapper">

        {pizzaData.map((pizza, index) => (

          <div

            key={index}

            className={`flex__container flex--${pizza.class} ${

              this.state.activeSlide === index + 1 ? 'flex--active' : ''

            } ${this.state.animateStart ? 'animate--start' : ''}`}

            data-slide={index + 1}

          >

            <div className="flex__item flex__item--left">

              <div className="flex__content">

                <p className="text--sub">{pizza.sub}</p>

                <h1 className="text--big">{pizza.name}</h1>

                <p className="text--normal">{pizza.description}</p>

              </div>

            </div>

            <div className="flex__item flex__item--right"></div>

            <img className="pokemon__img" src={pizza.image} alt={pizza.name} />

          </div>

        ))}

 

        <div className="slider__navi">

          {pizzaData.map((pizza, index) => (

            <a

              href="#"

              className={`slide-nav ${this.state.activeSlide === index + 1 ? 'active' : ''}`}

              data-slide={index + 1}

              onClick={() => this.handleSlideChange(index + 1)}

              key={index}

            >

              {pizza.navText}

            </a>

          ))}

        </div>

      </div>

    );

  }

}

 

export default Slid;