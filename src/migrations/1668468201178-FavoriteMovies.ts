import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class FavoriteMovies1668468201178 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('filmes_favorits').catch();
    await queryRunner.createTable(
      new Table({
        name: 'filmes_favoritos',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'titulo',
            type: 'varchar(200)',
          },
          {
            name: 'ativo',
            type: 'boolean',
          },
          {
            name: 'criado_em',
            type: 'timestamp',
          },
          {
            name: 'atualizado_em',
            type: 'timestamp',
          },
          {
            name: 'user_id',
            type: 'integer',
          },
        ],
      }),
    );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('FavoriteMovies');
    }
}
