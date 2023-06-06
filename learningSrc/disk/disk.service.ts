import { Injectable } from '@nestjs/common';
import { PowerService } from 'learningSrc/power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}

  getData(): string {
    console.log('Data service getting some power from power service');
    this.powerService.supplyPower(20);

    return 'Data!';
  }
}
