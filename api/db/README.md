This directory is used for Phinx migrations.

Create a new migration by running:

```
vendor/bin/phinx create <MigrationName>
```

Execute migrations by running:

```
vendor/bin/phinx migrate -e <environment>
```

`<environment>` is based on your `phinx.yml` configuration. See `phinx.yml.example` for an example.