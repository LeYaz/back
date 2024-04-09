import { Test, TestingModule } from '@nestjs/testing';
import { ListeService } from './liste.service';

describe('ListeService', () => {
  let service: ListeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ListeService],
    }).compile();

    service = module.get<ListeService>(ListeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
