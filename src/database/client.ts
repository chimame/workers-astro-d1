import type { DB } from 'kysely-codegen'

import { Kysely } from 'kysely'
import { D1Dialect } from 'kysely-d1'

export const client = new Kysely<DB>({ dialect: new D1Dialect({ database: import.meta.env.DB }) })
