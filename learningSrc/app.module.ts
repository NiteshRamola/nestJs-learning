import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagesModule } from './messages/messages.module';
import { ComputerModule } from './computer/computer.module';
import { DiskModule } from './disk/disk.module';
import { PowerModule } from './power/power.module';
import { CpuModule } from './cpu/cpu.module';

@Module({
  imports: [MessagesModule, ComputerModule, DiskModule, PowerModule, CpuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
