const random = Math.floor(Math.random() * 3);

const getRandEvent = () => {
  if (random == 0) {
    return 'Marathon';
  } else if (random == 1) {
    return 'Triathlon';
  } else if (random == 2) {
    return 'Penthathlon';
  }
}

// The scope of `days` is too tight 
const getTrainingDays = condition => {
  if (getRandEvent() == 'Marathon') {
    return Number(50);
    }
    else if (getRandEvent() == 'Penthathlon') {
    return Number(75);
    }
    else if (getRandEvent() == `Triathlon`) {
    return Number(100);
    }
  }
// decide the day according to the condition, write a conditional;

const logEvent = condition => {
  const name = 'Nala';
  console.log(`${name}'s condition is: ${condition}`);
};
const logEvent2 = condition2 => {
  const name = 'Warren';
  console.log(`${name2}'s condition is: ${condition2}`);
};

const logTime = days => {
  const name = 'Nala';
  console.log(`${name}'s time to train is: ${days} days`);
};
const logTime2 = days2 => {
  const name = 'Warren';
  console.log(`${name2}'s time to train is: ${days2} days`);
};
const condition = getRandEvent();
const days = getTrainingDays(condition);


logEvent(condition);
logTime(days);

const condition2 = getRandEvent();
const days2 = getTrainingDays(condition2);
const name2 = 'Warren';

logEvent2(condition2);
logTime2(days2);