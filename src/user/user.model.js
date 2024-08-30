import { DataTypes, Model } from '@sequelize/core';
import { Attribute, PrimaryKey, AutoIncrement, NotNull, Unique, Default } from '@sequelize/core/decorators-legacy';

class User extends Model {
  @Attribute(DataTypes.INTEGER)
  @PrimaryKey
  @AutoIncrement
  id;

  @Attribute(DataTypes.STRING)
  @NotNull
  name;

  @Attribute(DataTypes.STRING)
  @NotNull
  @Unique
  email;

  @Attribute(DataTypes.STRING)
  @NotNull
  @Unique
  cpf;

  @Attribute(DataTypes.BOOLEAN)
  @NotNull
  @Default(true)
  isActive;

  @Attribute({ type: DataTypes.STRING, defaultValue: 'student' })
  @NotNull
  role;
}

export { User };
