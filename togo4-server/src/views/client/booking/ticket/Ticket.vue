<template>
  <div id="ticket">
    <div class="ticket_contents">
      <TicketBox></TicketBox>
    </div>
  </div>
</template>

<script>
import TicketBox from "./components/TicketBox.vue"
export default {
  name:"Ticket",
  components:{
    TicketBox
  }
}
</script>

<style>
#ticket{
  width: 100%;
  height: 100%;
  text-align: center;
  background-color: rgba(206, 200, 200, 0.562);
}
.ticket_contents{
  margin: auto;
  width: 89%;
  height: 100%;
  background-color: #fff;
}
</style>