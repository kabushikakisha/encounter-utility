import { MonsterModel } from "./Monster"

test("can be created", () => {
  const instance = MonsterModel.create({})

  expect(instance).toBeTruthy()
})
