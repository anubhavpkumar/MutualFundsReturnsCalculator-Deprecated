var dtman = require("../DateManipulations");

test('Check is the date is reached - true case', () => {
    var TestSellDate = () => {
        return dtman.IsSellDateReached("21-02-2020", "20-02-2020");
    }
    expect(TestSellDate()).toBe(true);
});

test('Check is the date is reached - false case', () => {
    var TestSellDate = () => {
        return dtman.IsSellDateReached("1-7-2020", "2-7-2020");
    }
    expect(TestSellDate()).toBe(false);
});

test('Check is the date is reached - equal case', () => {
    var TestSellDate = () => {
        return dtman.IsSellDateReached("22-02-2020", "22-02-2020");
    }
    expect(TestSellDate()).toBe(true);
});

test('Increase the Month by One - Normal case' , () => {
    var TestIncreaseMonth = () => {
        var dateString = "09-08-2020";
        dateString = dtman.IncreaseMonthByOne(dateString);
        return dateString;
    }
    expect(TestIncreaseMonth()).toBe("09-9-2020");
});

test('Increase the Month by One - Over Year Case' , () => {
    var TestIncreaseMonth = () => {
        var dateString = "09-12-2020";
        dateString = dtman.IncreaseMonthByOne(dateString);
        return dateString;
    }
    expect(TestIncreaseMonth()).toBe("09-1-2021");
});

test('Increase the Year by One - Normal Case' , () => {
    var TestIncreaseMonth = () => {
        var dateString = "09-12-2020";
        dateString = dtman.IncreaseYearByOne(dateString);
        return dateString;
    }
    expect(TestIncreaseMonth()).toBe("09-12-2021");
});