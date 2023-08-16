export default class Team {
  constructor(...characters) {
    this.characters = characters;
  }

  [Symbol.iterator]() {
    const teamCharacters = this.characters;
    let index = 0;
    return {
      next() {
        if (index < teamCharacters.length) {
          index += 1;
          return {
            value: teamCharacters[index - 1],
            done: false,
          };
        }
        return {
          value: undefined,
          done: true,
        };
    },
    };
  }
}
