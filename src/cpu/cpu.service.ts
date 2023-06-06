import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}

  compute(a: number, b: number) {
    console.log('CPU service getting some power from power service');
    this.powerService.supplyPower(10);
    return a + b;
  }
}
