import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Meetups from './components/meetup/meetups.vue'
import CreateMeetup from './components/meetup/createMeetup.vue'
import Profile from './components/user/profile.vue'
import SignIn from './components/user/signIn.vue'
import SignUp from './components/user/signUp.vue'
import Meetup from './components/meetup/meetup.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/meetups',
      name: 'meetups',
      component: Meetups
    },
    {
      path: '/meetups/:id',
      name: 'meetup',
      props: true,
      component: Meetup
    },
    {
      path: '/meetup/new',
      name: 'createMeetup',
      component: CreateMeetup
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    }
  ]
})
