import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { TerrainStoreModel } from "./TerrainStore"
import { MonsterStoreModel } from "./MonsterStore"
import { AuthenticationStoreModel } from "./AuthenticationStore"
import { EpisodeStoreModel } from "./EpisodeStore"

/**
 * A RootStore model.
 */
export const RootStoreModel = types.model("RootStore").props({
  terrainStore: types.optional(TerrainStoreModel, {} as any),
  monsterStore: types.optional(MonsterStoreModel, {} as any),
  authenticationStore: types.optional(AuthenticationStoreModel, {}),
  episodeStore: types.optional(EpisodeStoreModel, {}),
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}
/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
