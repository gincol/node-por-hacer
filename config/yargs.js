const descripcion = {
  demand: true,
  alias: 'd',
  desc: 'Descripción de la tarea por hacer'
}

const completado = {
  alias: 'c',
  default: true,
  desc: 'Narcar una tarea como completada'
}

const argv = require('yargs')
  .command('crear', 'Crea un elemento por hacer', {descripcion})
  .command('actualizar', 'Actualiza el estado completado de una tarea', {descripcion,completado})
  .command('borrar', 'Borra un elemento por hacer', {descripcion})
  .help()
  .argv;

  module.exports = {
    argv
  }