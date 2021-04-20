import { response, Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { Setting } from './entities/Setting';
import { SettingsRepository } from './repositories/SettingsRepository';

const routes = Router();

/*
 * Tipos de Parametros
 * Routes Params => Parametros de rotas
 * Query Params => Filtros e buscas
 * Body params => objetos
 */

routes.post('/settings', async (request, response) => {
  const { chat, username } = request.body;

  const settingsRepository = getCustomRepository(SettingsRepository);

  const settings = settingsRepository.create({
    chat,
    username,
  });

  await settingsRepository.save(settings);

  return response.json(settings);
});

export { routes };
