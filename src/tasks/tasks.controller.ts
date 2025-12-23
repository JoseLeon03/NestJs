import { Controller, Get } from '@nestjs/common';

@Controller({})
export class TasksController {
  @Get('/tasks')
  getAllTasks(){
    // buscar en una bd
    // peticion a otro servicio
    return 'Retornando todas las tareas'
  }
}
