import Vue from 'vue'
import VueRouter from 'vue-router'
const Booking = () =>
    import ('../views/client/booking/Booking.vue')
const Airplane = () =>
    import ('../views/client/booking/airplane/Airplane.vue')

const Train = () =>
    import ('../views/client/booking/train/Train.vue')

const Ticket = () =>
    import ('../views/client/booking/ticket/Ticket.vue')

const Strategy = () =>
    import ('../views/client/strategy/homePage.vue')

Vue.use(VueRouter)

const routes = [{
    path: '/booking',
    name: 'booking',
    component: Booking,
    children: [{
        path: 'airplane',
        component: Airplane
    }, {
        path: 'train',
        component: Train
    }, {
        path: 'ticket',
        component: Ticket
    }]
}, {
    path: '/strategy',
    name: 'strategy',
    component: Strategy
}]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router