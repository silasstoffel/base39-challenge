import { container } from 'tsyringe';
import { MenuRepositoryInterface } from '../../domain/menu/menu.repository.interface';
import { MenuRepository } from '../database/repositories/menu.repository';

container.registerSingleton<MenuRepositoryInterface>('MenuRepository', MenuRepository);
