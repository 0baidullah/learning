<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
  <h1 class="">justify center</h1>
  <div class="second">
    <div class="one">1</div>
    <div class="two">2</div>
    <div class="three">3</div>
    <div class="four">4</div>
    <div class="five">5</div>
    <div class="five">6</div>
    <div class="four">4</div>
    <div class="five">5</div>
    <div class="five">6</div>
  </div>
  <h1 class="">justify around</h1>
  <div class="third">
    <div class="one">1</div>
    <div class="two">2</div>
    <div class="three">3</div>
    <div class="four">4</div>
    <div class="five">5</div>
    <div class="five">6</div>
    <div class="four">4</div>
    <div class="five">5</div>
    <div class="five">6</div>
  </div>
  <h1 class="">justify start</h1>
  <div class="fourth">
    <div class="one">1</div>
    <div class="two">2</div>
    <div class="three">3</div>
    <div class="four">4</div>
    <div class="five">5</div>
    <div class="five">6</div>
    <div class="four">4</div>
    <div class="five">5</div>
    <div class="five">6</div>
  </div>
  <h1 class="">justify end</h1>
  <div class="fifth">
    <div class="one">1</div>
    <div class="two">2</div>
    <div class="three">3</div>
    <div class="four">4</div>
    <div class="five">5</div>
    <div class="five">6</div>
    <div class="four">4</div>
    <div class="five">5</div>
    <div class="five">6</div>
  </div>

  <h1 class="">justify space between</h1>
  <div class="six">
    <div class="one">1</div>
    <div class="two">2</div>
    <div class="three">3</div>
    <div class="four">4</div>
    <div class="five">5</div>
    <div class="five">6</div>
    <div class="four">4</div>
    <div class="five">5</div>
    <div class="five">6</div>
  </div>

  <h1 class="">align-content start</h1>
  <div class="seven">
    <div class="one">1</div>
    <div class="two">2</div>
    <div class="three">3</div>
    <div class="four">4</div>
    <div class="five">5</div>
    <div class="five">6</div>
    <div class="five">6</div>
    <div class="four">4</div>
    <div class="five">5</div>
  </div>
  <h1 class="">align-content end</h1>
  <div class="eight">
    <div class="one">1</div>
    <div class="two">2</div>
    <div class="three">3</div>
    <div class="four">4</div>
    <div class="five">5</div>
    <div class="five">6</div>
    <div class="five">6</div>
    <div class="four">4</div>
    <div class="five">5</div>
  </div>
  <h1 class="">align-content space between</h1>
  <div class="nine">
    <div class="one">1</div>
    <div class="two">2</div>
    <div class="three">3</div>
    <div class="four">4</div>
    <div class="five">5</div>
    <div class="five">6</div>
    <div class="five">6</div>
    <div class="four">4</div>
    <div class="five">5</div>
  </div>
  <h1 class="">align-content space-around</h1>
  <div class="ten">
    <div class="one">1</div>
    <div class="two">2</div>
    <div class="three">3</div>
    <div class="four">4</div>
    <div class="five">5</div>
    <div class="five">6</div>
    <div class="five">6</div>
    <div class="four">4</div>
    <div class="five">5</div>
  </div>
  <h1 class="">align-content space-evenly</h1>
  <div class="eleven">
    <div class="one">1</div>
    <div class="two">2</div>
    <div class="three">3</div>
    <div class="four">4</div>
    <div class="five">5</div>
    <div class="five">6</div>
    <div class="five">6</div>
    <div class="four">4</div>
    <div class="five">5</div>
  </div>
</div>

<style>
  .second {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
    justify-content: center;
    /* justify-items: center; */
    /* rows color red */
    /* columns color blue */

  
    gap: 30px 15px;
    @media (max-width: 320px) {
      height: 150vh;
      gap: 10px 5px;
    }
  }
  .third {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
    justify-content: space-around;
    justify-items: start;
    gap: 30px 15px;
  
    @media (max-width: 320px) {
      height: 150vh;
    }
  }
  .fourth {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
    justify-content: start;
    gap: 30px 15px;
  
    @media (max-width: 320px) {
      height: 150vh;
    }
    
  }
  .fifth {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
    justify-content: end;
    gap: 30px 15px;
  
    @media (max-width: 320px) {
      height: 150vh;
    }
  }
  .six {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
    justify-content: space-between;
    gap: 30px 15px;
  
    @media (max-width: 320px) {
      height: 150vh;
    }
  }
  .seven {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
    align-content: start;
    gap: 30px 15px;
    height: 150vh;
  
    @media (max-width: 320px) {
      height: 180vh;
    }
  }
  .eight {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
    align-content: end;
    gap: 30px 15px;
    height: 150vh;
  
    @media (max-width: 320px) {
      height: 180vh;
    }
  }
  .nine {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
    align-content: space-between;
    gap: 30px 15px;
    height: 150vh;
  
    @media (max-width: 320px) {
      height: 180vh;
    }
  }
  .ten {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
    align-content: space-around;
    gap: 30px 15px;
    height: 150vh;
  
    @media (max-width: 320px) {
      height: 180vh;
    }
  }
  .eleven {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
    align-content: space-evenly;
    gap: 30px 15px;
    height: 150vh;
  
    @media (max-width: 320px) {
      height: 180vh;
    }
  }

  .one {
    background-color: red;
    color: white;
    width: 100px;
    height: 100px;
    
    border-radius: 10px;
    @media (max-width: 320px) {
      height: 60px;
        width: 60px;
    }
  }
  .two {
    background-color: green;
    color: white;
    width: 100px;
    height: 100px;
    border-radius: 10px;
     @media (max-width: 320px) {
      height: 60px;
        width: 60px;
    }
  }
  .three {
    background-color: blue;
    color: white;
    width: 100px;
    height: 100px;
    border-radius: 10px;
     @media (max-width: 320px) {
      height: 60px;
        width: 60px;
    }
  }
  .four {
    background-color: yellow;
    color: white;
    width: 100px;
    height: 100px;
    border-radius: 10px;
     @media (max-width: 320px) {
      height: 60px;
        width: 60px;
    }
  }
  .five {
    background-color: purple;
    color: white;
    width: 100px;
    height: 100px;
    border-radius: 10px;
     @media (max-width: 320px) {
      height: 60px;
        width: 60px;
    }

  }
</style>
