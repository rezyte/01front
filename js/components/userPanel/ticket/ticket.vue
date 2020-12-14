<template>
  <div id="ticket">
    <div id="ticketWrapper">
      <send-ticket></send-ticket>
      <all-tickets></all-tickets>
    </div>
  </div>
</template>

<script>
export default {
name: "ticket",
  components:{
    'sendTicket':()=>import("./sendTicket.vue"),
    'allTickets':()=>import("./allTickets.vue")
  }
}
</script>

<style scoped>
#ticket{
  width: 100%;
}
</style>