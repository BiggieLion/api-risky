import { Test, TestingModule } from '@nestjs/testing';
import { CreditsController } from './credits.controller';
import { CreditsService } from './credits.service';

describe('CreditsController', () => {
  let creditsController: CreditsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CreditsController],
      providers: [CreditsService],
    }).compile();

    creditsController = app.get<CreditsController>(CreditsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(creditsController.getHello()).toBe('Hello World!');
    });
  });
});
