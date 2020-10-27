<!--/lib/Loading.vue-->
<template>
    <div :class="`fun-loading-circle-half fun-loading-circle-half-${size}`"></div>
</template>
<script>
export default {
  name: 'FunLoadingCircleHalf',
  props: {
    size: {
      type: String,
      default: 'middle',
      elem: ['small', 'middle', 'large']
    }
  }
}
</script>
<style>
    .fun-loading-circle-half {
        border-radius: 50%;
        border-color: #ff69b4 #ff69b4 transparent transparent;
        border-style: solid;
        animation: load_half_rorate .6s infinite;
    }

    .fun-loading-circle-half-small {
        width: 14px;
        height: 14px;
        border-width: 3px;
    }
    .fun-loading-circle-half-middle {
        width: 28px;
        height: 28px;
        border-width: 4px;
    }
    .fun-loading-circle-half-large {
        width: 40px;
        height: 40px;
        border-width: 5px;
    }

    @keyframes load_half_rorate {
        100% {
            transform: rotate(360deg);
        }
    }
</style>
