import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { PowerModule } from 'learningSrc/power/power.module';

@Module({
  imports: [PowerModule],
  providers: [CpuService],
  exports: [CpuService],
})
export class CpuModule {}
