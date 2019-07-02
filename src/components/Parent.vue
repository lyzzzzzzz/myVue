<template>
  <div>
    <h2>父组件</h2>
    <Test>
      <!-- <template scope="animals" slot="child-ul">
        <li>{{animals.text}}</li>
      </template>

      <template v-slot:user="{user}">
        <p>{{user.firstName}}</p>
      </template>-->
      <!-- 第二种写法
       <template v-slot:user="ss">
        <p>{{ss.user.lastName}}</p>
      </template>-->

      <!-- <p slot='dd'></p> -->
      <template slot="dd">
      </template>
  <!-- <template v-slot:dd> -->
    <!-- <h1>Here might be a page title</h1> -->
  <!-- </template> -->
    </Test>
  </div>
</template>
  
<script>
import Test from "./Test";
export default {
  name: "parent",
  components: {
    Test
  }
};
</script>
