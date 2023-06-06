import { Module } from '@nestjs/common';
import { ComputerController } from './computer.controller';
import { DiskModule } from 'learningSrc/disk/disk.module';
import { CpuModule } from 'learningSrc/cpu/cpu.module';

@Module({
  imports: [DiskModule, CpuModule],
  controllers: [ComputerController],
})
export class ComputerModule {}
