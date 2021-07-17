const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class friendTable1626549981097 {
    name = 'friendTable1626549981097'

    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "friend" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "nickname" character varying, CONSTRAINT "PK_1b301ac8ac5fcee876db96069b6" PRIMARY KEY ("id"))`);
    }

    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "friend"`);
    }
}
