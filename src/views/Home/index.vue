<template>
  <div class="home">
    <van-button @click="add" type="danger">+</van-button>
    <div class="text">
      {{ color }} - vuex:{{ num }}
    </div>
    <div class="login">
      <van-button type="primary" @click="goToLogin">登录</van-button>
    </div>
  </div>
</template>

<script lang="ts" setup="props">
import { reactive, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { article } from "../../api";
// 这种方式好像无法导入类型
// import { IState } from "../../store";

const router = useRouter();
const store = useStore();

const state = reactive({
  name: "chenwl",
});

const num = computed(() => store.state.num);
const color = computed(() => (num.value > 20 ? "#f00" : "#0f0"));

const goToLogin = () => router.push("/login");
const add = () => store.commit("addNum");

article().then(res=>{
    console.log(res);
    
})

</script>
<style lang="scss" scoped>
.text {
  color: v-bind("color");
}
</style>

