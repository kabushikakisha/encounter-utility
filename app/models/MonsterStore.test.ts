import { MonsterStoreModel } from "./MonsterStore"

test("can be created", () => {
  const instance = MonsterStoreModel.create({})

  expect(instance).toBeTruthy()
})
