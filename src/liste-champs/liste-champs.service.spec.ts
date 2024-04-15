import { Test, TestingModule } from '@nestjs/testing';
import { ListeChampsService } from './liste-champs.service';

describe('ListeChampsService', () => {
  let service: ListeChampsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListeChampsService],
    }).compile();

    service = module.get<ListeChampsService>(ListeChampsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
