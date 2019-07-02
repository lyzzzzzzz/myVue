<template>
  <div>
    <h2>子组件</h2>
    <header>
      <slot name="dd">header</slot>
    </header>
    <!-- <ul>
      <slot name="child-ul" v-for="item in animal" v-bind:text="item.name"></slot>
    </ul>
    <p>
     <slot name="user" v-bind:user="user"></slot>
    </p> -->
   <!-- <footer>
     <slot name="footer">footer</slot>
   </footer> -->
  </div>
</template>
  
<script>
export default {
  name: "test",
  data: function() {
    return {
      animal: [
        { name: "大象" },
        { name: "小狗" },
        { name: "小猫" },
        { name: "老虎" }
      ],
      user: {
        firstName: "li",
        lastName: "yazhen"
      }
    };
  }
};
</script>
