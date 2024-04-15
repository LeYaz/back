import { Test, TestingModule } from '@nestjs/testing';
import { ListeChampsController } from './liste-champs.controller';
import { ListeChampsService } from './liste-champs.service';

describe('ListeChampsController', () => {
  let controller: ListeChampsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ListeChampsController],
      providers: [ListeChampsService],
    }).compile();

    controller = module.get<ListeChampsController>(ListeChampsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
