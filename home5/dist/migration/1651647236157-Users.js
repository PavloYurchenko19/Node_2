"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users1651566390203 = void 0;
class Users1651566390203 {
    async up(queryRunner) {
        await queryRunner.query(`
             CREATE TABLE IF NOT EXISTS Users (
                id INT PRIMARY KEY AUTO_INCREMENT,
                firstName VARCHAR(250) NOT NULL,
                lastName VARCHAR(250) NOT NULL,
                age INT CHECK (age > 0),
                phone VARCHAR(250) NOT NULL UNIQUE,
                email VARCHAR(250) NOT NULL UNIQUE,
                password VARCHAR(250) NOT NULL,
                createdAt TIMESTAMP DEFAULT(UTC_TIMESTAMP()) NOT NULL,
                deletedAt TIMESTAMP
            )
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
        DROP TABLE IF EXISTS Users
        `);
    }
}
exports.Users1651566390203 = Users1651566390203;
//# sourceMappingURL=1651647236157-Users.js.map