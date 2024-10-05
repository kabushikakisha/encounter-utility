import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"

/**
 * Model description here for TypeScript hints.
 */
export const TerrainStoreModel = types
  .model("TerrainStore")
  .props({})
  .actions(withSetPropAction)
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface TerrainStore extends Instance<typeof TerrainStoreModel> {}
export interface TerrainStoreSnapshotOut extends SnapshotOut<typeof TerrainStoreModel> {}
export interface TerrainStoreSnapshotIn extends SnapshotIn<typeof TerrainStoreModel> {}
export const createTerrainStoreDefaultModel = () => types.optional(TerrainStoreModel, {})
