const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class removeTestColumn1626601752242 {
    name = 'removeTestColumn1626601752242'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "friend" DROP COLUMN "test"`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "friend" ADD "test" character varying`);
    }
}
