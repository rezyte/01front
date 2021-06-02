<template>
  <div class="centering_container">
    <button id="button">+</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// border-box everything
*, *:before, *:after { box-sizing: border-box; }

// this is just here to center the button
.centering_container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #fafafa;
  
  // fun fact: if a container has a background
  // you need to set positioning and z-index
  // on the container in order to have the pseduo element
  // with z-index: -1 to show
  position: relative;
  z-index: 1;
}

// remove outline in Firefox
button::-moz-focus-inner { border: 0; }


button {
  height: 2em;
  width: 2em;
  
  // use this to keep the pseduo element
  // contained to the button
  position: relative;
  
  background: #2189e8;
  border: none;
  border-radius: 100%;
  outline: none;
  transition: all 300ms ease;
  
  // styling icon
  color: #fff;
  font-size: 2em;
  font-family: 'Helvetica Neue', Helvetica, sans-serif;
  line-height: 0.45;
  
  // if you decide to use a box-shadow, you don't need
  // the pseudo element
  // but you also won't have control over the box-shadow color
  // when a user hovers or focuses without javascript
  // for example: adding a class to add a different animation
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    transform-origin: center;
    border-radius: 100%;    
    height: 100%;
    width: 100%;
    z-index: -1;
    
    background: repeating-radial-gradient(
      rgba(33,137,232,0.0) 0%,
      rgba(33,137,232,0.15) 50%,
      rgba(33,137,232,0.5) 75%,
      rgba(33,137,232,0.05) 100%
    );
    
    // animation: pulse_pseudo 2.5s ease-in-out infinite;
    animation: pulse_shadow 2s ease-in-out infinite;
  }
  
    // self-gratifying hover/focus transition
    // only works with pseudo element
    &:hover, &:focus {
    outline: none;
    background: tomato;
    transform: rotate(45deg);

      &:after {
        background: repeating-radial-gradient(
          rgba(255,99,71,0.0) 0%,
          rgba(255,99,71,0.15) 50%,
          rgba(255,99,71,0.5) 75%,
          rgba(255,99,71,0.05) 100%
        );    
      }
    }
}


@keyframes pulse_pseudo {
  0% {
    opacity: 1;
    transform: translate(-50%,-50%) scale(1);
  }
  
	100% {
    opacity: 0;
    transform: translate(-50%,-50%) scale(2.25);
  }
}


@keyframes pulse_shadow {
  0% { box-shadow: 0px 0px 0px 0px rgba(33,137,232,0.25); }
  100% {box-shadow: 0px 0px 3px 30px rgba(33,137,232,0.0); }
}
</style>