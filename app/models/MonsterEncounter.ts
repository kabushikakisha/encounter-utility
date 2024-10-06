import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"
import { MonsterModel } from "app/models/Monster"

export const MonsterEncounterModel = types
  .model("MonsterEncounter")
  .props({
    roll: types.number,
    monsters: types.array(MonsterModel),
  })
  .actions(withSetPropAction)
  .views((self : any) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self : any) => ({})); // eslint-disable-line @typescript-eslint/no-unused-vars

export interface MonsterEncounter extends Instance<typeof MonsterEncounterModel> {}
export interface MonsterEncounterSnapshotOut extends SnapshotOut<typeof MonsterEncounterModel> {}
export interface MonsterEncounterSnapshotIn extends SnapshotIn<typeof MonsterEncounterModel> {}
export const createMonsterEncounterDefaultModel = () => types.optional(MonsterEncounterModel, {})