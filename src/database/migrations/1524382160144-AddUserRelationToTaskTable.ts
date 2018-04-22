import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class AddUserRelationToTaskTable1524382160144 implements MigrationInterface {

    private tableForeignKey = new TableForeignKey(
        'fk_user_task',
        ['user_id'],
        ['id'],
        'task',
        ''
    );

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createForeignKey('task', this.tableForeignKey);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropForeignKey('task', this.tableForeignKey);
    }

}
