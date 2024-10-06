import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"
import { StoryEncounterModel } from "app/models/StoryEncounter"
import { MonsterEncounterModel } from "app/models/MonsterEncounter"

/**
 * Model description here for TypeScript hints.
 */
export const TerrainModel = types
  .model("Terrain")
  .props({
    rolls: types.array(StoryEncounterModel | MonsterEncounterModel)
  })
  .actions(withSetPropAction)
  .views((self : any) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self : any) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface Terrain extends Instance<typeof TerrainModel> {}
export interface TerrainSnapshotOut extends SnapshotOut<typeof TerrainModel> {}
export interface TerrainSnapshotIn extends SnapshotIn<typeof TerrainModel> {}
export const createTerrainDefaultModel = () => types.optional(TerrainModel, {})
