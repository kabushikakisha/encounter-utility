import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"

export const StoryEncounterModel = types
  .model("StoryEncounter")
  .props({
    roll: types.array(types.number),
    encounter: types.string,
  })
  .actions(withSetPropAction)
  .views((self : any) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self : any) => ({})); // eslint-disable-line @typescript-eslint/no-unused-vars

export interface StoryEncounter extends Instance<typeof StoryEncounterModel> {}
export interface StoryEncounterSnapshotOut extends SnapshotOut<typeof StoryEncounterModel> {}
export interface StoryEncounterSnapshotIn extends SnapshotIn<typeof StoryEncounterModel> {}
export const createStoryEncounterDefaultModel = () => { types.optional(StoryEncounterModel, {})

}