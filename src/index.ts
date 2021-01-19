
type Directions = 'NORTH' | 'SOUTH' | 'EAST' | 'WEST'
type Commands = 'F' | 'B' | 'L' | 'R'

const GRID = [10,10]

class MarsRover {
  coordinates: number[]
  direction: Directions
  constructor(coordinates: number[], direction: Directions) {
    this.coordinates = coordinates
    this.direction = direction
  }

  getCoordinates(): number[] {
    return this.coordinates
  }

  getDirection(): Directions {
    return this.direction
  }

  validateCommand(command: string): boolean {
    if(command) {
      return /^[FBLR]*$/.test(command)
    }
    return false
  }

  move(command: Commands) {
    if(['L','R'].includes(command)) {
      this.direction = this.getNewDirections(command)
    }
    if(['F','B'].includes(command)) {
      this.coordinates = this.getNewCoordinates(command)
    }
  }

  getNewDirections(command: Commands): Directions {
    switch(this.direction) {
      case 'NORTH':
        return command === 'R' ? 'EAST' : 'WEST'
      case 'EAST':
        return command === 'R' ? 'SOUTH' : 'NORTH'
      case 'SOUTH':
        return command === 'R' ? 'WEST' : 'EAST'
      case 'WEST':
        return command === 'R' ? 'NORTH' : 'SOUTH'
    }
  }

  getNewCoordinates(command: Commands): [number, number] {
    let [x,y] = this.coordinates
    switch(this.direction) {
      case 'NORTH':
        command === 'F' ? ++y : --y
        break
      case 'EAST':
        command === 'F' ? ++x : --x
        break
      case 'SOUTH':
        command === 'F' ? --y : ++y
        break
      case 'WEST':
        command === 'F' ? --x : ++x
        break
    }

    return this.normalizeCoordinates([x,y])
  }

  normalizeCoordinates(coordinates: [number, number]): [number, number] {
    if(Math.pow(coordinates[0], 2) === Math.pow(GRID[0], 2)) {
      coordinates[0] = 0
    }
    if(Math.pow(coordinates[1], 2) === Math.pow(GRID[1], 2)) {
      coordinates[1] = 0
    }
    return coordinates
  }
}

export default MarsRover