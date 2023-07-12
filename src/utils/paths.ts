import routes from './routes'

const paths = [
  {
    label: 'Inicio',
    path: routes.home,
    delayOut: 0.8,
    delayIn: 0.5
  },
  {
    label: 'Nosotros',
    path: routes.about,
    delayOut: 0.7,
    delayIn: 0.6
  },
  {
    label: 'Equipo',
    path: routes.team,
    delayOut: 0.6,
    delayIn: 0.7
  },
  {
    label: 'Proyectos',
    path: routes.projects,
    delayOut: 0.5,
    delayIn: 0.8
  },
  {
    label: 'Contácto',
    path: routes.contact,
    delayOut: 0.4,
    delayIn: 0.9
  }
]

export default paths
