import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"

/**
 * Model description here for TypeScript hints.
 */
export const MonsterStoreModel = types
  .model("MonsterStore")
  .props({})
  .actions(withSetPropAction)
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface MonsterStore extends Instance<typeof MonsterStoreModel> {}
export interface MonsterStoreSnapshotOut extends SnapshotOut<typeof MonsterStoreModel> {}
export interface MonsterStoreSnapshotIn extends SnapshotIn<typeof MonsterStoreModel> {}
export const createMonsterStoreDefaultModel = () => types.optional(MonsterStoreModel, {})
