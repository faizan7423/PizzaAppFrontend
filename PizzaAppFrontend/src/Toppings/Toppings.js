import React, { Component } from 'react';

 

import './Toppings.css'; // Make sure to include your CSS file

 

class Toppings extends Component {

  constructor() {

    super();

    this.state = {

      pepperoniVisible: false,

      mushroomsVisible: false,

      basilVisible: false,

      tomatoesVisible: false,

      olivesVisible: false,

      cutleryVisible: true,

    };

  }

 

 

 

  handleToppingClick = (topping) => {

    this.setState((prevState) => ({

      [`${topping}Visible`]: !prevState[`${topping}Visible`],

    }));

  };

 

 

 

  componentDidMount() {

    setTimeout(() => {

      this.setState({ cutleryVisible: false });

    }, 5000);

  }

 

 

 

  render() {

    return (

<div>

  <div class="toppingcontainer">

<div className="toppingChooserContainer">

<h1>Choose your Toppings!</h1>

<p

            className="pepperoniWords"

            onClick={() => this.handleToppingClick('pepperoni')}

>

            Pepperoni

</p>

<p

            className="mushroomsWords"

            onClick={() => this.handleToppingClick('mushrooms')}

>

            Mushrooms

</p>

<p className="basilWords" onClick={() => this.handleToppingClick('basil')}>

            Basil

</p>

<p

            className="tomatoesWords"

            onClick={() => this.handleToppingClick('tomatoes')}

>

            Tomatoes

</p>

<p

            className="olivesWords"

            onClick={() => this.handleToppingClick('olives')}

>

            Olive

</p>

</div>

 

 

 

        {/* {this.state.cutleryVisible && (

<h1 className="cutleryWords">You're not going to eat that with your hands are you?</h1>

        )} */}

 

 

 

        <div className="pizzaContainer">

<div className="plate">

<div className="crust">

<div className="sauce">

<div className="cheese">

                  {this.state.pepperoniVisible && <div className="pepperoni"></div>}

                  {this.state.mushroomsVisible && (

<div className="mushrooms">

<img

                        src="http://www.clker.com/cliparts/u/t/6/d/P/w/totetude-mushroom-pizza-topping-th.png"

                        style={{ height: '40px' }}

                        className="shroom1"

                      />

<img

                        src="http://www.clker.com/cliparts/u/t/6/d/P/w/totetude-mushroom-pizza-topping-th.png"

                        style={{ height: '40px' }}

                        className="shroom2"

                      />

</div>

                  )}

                  {this.state.basilVisible && <div className="basil"></div>}

                  {this.state.tomatoesVisible && (

<div className="tomatoes">

<img

                        src="http://www.clker.com/cliparts/F/r/u/O/w/s/totetude-tomato-slice-pizza-topping.svg"

                        className="tom1"

                      />

<img

                        src="http://www.clker.com/cliparts/F/r/u/O/w/s/totetude-tomato-slice-pizza-topping.svg"

                        className="tom2"

                      />

</div>

                  )}

                  {this.state.olivesVisible && <div className="olives"></div>}

</div>

</div>

</div>

</div>

</div>

 

 

 

        {/* <div className="forkContainer">

<img

            src="http://www.clker.com/cliparts/5/2/6/1/12576753772133008692secretlondon_fork.svg.hi.png"

            className="fork"

          />

</div> */}

 

 

 

        {/* <div className="plateContainer">

<img

            src="http://www.clker.com/cliparts/R/P/B/f/D/c/plate.svg"

            className="smallPlate"

          />

</div> */}

 

 

 

        {/* <div className="knifeContainer">

<img

            src="http://www.clker.com/cliparts/6/4/e/a/12573628011744134542sutrannu_Flatware_Knife.svg.med.png"

            className="knife"

          />

</div> */}

</div>

</div>

    );

  }

}

 

 

 

export default Toppings;