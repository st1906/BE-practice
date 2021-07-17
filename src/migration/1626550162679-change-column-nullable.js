const { MigrationInterface, QueryRunner } = require("typeorm");

module.exports = class changeColumnNullable1626550162679 {
    name = 'changeColumnNullable1626550162679'

    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "friend" ALTER COLUMN "nickname" SET NOT NULL`);
    }

    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "friend" ALTER COLUMN "nickname" DROP NOT NULL`);
    }
}
