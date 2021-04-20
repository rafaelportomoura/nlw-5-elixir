import { Router } from 'express';
import { SettingsController } from './controllers/Settings';

const routes = Router();

/*
 * Tipos de Parametros
 * Routes Params => Parametros de rotas
 * Query Params => Filtros e buscas
 * Body params => objetos
 */

const settingsController = new SettingsController();

routes.post('/settings', settingsController.create);

export { routes };
