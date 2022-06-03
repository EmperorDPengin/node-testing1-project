const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const actual = utils.trimProperties(input)
    expect(actual).not.toEqual(input)
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toEqual(expected)
  })
  test('[4] the object returned is the exact same one we passed in', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toMatchObject(input)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const input = [{integer:0}, {integer:1}, {integer:2}];
    const result = utils.findLargestInteger(input);
    expect(result).toBe(2); 
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    expect(counter.countDown).toBeInstanceOf(Function)
    const initialCount = counter.initialNumber;
    const countDown = counter.countDown();
    expect(countDown).toBe(initialCount);
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    expect(counter.countDown).toBeInstanceOf(Function)
    const secondCount = counter.initialNumber - 1;
    let countDown = counter.countDown();
    countDown = counter.countDown()
    expect(countDown).toBe(secondCount);
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    expect(counter.countDown).toBeInstanceOf(Function)
    let countDown = counter.countDown();
    countDown = counter.countDown()
    countDown = counter.countDown()
    countDown = counter.countDown()
    expect(countDown).toBe(0);
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    const initialSeason = "summer"
    seasons.next();
    expect(seasons.currentSeason).toBe(initialSeason);
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    const goalSeason = "fall"
    for (let i = 0; i < 2; i++) {
      seasons.next();
    }
    expect(seasons.currentSeason).toBe(goalSeason);
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    const goalSeason = "winter"
    for (let i = 0; i < 3; i++) {
      seasons.next();
    }
    expect(seasons.currentSeason).toBe(goalSeason);
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    const goalSeason = "spring"
    for (let i = 0; i < 4; i++) {
      seasons.next();
    }
    expect(seasons.currentSeason).toBe(goalSeason);
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    const goalSeason = "summer"
    for (let i = 0; i < 5; i++) {
      seasons.next();
    }
    expect(seasons.currentSeason).toBe(goalSeason);
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    const goalSeason = "spring"
    for (let i = 0; i < 40; i++) {
      seasons.next();
    }
    expect(seasons.currentSeason).toBe(goalSeason);
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    expect(focus.odometer).toBe(0);
    focus.drive(50);
    expect(focus.odometer).toBe(50);
  })
  test('[16] driving the car uses gas', () => {
    expect(focus.tank).toBe(focus.maxTank);
    focus.drive(50)
    expect(focus.tank).not.toBe(focus.maxTank);
  })
  test('[17] refueling allows to keep driving', () => {
    expect(focus.odometer).toBe(0);
    focus.drive(700)
    expect(focus.odometer).toBe(600);
    focus.refuel(20)
    focus.drive(100)
    expect(focus.odometer).toBe(700);
    
  })
  test('[18] adding fuel to a full tank has no effect', () => {
    expect(focus.tank).toEqual(focus.maxTank);
    focus.refuel(10)
    expect(focus.tank).toEqual(focus.maxTank);
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', async () => {
    return utils.isEvenNumberAsync(10)
      .then(result => {
        expect(result).toBeTruthy();
      })
  })
  test('[20] resolves false if passed an odd number', () => {
    return utils.isEvenNumberAsync(15)
      .then(result => {
        expect(result).toBeFalsy();
      })
  })
})
