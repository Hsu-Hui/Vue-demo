<template>
  <div class="about">
    <h1>This is an about page</h1>
    <SlotCard>
      <div class="content">
        <h2>Slot內容放在這裡</h2>
      </div>
      <template v-slot:slot_footer>
        <p>多插槽 Slot footer</p>
      </template>
      <template slot="solt_title">
        <p>多插槽 Slot title</p>
      </template>
    </SlotCard>
  </div>
</template>
<script>
import SlotCard from '../components/SlotCard'

export default {
  name: 'abount',
  components:{
    SlotCard
  }
}
</script>
<style scoped>
.content {
  padding: 50px 20px;
  border-radius: 6px;
  background: #a7daed;
  color: #233447;
}
</style>>
