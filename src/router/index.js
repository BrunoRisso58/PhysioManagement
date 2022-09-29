import { createRouter, createWebHistory } from 'vue-router'
import CadastroView from '../views/CadastroView.vue'
import PacientesView from '../views/PacientesView.vue'
import PerfilView from '../views/PerfilView.vue'

const routes = [
  {
    path: '/',
    name: 'Pacientes',
    component: PacientesView
  },
  {
    path: '/cadastrar',
    name: 'Cadastro',
    component: CadastroView
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: PerfilView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
