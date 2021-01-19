import MarsRover from "./index"

describe("Rover will be initialized", () => {
  const marsRover = new MarsRover([3, 4], "NORTH")

  it("will show the initial coordinates, [3,4]", () => {
    expect(marsRover.getCoordinates()).toEqual([3, 4])
  })

  it("will show the initial direction, 'NORTH'", () => {
    expect(marsRover.getDirection()).toEqual("NORTH")
  })
})

describe(" Validate command", () => {
  const marsRover = new MarsRover([3, 4], "NORTH")
  it(" return true if validated", () => {
    const command = "FFFFLL"
    expect(marsRover.validateCommand(command)).toBeTruthy()
  })

  it(" return true if validated", () => {
    const command = "FL87654"
    expect(marsRover.validateCommand(command)).toBeFalsy()
  })
})

describe("Rotate rover", () => {
  it("TURN right if command is 'R'", () => {
    const marsRover = new MarsRover([3, 4], "NORTH")
    marsRover.move("R")
    expect(marsRover.getDirection()).toEqual("EAST")
    marsRover.move("R")
    expect(marsRover.getDirection()).toEqual("SOUTH")
  })

  it("TURN left if command is 'L'", () => {
    const marsRover = new MarsRover([3, 4], "NORTH")
    marsRover.move("L")
    expect(marsRover.getDirection()).toEqual("WEST")
    marsRover.move("L")
    expect(marsRover.getDirection()).toEqual("SOUTH") 
  })
})

describe("Move the rover", () => {
  it("Move the rover 1 unit forward with 'F'", () => {
    const marsRover = new MarsRover([3, 4], "NORTH")
    marsRover.move('F')
    expect(marsRover.getCoordinates()).toEqual([3,5])
    marsRover.move('F')
    expect(marsRover.getCoordinates()).toEqual([3,6])
    marsRover.move('R')
    marsRover.move('F')
    expect(marsRover.getCoordinates()).toEqual([4,6])
  })

  it("Move the rover 1 unit backward with 'B'", () => {
    const marsRover = new MarsRover([3, 4], "NORTH")
    marsRover.move('B')
    expect(marsRover.getCoordinates()).toEqual([3,3])
    marsRover.move('R')
    marsRover.move('R')
    marsRover.move('B')
    expect(marsRover.getCoordinates()).toEqual([3,4])
  })

  it("Check for return to 0 index for one of the origin", () => {
    const marsRover = new MarsRover([3, 9], "NORTH")
    marsRover.move('F')
    expect(marsRover.getCoordinates()).toEqual([3,0])
  })
})


