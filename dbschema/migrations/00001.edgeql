CREATE MIGRATION m1dlhmufnn724a7jxt6efccgiddvjn5ldmpvb53fxxu46shzoxnpiq
    ONTO initial
{
  CREATE TYPE default::User {
      CREATE PROPERTY score: std::int16;
      CREATE REQUIRED PROPERTY username: std::str {
          CREATE CONSTRAINT std::exclusive;
      };
  };
};
