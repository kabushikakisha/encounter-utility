import { TerrainStoreModel } from "./TerrainStore"

test("can be created", () => {
  const instance = TerrainStoreModel.create({})

  expect(instance).toBeTruthy()
})
