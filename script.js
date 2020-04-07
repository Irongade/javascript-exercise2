const data = [
  {
    principal: 2500,
    time: 1.8
  },
  {
    principal: 1000,
    time: 5
  },
  {
    principal: 3000,
    time: 1
  },
  {
    principal: 2000,
    time: 3
  }
];

const interestCalculator = arr => {
  const interestData = arr.map(data => {
    if (data.principal >= 2500 && data.time > 1 && data.time < 3) {
      data.rate = 3;
      data.interest = (data.principal * data.time * data.rate) / 100;
    } else if (data.principal >= 2500 && data.time >= 3) {
      data.rate = 4;
      data.interest = (data.principal * data.time * data.rate) / 100;
    } else if (data.principal < 2500 || data.time <= 1) {
      data.rate = 2;
      data.interest = (data.principal * data.time * data.rate) / 100;
    } else {
      data.rate = 1;
      data.interest = (data.principal * data.time * data.rate) / 100;
    }
    return data;
  });
  console.log(interestData);
  return interestData;
  // return interestData;
};

interestCalculator(data);
