import { Controller, Get } from '@nestjs/common';
import { CpuService } from 'learningSrc/cpu/cpu.service';
import { DiskService } from 'learningSrc/disk/disk.service';

@Controller('computer')
export class ComputerController {
  constructor(
    private cpuService: CpuService,
    private diskService: DiskService,
  ) {}

  @Get()
  run() {
    return [this.cpuService.compute(1, 2), this.diskService.getData()];
  }
}
