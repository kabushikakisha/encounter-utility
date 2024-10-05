import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"

/**
 * Model description here for TypeScript hints.
 */
export const MonsterModel = types
  .model("Monster")
  .props({})
  .actions(withSetPropAction)
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface Monster extends Instance<typeof MonsterModel> {}
export interface MonsterSnapshotOut extends SnapshotOut<typeof MonsterModel> {}
export interface MonsterSnapshotIn extends SnapshotIn<typeof MonsterModel> {}
export const createMonsterDefaultModel = () => types.optional(MonsterModel, {})
