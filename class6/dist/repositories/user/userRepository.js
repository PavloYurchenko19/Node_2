"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../../entity/User");
let UserRepository = class UserRepository extends typeorm_1.Repository {
    async createdUser(user) {
        return (0, typeorm_1.getManager)().getRepository(User_1.User).save(user);
    }
    async getUsers() {
        return (0, typeorm_1.getManager)().getRepository(User_1.User).find();
    }
    async getUsersWithPosts() {
        return (0, typeorm_1.getManager)().getRepository(User_1.User).find({ relations: ['posts'] });
    }
    async usersAgeLessThen20() {
        return (0, typeorm_1.getManager)().getRepository(User_1.User).createQueryBuilder('user').where('user.age < 20')
            .getMany();
    }
    async change(id, email, age) {
        return (0, typeorm_1.getManager)().getRepository(User_1.User).update({ id }, {
            email,
            age,
        });
    }
    async deleteUser(id) {
        return (0, typeorm_1.getManager)().getRepository(User_1.User).delete({ id });
    }
    async getUserByEmail(email) {
        return (0, typeorm_1.getManager)().getRepository(User_1.User).createQueryBuilder('user')
            .where('user.email = :email', { email })
            .andWhere('user.deletedAt IS NULL')
            .getOne();
    }
};
UserRepository = __decorate([
    (0, typeorm_1.EntityRepository)(User_1.User)
], UserRepository);
exports.userRepository = new UserRepository();
//# sourceMappingURL=userRepository.js.map