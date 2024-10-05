import { TerrainModel } from "./Terrain"

test("can be created", () => {
  const instance = TerrainModel.create({})

  expect(instance).toBeTruthy()
})
