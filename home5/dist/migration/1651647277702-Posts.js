"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post1651570126326 = void 0;
const typeorm_1 = require("typeorm");
class Post1651570126326 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'Posts',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'title',
                    type: 'varchar',
                    width: 250,
                    isUnique: true,
                    isNullable: false,
                },
                {
                    name: 'text',
                    type: 'varchar',
                    width: 250,
                    isNullable: false,
                },
                {
                    name: 'userId',
                    type: 'int',
                },
                {
                    name: 'createdAt',
                    type: 'timestamp',
                    isNullable: false,
                    default: 'now()',
                },
                {
                    name: 'deletedAt',
                    type: 'timestamp',
                    isNullable: true,
                },
            ],
            foreignKeys: [
                {
                    columnNames: ['userId'],
                    referencedTableName: 'Users',
                    referencedColumnNames: ['id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
            ],
        }), true);
    }
    async down(queryRunner) {
        await queryRunner.query(`
        DROP TABLE IF EXISTS Posts
        `);
    }
}
exports.Post1651570126326 = Post1651570126326;
//# sourceMappingURL=1651647277702-Posts.js.map