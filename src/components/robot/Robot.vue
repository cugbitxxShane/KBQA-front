<template>
  <div id="rob">
    <!-- <left></left> -->
    <right></right>
    <div class="clear"></div>
  </div>
</template>

<script>
import Left from './components/Left'
import Right from './components/Right'
import Msg from './components/Msg'

export default {
  name: 'rob',
  components: {
    Left,
    Right,
    Msg
  }
}
</script>

<style>
body {
  background: #f9f9f9;
}

#rob {
  width: 100%;
  height: 100%;
  margin: 50px auto 0px auto;
}

.clear {
  clear: both;
}
</style>