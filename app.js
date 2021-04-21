const routes = [
  {
    path: "/",
    template: Home,
  },
  {
    path: "/contacto",
    template: Contact,
  },
  {
    path: "/todos",
    template: Todos,
  },
];

const routesDict = {
  '/': {
    path: "/",
    template: Home,
  },
  '/contacto': {
    path: "/contacto",
    template: Contact,
  },
  '/todos': {
    path: "/todos",
    template: Todos,
  }
}

const loadRoute = async (path) => {
  const content = document.getElementById('data-router');
  const rta = routesDict[path];
  if (rta) {
    content.innerHTML = await rta.template();
  } else {
    content.innerHTML = '<p>not found 404</p>';
  }
} 