import { Test, TestingModule } from '@nestjs/testing';
import { ListeController } from './liste.controller';
import { ListeService } from './liste.service';

describe('ListeController', () => {
  let controller: ListeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListeController],
      providers: [ListeService],
    }).compile();

    controller = module.get<ListeController>(ListeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
