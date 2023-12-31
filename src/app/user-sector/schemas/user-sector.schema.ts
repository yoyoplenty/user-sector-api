import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type UserSectorDocument = HydratedDocument<UserSector>;

@Schema({ collection: 'usersectors', versionKey: false, timestamps: true })
export class UserSector {
  @ApiProperty()
  @Prop({ type: String, required: true })
  name: string;

  @ApiProperty()
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Sector', required: true })
  sector: mongoose.Schema.Types.ObjectId;

  @ApiProperty()
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  user: mongoose.Schema.Types.ObjectId;

  @ApiProperty()
  @Prop({ type: Boolean, required: true })
  agreedTerms: boolean;
}

export const UserSectorSchema = SchemaFactory.createForClass(UserSector);
