<template>
  <svg @click="$emit('closeNotf')" class="svg" xmlns="http://www.w3.org/2000/svg" width="71.455" height="68.614" viewBox="0 0 71.455 68.614">
    <g id="Group_3" data-name="Group 3" transform="translate(-1264.578 -310.693)">
      <line id="Line_1" data-name="Line 1" x2="68" y2="65" transform="translate(1266.306 312.5)" fill="none" stroke="#2e2e2e" stroke-width="10"/>
      <path id="Path_1" data-name="Path 1" d="M68,0,0,65" transform="translate(1266.306 312.5)" fill="#242424" stroke="#303030" stroke-width="10"/>
    </g>
  </svg>

</template>

<script>
export default {
name: "cross"
}
</script>

<style scoped>
svg{
  cursor: pointer;
  padding: 10px;
  width: 40px;
  height: 40px;
}
</style>