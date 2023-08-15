import Character from './Character';
import Team from './Team';

const bowman = new Character('Лучник', 'Bowman', 50, 1, 40, 10);
const daemon = new Character('Демон', 'Daemon', 90, 1, 70, 40);

const team = new Team(bowman, daemon);
for (const num of team) {
  console.log(num);
}
