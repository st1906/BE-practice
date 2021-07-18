const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class test1626601598880 {
    name = 'test1626601598880'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "friend" ADD "test" character varying`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "friend" DROP COLUMN "test"`);
    }
}
