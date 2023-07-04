import { createRouter, createWebHistory } from 'vue-router';

// Import your Vue components
import Home from '@/views/Home';
import ContactManager from '@/views/ContactManager';
import AddContact from '@/views/AddContact';
import EditContact from '@/views/EditContact';
import ViewContact from '@/views/ViewContact';
import PageNotFound from '@/views/PageNotFound';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirects: "/contacts"
  },
  {
    path: '/contacts',
    name: 'ContactManager',
    component: ContactManager,
  },
  {
    path: '/contacts/add',
    name: 'AddContact',
    component: AddContact,
  },
  {
    path: '/contacts/edit/:contactId',
    name: 'EditContact',
    component: EditContact,
  },
  {
    path: '/contacts/view/:contactId',
    name: 'ViewContact',
    component: ViewContact,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: PageNotFound,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;