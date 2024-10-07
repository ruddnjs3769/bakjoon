var fs = require("fs");

var input = fs.readFileSync("input.txt", "utf-8").trim().split("\n");

const N = parseInt(input[0]);

const S = input.slice(1).map((el) => el.split(" ").map(Number));

let min = Infinity;

const getTeamStat = (team) => {
  let stat = 0;
  for (let i of team) {
    for (let j of team) {
      if (i !== j) {
        stat += S[i][j];
      }
    }
  }
  return stat;
};

const divideTeams = (index, teamStart) => {
  if (teamStart.length > N / 2) return;
  if (index === N) {
    if (teamStart.length !== N / 2) return;
    const teamLink = Array.from({ length: N }, (_, i) => i).filter(
      (i) => !teamStart.includes(i)
    );
    const statStart = getTeamStat(teamStart);
    const statLink = getTeamStat(teamLink);
    min = Math.min(min, Math.abs(statStart - statLink));
    return;
  }
  divideTeams(index + 1, [...teamStart, index]);
  divideTeams(index + 1, teamStart);
};

divideTeams(0, []);
console.log(min);
